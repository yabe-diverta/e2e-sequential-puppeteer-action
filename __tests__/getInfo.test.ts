import * as path from 'path';
import * as process from 'process';
import getInfo from '../src/getInfo';

test('getInfo()', async () => {
  // arrange
  process.env['INPUT_SCRIPTS_DIR'] = path.resolve(__dirname, 'etc');

  // act
  const res = getInfo();

  // assert
  const hasAllFilesInclueds = [
    'test1.test.js',
    'test2.test.js',
    'test3.test.js'
  ].every(filename => res.specs.some(p => p.includes(filename)));
  expect(hasAllFilesInclueds).toBeTruthy();
});
