const { exec } = require('child_process')

const develop = 'git clone -b develop https://github.com/devicons/devicon.git'
const master = 'git clone https://github.com/devicons/devicon.git'

exec(develop, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`)
    return
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`)
    return
  }
  console.log(`stdout: ${stdout}`)
})
