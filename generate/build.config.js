const getFiles = require('node-recursive-directory')
const fs = require('fs')
const path = require('path')

;(async () => {
  const files = await getFiles('./devicon/icons/', true)
  fs.writeFileSync(path.resolve(__dirname, 'build.config.json'), JSON.stringify(files))
})()
