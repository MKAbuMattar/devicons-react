import fs from 'fs-plus';
import path from 'path';
import { parse, stringify } from 'svgson';

import config from '../config/build.config.json';

(() => {
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
