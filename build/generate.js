const path = require('path')
const fs = require('fs-plus')
const { parse, stringify } = require('svgson')

const svgsComponentPath = path.join(process.cwd(), 'svg')
const config = require('./build.config.json')

fs.removeSync(svgsComponentPath)

fs.mkdirSync(svgsComponentPath)

config.forEach((icon) => {
  if (icon.filename.toLowerCase().includes('.svg'.toLowerCase())) {
    const baseName = `${icon.filename}`.replace(/\.svg\b/g, '')
    const svgFile = fs.readFileSync(
      path.resolve(`./node_modules/devicon/icons/${icon.dirname}`, `${icon.filename}`),
      'utf-8',
    )

    parse(`${svgFile}`).then((json) => {
      const mysvg = stringify(json)

      fs.writeFileSync(
        path.resolve(__dirname, `${path.join(svgsComponentPath, `${baseName}.svg`)}`),
        mysvg,
      )
    })
  }
})
