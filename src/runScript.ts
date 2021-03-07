import * as exec from '@actions/exec';
import getInfo from './getInfo';

export default async (spec: string) => {
  const {newCaptureDir} = await getInfo();

  await exec.exec('node', [spec, newCaptureDir, '--headless'], {
    listeners: {
      stdout: (data: Buffer) => console.log(data.toString()),
      stderr: (data: Buffer) => console.log(data.toString())
    },
    cwd: process.cwd()
  });
};
