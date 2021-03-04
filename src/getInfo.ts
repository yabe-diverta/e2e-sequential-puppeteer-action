import * as core from '@actions/core';
import glob from 'glob';
import path from 'path';
import tmp from 'tmp';

export default () => {
  const scriptsDir: string = core.getInput('scripts_dir');
  const captureDir: string = core.getInput('capture_dir');
  const specs = glob.sync(path.join(scriptsDir, '**', '*.test.js'));
  const tmpDir = tmp.dirSync().name;
  const reportPath = path.resolve(__dirname, 'report.html');
  return {captureDir, scriptsDir, specs, tmpDir, reportPath};
};
