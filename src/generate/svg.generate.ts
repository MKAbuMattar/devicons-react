import path from 'node:path';
import fs from 'fs-plus';
import {type RecursiveDirectory, recursiveDirectory} from 'recursive-directory';
import {parse, stringify} from 'svgson';

(async () => {
  const config: RecursiveDirectory = (await recursiveDirectory(
    './devicon/icons/',
    true,
  )) as RecursiveDirectory;

  const svgsComponentPath = path.join(process.cwd(), 'svg');

  fs.removeSync(svgsComponentPath);

  fs.mkdirSync(svgsComponentPath);

  config.forEach((icon) => {
    if (icon.filename.toLowerCase().includes('.svg'.toLowerCase())) {
      const baseName = `${icon.filename}`.replace(/\.svg\b/g, '');
      const svgFile = fs.readFileSync(
        path.resolve(`./devicon/icons/${icon.dirname}`, `${icon.filename}`),
        'utf-8',
      );

      parse(`${svgFile}`).then((json) => {
        const mysvg = stringify(json);

        fs.writeFileSync(
          path.resolve(
            __dirname,
            `${path.join(svgsComponentPath, `${baseName}.svg`)}`,
          ),
          mysvg,
        );
      });
    }
  });
})();
