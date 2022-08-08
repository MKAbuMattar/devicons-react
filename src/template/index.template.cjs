const fs = require('fs');
const path = require('path');

const defaultIndexTemplate = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    // const build = `import ${exportName} from './icons/${basename}';${'\r\n'}export * from './icons/${basename}';${'\r\n'}export { ${exportName} };`;
    // return build;
    return `export { default as ${exportName} } from './icons/${basename}'`;
  });
  fs.writeFileSync(
    path.resolve(__dirname, '../../build/index.ts'),
    exportEntries.join('\n'),
  );
  return exportEntries.join('\n');
};

module.exports = defaultIndexTemplate;
