const testFolder = './src/icons'
const fs = require('fs')
const path = require('path')

let name
let componentName
let fileName
let data
const obj = []

const names = []
const trt = []

fs.readdirSync(testFolder).forEach((file) => {
  name = file
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace('.js', '')
  componentName = file.replace('.js', '')
  fileName = `devicons-react/icons/${file.replace('.js', '')}`
  data = { name: name, componentName: componentName, fileName: fileName }
  obj.push(data)
  componentNames = ` {componentName.toLowerCase() === '${componentName}'.toLowerCase() && (
    <${componentName}/>
  )}`
  names.push(componentName)
  trt.push(componentNames)
})

fs.writeFileSync(path.resolve(__dirname, 'tmp.json'), JSON.stringify(obj))
fs.writeFileSync(path.resolve(__dirname, 'temp.json'), JSON.stringify(names))
fs.writeFileSync(path.resolve(__dirname, 'trt.json'), JSON.stringify(trt))
