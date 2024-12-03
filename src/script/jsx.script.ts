import fs from 'node:fs';
import fsAsync from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {type RecursiveDirectory, recursiveDirectory} from 'recursive-directory';
import svgtojsx from 'svg-to-jsx';

import deviconData from '../../devicon/devicon.json';

type ObjConfig = {
  fullpath: string;
  filepath: string;
  filename: string;
  name: string;
  dirname: string;
}[];

function addUnderscoreIfNumber(name: string): string {
  if (!isNaN(Number.parseInt(name.charAt(0)))) {
    name = '_' + name;
  }
  return name;
}

(async () => {
  if (fs.existsSync(`${__dirname}/../../build`)) {
    fs.rmSync(`${__dirname}/../../build`, {recursive: true});
  }

  const index: [string, string][] = [];
  const objConfig: ObjConfig = [];

  const config: RecursiveDirectory = (await recursiveDirectory(
    './icons/',
    true,
  )) as RecursiveDirectory;

  config.forEach((item) => {
    objConfig.push({
      fullpath: item.fullpath,
      filepath: item.filepath,
      filename: item.filename,
      name: item.filename
        .split('-')
        .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
        .join('')
        .replace(/.svg/g, ''),
      dirname: item.dirname,
    });
  });

  await fsAsync.mkdir(`${__dirname}/../../build`);
  await fsAsync.mkdir(`${__dirname}/../../build/icons`);

  await Promise.all(
    objConfig.map(async (entry) => {
      const name = addUnderscoreIfNumber(entry.name);

      const icon = await fsAsync.readFile(
        `${__dirname}/../../icons/${entry.filename}`,
      );

      const {document} = await new JSDOM(icon).window;

      const dir = `${__dirname}/../../build/icons`;

      const reactName = `${name}`;

      index.push([reactName, `./icons/${reactName}`]);

      const svg = document.getElementsByTagName('svg')[0];
      svg.removeAttribute('width');
      svg.removeAttribute('height');
      svg.removeAttribute('xmlns:xlink');

      const isPlain =
        reactName.toLowerCase().includes('plain') ||
        reactName.toLowerCase().includes('line');

      let originalColor = '';

      if (isPlain) {
        deviconData.map((el) => {
          if (entry.filename.toLowerCase().includes(el.name.toLowerCase())) {
            originalColor = el.color;
          }
        });
      }

      if (isPlain) {
        svg.removeAttribute('fill');
        const elements = svg.getElementsByTagName('*');
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i] as SVGElement;
          element.removeAttribute('fill');
          element.style.removeProperty('fill');
          element.style.removeProperty('fill-rule');
          element.style.removeProperty('fill-opacity');
        }
      }

      const svgTemplate = `const React = require("react");
module.exports = function ${reactName}({size = "1rem", ${
        isPlain ? `color = "${originalColor}",` : ''
      } ...props}){
  props = {
    ...props,
    style: {
      ...(props.style ? props.style : {}),
      width: size,
      height: size,${
        isPlain
          ? `
      ...(color ? { fill: color } : {} )`
          : ''
      }
    }
  }
  return (${(await svgtojsx(svg.outerHTML)).replace(
    '<svg',
    '<svg {...props}',
  )});
}`;

      await fsAsync.writeFile(`${dir}/${reactName}.jsx`, svgTemplate);

      const definitions = `import React from "react";
interface Props extends React.SVGProps<SVGElement> {
  size?: number | string;${
    isPlain
      ? `
  color?: string;`
      : ''
  }
}
declare const ${reactName}: React.FunctionComponent<Props>;
export default ${reactName};`;

      await fsAsync.writeFile(`${dir}/${reactName}.d.ts`, definitions);

      await fsAsync.writeFile(
        `${__dirname}/../../build/index.js`,
        index.map((e) => `const ${e[0]} = require("${e[1]}")`).join(';\n') +
          ';\n' +
          `module.exports = {${index.map((e) => e[0]).join(',')}}`,
      );
      await fsAsync.writeFile(
        `${__dirname}/../../build/index.d.ts`,
        index
          .map((e) => `export { default as ${e[0]} } from "${e[1]}"`)
          .join(';\n'),
      );
    }),
  );
})();
