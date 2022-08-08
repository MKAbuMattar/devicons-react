import { exec } from 'child_process';

(() => {
  const master = 'git clone https://github.com/devicons/devicon.git';
  const develop =
    'git clone -b develop https://github.com/devicons/devicon.git';

  exec(develop, (error, stdout, stderr) => {
    if (error) {
      console.error(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.debug(`stderr: ${stderr}`);
      return;
    }
    console.debug(`stdout: ${stdout}`);
  });
})();
