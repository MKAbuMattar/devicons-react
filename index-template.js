// index-template.js
const fs = require('fs')
const path = require('path')

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    return `export { default as ${exportName} } from './icons/${basename}'`
  })
  fs.writeFileSync(path.resolve(__dirname, 'src/index.js'), exportEntries.join('\n'))
  return exportEntries.join('\n')
}

module.exports = defaultIndexTemplate
