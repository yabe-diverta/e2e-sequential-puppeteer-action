import * as core from '@actions/core';
import * as glob from '@actions/glob';
import path from 'path';
import tmp from 'tmp';

class Info {
  private static info: {
    serveCmd: string;
    waitOn: string;
    scriptsDir: string;
    captureDir: string;
    specs: string[];
    tmpDir: string;
    reportPath: string;
  };
  static async getInfo() {
    if (!Info.info) {
      const scriptsDir = core.getInput('scripts_dir');
      const g = await glob.create(path.join(scriptsDir, '**', '*.test.js'));
      const specs = await g.glob();

      Info.info = {
        serveCmd: core.getInput('serve_cmd'),
        waitOn: core.getInput('wait_on'),
        captureDir: core.getInput('capture_dir'),
        tmpDir: tmp.dirSync().name,
        reportPath: path.resolve(__dirname, 'report.html'),
        scriptsDir,
        specs
      };
    }
    return Info.info;
  }
}
export default async () => await Info.getInfo();
