import * as exec from '@actions/exec';
import getInfo from './getInfo';

export default async () => {
  const {specs} = await getInfo();
  for (const spec of specs) {
    await runScript(spec);
  }
};

export const runScript = async (spec: string) => {
  await exec.exec('node', [spec, '--newcapture', '--headless'], {
    listeners: {
      stdout: (data: Buffer) => console.log(data.toString()),
      stderr: (data: Buffer) => console.log(data.toString())
    },
    cwd: process.cwd()
  });
};
