import * as core from '@actions/core';
import runScripts from './runScripts';
import Server from './Server';

async function run(): Promise<void> {
  try {
    const server = new Server();
    await server.serve();
    await runScripts();
    await server.stop();
  } catch (error) {
    core.setFailed(error.message);
  }
  process.exit(0);
}

run();
