import fs from 'fs';
import path from 'path';

import DeviconData from '../../devicon/devicon.json';

(() => {
  const dir = './build/icons';
  let name: string;
  let componentName: string;
  let tags: string[];
  let obj = {};
  const data: any = [];

  fs.readdirSync(dir).forEach((file) => {
    if (file.includes('.d.ts')) return;

    name = file
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace('.jsx', '');

    componentName = file.replace('.jsx', '');

    DeviconData.forEach((devicon) => {
      if (
        name.replace(/ .*/, '').toLowerCase() === devicon.name.toLowerCase()
      ) {
        return (tags = devicon.tags);
      }

      if (name.replace(/ .*/, '').toLowerCase() === 'Dot'.toLowerCase()) {
        if (devicon.name.toLowerCase() === 'dot-net'.toLowerCase()) {
          return (tags = devicon.tags);
        }
      }
    });

    obj = {
      name: name,
      componentName: componentName,
      tags: tags,
    };

    data.push(obj);
  });

  fs.writeFileSync(
    path.resolve(__dirname, 'devicon.data.json'),
    JSON.stringify(data, null, 2),
  );
})();
