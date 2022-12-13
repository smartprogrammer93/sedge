/*
Copyright 2022 Nethermind

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
package cli

import (
	"bytes"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"testing"
	"time"

	posmoni "github.com/NethermindEth/posmoni/pkg/eth2"
	"github.com/NethermindEth/sedge/configs"
	"github.com/NethermindEth/sedge/internal/pkg/commands"
	"github.com/NethermindEth/sedge/internal/utils"
	"github.com/NethermindEth/sedge/test"
	"github.com/NethermindEth/sedge/test/mock_prompts"
	"github.com/golang/mock/gomock"
	log "github.com/sirupsen/logrus"
)

var (
	inspectExecutionUrl = "http://192.168.128.3"
	inspectConsensusUrl = "http://192.168.128.3"
)

var inspectOut = `
[
	{
		"NetworkSettings": {
			"Bridge": "",
			"SandboxID": "56e2c759c33315c9de009bd70aac0fdeb9367549303433debb71edff8dd4db39",
			"HairpinMode": false,
			"LinkLocalIPv6Address": "",
			"LinkLocalIPv6PrefixLen": 0,
			"Ports": {
				"30303/tcp": [
					{
						"HostIp": "0.0.0.0",
						"HostPort": "30303"
					}
				],
				"30303/udp": [
					{
						"HostIp": "0.0.0.0",
						"HostPort": "30303"
					}
				],
				"8008/tcp": [
					{
						"HostIp": "0.0.0.0",
						"HostPort": "8008"
					}
				],
				"8545/tcp": [
					{
						"HostIp": "0.0.0.0",
						"HostPort": "8560"
					}
				]
			},
			"SandboxKey": "/var/run/docker/netns/56e2c759c333",
			"SecondaryIPAddresses": null,
			"SecondaryIPv6Addresses": null,
			"EndpointID": "",
			"Gateway": "",
			"GlobalIPv6Address": "",
			"GlobalIPv6PrefixLen": 0,
			"IPAddress": "",
			"IPPrefixLen": 0,
			"IPv6Gateway": "",
			"MacAddress": "",
			"Networks": {
				"sedge_network": {
					"IPAMConfig": null,
					"Links": null,
					"Aliases": [
						"execution-client",
						"execution",
						"babf61f2c52a"
					],
					"NetworkID": "b4bb0c21aa1c9495d08309f8f7f4f2fb5a493fd925c880cb146045aafb2f4390",
					"EndpointID": "7832cdd23f1f9f70e38576f8088da61010e057bffb0b98c83bd391065d703ed9",
					"Gateway": "192.168.128.1",
					"IPAddress": "192.168.128.3",
					"IPPrefixLen": 20,
					"IPv6Gateway": "",
					"GlobalIPv6Address": "",
					"GlobalIPv6PrefixLen": 0,
					"MacAddress": "02:42:c0:a8:80:03",
					"DriverOpts": null
				}
			}
		}
	}
]
`

type cliCmdTestCase struct {
	name       string
	configPath string
	runner     commands.CommandRunner
	monitor    MonitoringTool
	fdOut      *bytes.Buffer
	args       CliCmdFlags
	isPreErr   bool
	isErr      bool
}

func (flags *CliCmdFlags) argsList() []string {
	s := []string{}
	if flags.yes {
		s = append(s, "--yes")
	}
	if flags.run {
		s = append(s, "--run")
	}
	if flags.install {
		s = append(s, "-i")
	}
	if flags.executionName != "" {
		s = append(s, "-e", flags.executionName)
	}
	if flags.consensusName != "" {
		s = append(s, "-c", flags.consensusName)
	}
	if flags.validatorName != "" {
		s = append(s, "-v", flags.validatorName)
	}
	if flags.network != "" {
		s = append(s, "-n", flags.network)
	}
	if flags.feeRecipient != "" {
		s = append(s, "--fee-recipient", flags.feeRecipient)
	}
	if flags.services != nil {
		if len(*flags.services) == 0 {
			s = append(s, "--run-client none")
		} else {
			s = append(s, "--run-clients", strings.Join(*flags.services, ","))
		}
	}
	if flags.generationPath != "" {
		s = append(s, "-p", flags.generationPath)
	}
	return s
}

func (flags *CliCmdFlags) toString() string {
	return strings.Join(flags.argsList(), " ")
}

func prepareCliCmd(tc cliCmdTestCase) {
	// Set output buffers
	log.SetOutput(tc.fdOut)
	// Set config file path
	cfgFile = tc.configPath
	initConfig()
	commands.InitRunner(func() commands.CommandRunner {
		return tc.runner
	})
	initMonitor(func() MonitoringTool {
		return tc.monitor
	})
}

func buildCliTestCase(
	t *testing.T,
	name,
	caseTestDataDir string,
	args CliCmdFlags,
	isPreErr,
	isErr bool,
) *cliCmdTestCase {
	tc := cliCmdTestCase{}
	configPath := t.TempDir()

	err := test.PrepareTestCaseDir(filepath.Join("testdata", "cli_tests", caseTestDataDir, "config"), configPath)
	if err != nil {
		t.Fatalf("Can't build test case: %v", err)
	}
	dcPath := filepath.Join(configPath, "docker-compose-scripts")
	err = os.Mkdir(dcPath, os.ModePerm)
	if err != nil {
		t.Fatalf("Can't build test case: %v", err)
	}

	// TODO: allow runner edition
	tc.runner = &test.SimpleCMDRunner{
		SRunCMD: func(c commands.Command) (string, error) {
			// For getContainerIP logic
			if strings.Contains(c.Cmd, "ps --quiet") {
				return "666", nil
			} else if strings.Contains(c.Cmd, "docker inspect 666") {
				return inspectOut, nil
			}
			return "", nil
		},
		SRunBash: func(bs commands.BashScript) (string, error) {
			return "", nil
		},
	}

	// Check for port occupation
	defaultsPorts := map[string]string{
		"ELApi": configs.DefaultApiPortEL,
		"CLApi": configs.DefaultApiPortCL,
	}
	ports, err := utils.AssignPorts("localhost", defaultsPorts)
	if err != nil {
		t.Fatalf(configs.PortOccupationError, err)
	}

	tc.monitor = &monitorStub{
		data: []posmoni.EndpointSyncStatus{
			{Endpoint: inspectExecutionUrl + ":" + ports["ELApi"], Synced: true},
			{Endpoint: inspectConsensusUrl + ":" + ports["CLApi"], Synced: true},
			{Endpoint: inspectExecutionUrl + ":" + ports["ELApi"], Synced: true},
			{Endpoint: inspectConsensusUrl + ":" + ports["CLApi"], Synced: true},
		},
	}

	tc.name = name
	tc.args = args
	tc.args.generationPath = dcPath
	tc.configPath = filepath.Join(configPath, "config.yaml")
	tc.fdOut = new(bytes.Buffer)
	tc.isPreErr = isPreErr
	tc.isErr = isErr
	return &tc
}

func TestCliCmd(t *testing.T) {
	// TODO: Add more test cases
	tcs := []cliCmdTestCase{
		*buildCliTestCase(
			t,
			"Random clients", "case_1",
			CliCmdFlags{
				yes:      true,
				services: &[]string{execution, consensus},
			},
			false,
			false,
		),
		*buildCliTestCase(
			t,
			"Fixed clients", "case_1",
			CliCmdFlags{
				yes:           true,
				executionName: "nethermind",
				consensusName: "lighthouse",
				validatorName: "lighthouse",
				services:      &[]string{execution, consensus},
			},
			false,
			false,
		),
		*buildCliTestCase(
			t,
			"Missing consensus client", "case_1",
			CliCmdFlags{
				yes:           true,
				executionName: "nethermind",
				validatorName: "lighthouse",
				services:      &[]string{execution, consensus},
			},
			false,
			false,
		),
		*buildCliTestCase(
			t,
			"Missing validator client", "case_1",
			CliCmdFlags{
				yes:           true,
				executionName: "nethermind",
				consensusName: "lighthouse",
				services:      &[]string{execution, consensus},
			},
			false,
			false,
		),
		*buildCliTestCase(
			t,
			"Good network input", "case_1",
			CliCmdFlags{
				yes:           true,
				executionName: "nethermind",
				consensusName: "lighthouse",
				network:       "mainnet",
				services:      &[]string{execution, consensus},
			},
			false,
			false,
		),
		*buildCliTestCase(
			t,
			"Bad network input", "case_1",
			CliCmdFlags{
				yes:           true,
				executionName: "nethermind",
				consensusName: "lighthouse",
				network:       "sedge",
				services:      &[]string{execution, consensus},
			},
			true,
			true,
		),
		*buildCliTestCase(
			t,
			"--run-client all", "case_1",
			CliCmdFlags{
				yes:      true,
				services: &[]string{"all"},
			},
			false,
			false,
		),
		*buildCliTestCase(
			t,
			"--run-client none", "case_1",
			CliCmdFlags{
				yes: true,
			},
			false,
			false,
		),
		*buildCliTestCase(
			t,
			"--run-client none, execution, ambiguos error", "case_1",
			CliCmdFlags{
				yes:      true,
				services: &[]string{execution, "none"},
			},
			true,
			true,
		),
		*buildCliTestCase(
			t,
			"--run-client validator", "case_1",
			CliCmdFlags{
				yes:      true,
				services: &[]string{validator},
			},
			false,
			false,
		),
		*buildCliTestCase(
			t,
			"--run-client all, validator, ambiguos error", "case_1",
			CliCmdFlags{
				yes:      true,
				services: &[]string{validator, "all"},
			},
			true,
			true,
		),
		*buildCliTestCase(
			t,
			"--run-client all, validator, ambiguos error", "case_1",
			CliCmdFlags{
				yes:      true,
				services: &[]string{validator, "all"},
			},
			true,
			true,
		),
		*buildCliTestCase(
			t,
			"Invalid network", "case_1",
			CliCmdFlags{
				yes:      true,
				network:  "test",
				services: &[]string{execution, consensus},
			},
			true,
			true,
		),
	}

	for _, tc := range tcs {
		t.Run(tc.name, func(t *testing.T) {
			descr := fmt.Sprintf("sedge cli %s", tc.args.toString())

			ctrl := gomock.NewController(t)
			prompt := mock_prompts.NewMockPrompt(ctrl)
			defer ctrl.Finish()

			rootCmd := RootCmd()
			rootCmd.AddCommand(CliCmd(prompt))
			argsL := append([]string{"cli"}, tc.args.argsList()...)
			rootCmd.SetArgs(argsL)

			prepareCliCmd(tc)

			if err := rootCmd.Execute(); !tc.isErr && err != nil {
				t.Errorf("%s failed: %v", descr, err)
			} else if tc.isErr && err == nil {
				t.Errorf("%s expected to fail", descr)
			}
		})
	}
}

// Stub for MonitoringTool interface
type monitorStub struct {
	data  []posmoni.EndpointSyncStatus
	calls int
}

func (ms *monitorStub) TrackSync(done <-chan struct{}, beaconEndpoints, executionEndpoints []string, wait time.Duration) <-chan posmoni.EndpointSyncStatus {
	ms.calls++
	c := make(chan posmoni.EndpointSyncStatus, len(ms.data))
	var w time.Duration

	go func() {
		for {
			select {
			case <-done:
				close(c)
				return
			case <-time.After(w):
				if w == 0 {
					// Don't wait the first time
					w = wait
				}
				for _, d := range ms.data {
					c <- d
				}
			}
		}
	}()

	return c
}

func TestTrackSync(t *testing.T) {
	t.Parallel()

	tcs := []struct {
		name    string
		data    []posmoni.EndpointSyncStatus
		flags   CliCmdFlags
		isError bool
	}{
		{
			"Test case 1, execution client got an error",
			[]posmoni.EndpointSyncStatus{
				{Endpoint: configs.OnPremiseExecutionURL, Synced: false, Error: errors.New("")},
			},
			CliCmdFlags{
				generationPath: configs.DefaultDockerComposeScriptsPath,
			},
			true,
		},
		{
			"Test case 2, execution client got an error, consensus client not synced",
			[]posmoni.EndpointSyncStatus{
				{Endpoint: configs.OnPremiseExecutionURL, Synced: false, Error: errors.New("")},
				{Endpoint: configs.OnPremiseConsensusURL, Synced: false},
			},
			CliCmdFlags{
				generationPath: configs.DefaultDockerComposeScriptsPath,
			},
			true,
		},
		{
			"Test case 3, execution client got an error, consensus client synced",
			[]posmoni.EndpointSyncStatus{
				{Endpoint: configs.OnPremiseExecutionURL, Synced: false, Error: errors.New("")},
				{Endpoint: configs.OnPremiseConsensusURL, Synced: true},
			},
			CliCmdFlags{
				generationPath: configs.DefaultDockerComposeScriptsPath,
			},
			true,
		},
		{
			"Test case 4, bad execution client response, good consensus client response",
			[]posmoni.EndpointSyncStatus{
				{Endpoint: configs.OnPremiseExecutionURL, Synced: true, Error: errors.New("")},
				{Endpoint: configs.OnPremiseConsensusURL, Synced: true},
			},
			CliCmdFlags{
				generationPath: configs.DefaultDockerComposeScriptsPath,
			},
			true,
		},
		{
			"Test case 5, consensus client got an error, consensus client not synced",
			[]posmoni.EndpointSyncStatus{
				{Endpoint: configs.OnPremiseConsensusURL, Synced: false, Error: errors.New("")},
				{Endpoint: configs.OnPremiseExecutionURL, Synced: false},
			},
			CliCmdFlags{
				generationPath: configs.DefaultDockerComposeScriptsPath,
			},
			true,
		},
		{
			"Test case 6, consensus client got an error, consensus client synced",
			[]posmoni.EndpointSyncStatus{
				{Endpoint: configs.OnPremiseConsensusURL, Synced: false, Error: errors.New("")},
				{Endpoint: configs.OnPremiseExecutionURL, Synced: true},
			},
			CliCmdFlags{
				generationPath: configs.DefaultDockerComposeScriptsPath,
			},
			true,
		},
		{
			"Test case 7, mixed results",
			[]posmoni.EndpointSyncStatus{
				{Endpoint: configs.OnPremiseConsensusURL, Synced: false},
				{Endpoint: configs.OnPremiseExecutionURL, Synced: true},
				{Endpoint: configs.OnPremiseConsensusURL, Synced: false},
				{Endpoint: configs.OnPremiseExecutionURL, Synced: true},
				{Endpoint: configs.OnPremiseConsensusURL, Synced: true},
			},
			CliCmdFlags{
				generationPath: configs.DefaultDockerComposeScriptsPath,
			},
			false,
		},
		{
			"Test case 8, mixed results",
			[]posmoni.EndpointSyncStatus{
				{Endpoint: configs.OnPremiseExecutionURL, Synced: false},
				{Endpoint: configs.OnPremiseConsensusURL, Synced: true},
				{Endpoint: configs.OnPremiseExecutionURL, Synced: false},
				{Endpoint: configs.OnPremiseConsensusURL, Synced: true},
				{Endpoint: configs.OnPremiseExecutionURL, Synced: false},
				{Endpoint: configs.OnPremiseExecutionURL, Synced: false},
				{Endpoint: configs.OnPremiseExecutionURL, Synced: false},
				{Endpoint: configs.OnPremiseExecutionURL, Synced: true},
			},
			CliCmdFlags{
				generationPath: configs.DefaultDockerComposeScriptsPath,
			},
			false,
		},
		{
			"Test case 9, mixed results, error",
			[]posmoni.EndpointSyncStatus{
				{Endpoint: configs.OnPremiseConsensusURL, Synced: false},
				{Endpoint: configs.OnPremiseExecutionURL, Synced: true},
				{Endpoint: configs.OnPremiseConsensusURL, Synced: false},
				{Endpoint: configs.OnPremiseExecutionURL, Synced: true},
				{Endpoint: configs.OnPremiseConsensusURL, Synced: false, Error: errors.New("")},
			},
			CliCmdFlags{
				generationPath: configs.DefaultDockerComposeScriptsPath,
			},
			true,
		},
	}
	// TODO: Starvation bc a synced status from one of the clients is not tested

	for _, tc := range tcs {
		t.Run(tc.name, func(t *testing.T) {
			ms := monitorStub{data: tc.data}

			err := trackSync(&ms, "", "", time.Millisecond*100, &tc.flags)
			utils.CheckErr("trackSync(...) failed", tc.isError, err)
		})
	}
}