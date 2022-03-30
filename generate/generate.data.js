const testFolder = './src/icons'
const fs = require('fs')
const path = require('path')

let name
let componentName
let fileName
let obj = {}
const data = []

fs.readdirSync(testFolder).forEach((file) => {
  name = file
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace('.js', '')
  componentName = file.replace('.js', '')
  fileName = `devicons-react/icons/${file.replace('.js', '')}`
  obj = { name: name, componentName: componentName, fileName: fileName }
  data.push(obj)
})

fs.writeFileSync(path.resolve(__dirname, 'tmp.data.json'), JSON.stringify(data))
