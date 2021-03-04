import * as core from '@actions/core';
import getInfo from './getInfo';
import runRegCli from './runRegCli';
import runSpec from './runScript';

async function run(): Promise<void> {
  try {
    const {captureDir, tmpDir, specs, reportPath} = getInfo();

    for (const spec of specs) {
      await runSpec({tmpDir, spec});
    }
    await runRegCli({captureDir, tmpDir, reportPath});

    core.setOutput('report', reportPath);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
