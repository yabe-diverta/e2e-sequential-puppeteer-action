import * as exec from '@actions/exec';
import getInfo from './getInfo';

export default async () => {
  const {specs, updateCaptures} = await getInfo();
  const options = updateCaptures
    ? ['--headless']
    : ['--newcapture', '--headless'];

  for (const spec of specs) {
    await runScript(spec, options);
  }
};

export const runScript = async (spec: string, options: string[]) => {
  await exec.exec('node', [spec, ...options], {
    listeners: {
      stdout: (data: Buffer) => console.log(data.toString()),
      stderr: (data: Buffer) => console.log(data.toString())
    },
    cwd: process.cwd()
  });
};
