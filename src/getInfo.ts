import * as core from '@actions/core';
import * as glob from '@actions/glob';
import path from 'path';
import mkdirp from 'mkdirp';

class Info {
  private static info: {
    serveCmd: string;
    waitOn: string;
    scriptsDir: string;
    specs: string[];
    newCaptureDir: string;
    reportPath: string;
  };
  static async getInfo() {
    if (!Info.info) {
      const scriptsDir = core.getInput('scripts_dir');
      const g = await glob.create(path.join(scriptsDir, '**', '*.test.js'));
      const specs = await g.glob();
      const tmpDir = path.resolve(__dirname, `newcapture_${Date.now()}`);
      await mkdirp(tmpDir);

      Info.info = {
        serveCmd: core.getInput('serve_cmd'),
        waitOn: core.getInput('wait_on'),
        newCaptureDir: tmpDir,
        reportPath: path.resolve(__dirname, 'report.html'),
        scriptsDir,
        specs
      };
    }
    return Info.info;
  }
}
export default async () => await Info.getInfo();
