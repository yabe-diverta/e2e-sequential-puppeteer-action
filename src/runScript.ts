import childProcess from 'child_process';
import util from 'util';

export default async ({tmpDir, spec}: {tmpDir: string; spec: string}) => {
  const exec = util.promisify(childProcess.exec);

  const {stdout, stderr} = await exec(`node ${spec} ${tmpDir} --headless`);
  if (stdout) {
    console.log(stdout);
  }
  if (stderr) {
    console.log(stderr);
  }
};
