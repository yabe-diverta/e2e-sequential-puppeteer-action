import * as core from '@actions/core';
import getInfo from './getInfo';
import runRegCli from './runRegCli';
import runSpec from './runScript';
import Server from './Server';

async function run(): Promise<void> {
  try {
    const {specs, reportPath} = await getInfo();

    const server = new Server();
    await server.serve();

    for (const spec of specs) {
      await runSpec(spec);
    }
    await runRegCli();

    server.stop();

    core.setOutput('report', reportPath);
    process.exit(0);
  } catch (error) {
    core.setFailed(error.message);
    process.exit(1);
  }
}

run();
