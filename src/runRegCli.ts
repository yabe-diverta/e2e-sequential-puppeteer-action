import childProcess from 'child_process';
import * as core from '@actions/core';
import getInfo from './getInfo';

export default async () => {
  const {captureDir, tmpDir, reportPath} = await getInfo();
  return new Promise(async (resolve, reject) => {
    const cmd = `npx reg-cli ${captureDir} ${tmpDir} -R ${reportPath}`;
    core.debug(`executes reg-cli with command: "${cmd}"`);

    const process = childProcess.exec(cmd);
    process.on('data', data => resolve(data));
    process.on('error', err => reject(err));
    process.on('close', err => (err !== 0 ? reject(err) : resolve(err)));
  });
};
