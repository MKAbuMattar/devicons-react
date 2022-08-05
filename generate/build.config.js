const recursiveDirectory = require('recursive-directory')
const fs = require('fs')
const path = require('path')

;(async () => {
  const files = await recursiveDirectory.recursiveDirectory('./devicon/icons/', true)
  fs.writeFileSync(path.resolve(__dirname, 'build.config.json'), JSON.stringify(files))
})()
