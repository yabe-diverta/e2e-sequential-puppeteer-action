import * as exec from '@actions/exec';
import getInfo from './getInfo';

export default async () => {
  const {specs, updateCaptures, basicAuth} = await getInfo();
  let options: string[] = ['--headless'];
  if (updateCaptures) {
    options = [...options, '--newcapture'];
  }
  if (
    basicAuth &&
    basicAuth.includes(':') &&
    basicAuth.split(':').every(v => v !== '')
  ) {
    options = [...options, `--basicAuth=${basicAuth}`];
  }

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
