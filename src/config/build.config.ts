import fs from 'fs';
import path from 'path';
import { RecursiveDirectory, recursiveDirectory } from 'recursive-directory';

(async () => {
  const files: RecursiveDirectory = (await recursiveDirectory(
    './devicon/icons/',
    true,
  )) as RecursiveDirectory;

  fs.writeFileSync(
    path.resolve(__dirname, 'build.config.json'),
    JSON.stringify(files),
  );
})();
