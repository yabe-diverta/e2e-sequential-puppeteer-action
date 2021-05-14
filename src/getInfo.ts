import * as core from '@actions/core';
import * as glob from '@actions/glob';
import path from 'path';

class Info {
  private static info: {
    serveCmd: string;
    waitOn: string;
    scriptsDir: string;
    specs: string[];
  };
  static async getInfo() {
    if (!Info.info) {
      const scriptsDir = core.getInput('scripts_dir');
      const g = await glob.create(path.join(scriptsDir, '*', 'index.js'));
      const specs = await g.glob();

      Info.info = {
        serveCmd: core.getInput('serve_cmd'),
        waitOn: core.getInput('wait_on'),
        scriptsDir,
        specs
      };
    }
    return Info.info;
  }
}
export default async () => await Info.getInfo();
