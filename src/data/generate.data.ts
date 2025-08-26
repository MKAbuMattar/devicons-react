import fs from 'node:fs';
import path from 'node:path';
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

    tags = [];

    if (name.replace(/ .*/, '').toLowerCase() === 'Devicons'.toLowerCase()) {
      tags = ['iconset'];
    } else {
      DeviconData.forEach((devicon) => {
        if (
          name.replace(/ .*/, '').toLowerCase() === 'Dot'.toLowerCase() &&
          devicon.name.toLowerCase() === 'dot-net'.toLowerCase()
        ) {
          tags = devicon.tags;
        }

        if (
          name.replace(/ .*/, '').toLowerCase() === devicon.name.toLowerCase()
        ) {
          tags = devicon.tags;
        }
      });
    }

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
