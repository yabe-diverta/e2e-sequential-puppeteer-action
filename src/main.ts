import * as core from '@actions/core';
import getInfo from './getInfo';
import runSpec from './runScript';
import Server from './Server';

async function run(): Promise<void> {
  const {specs, newCaptureDir} = await getInfo();

  try {
    const server = new Server();
    await server.serve();
    for (const spec of specs) {
      await runSpec(spec);
    }
    server.stop();
  } catch (error) {
    core.setFailed(error.message);
  }

  core.setOutput('capture_dir', newCaptureDir);
  process.exit(0);
}

run();
