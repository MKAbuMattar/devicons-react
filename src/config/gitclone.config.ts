import { exec } from 'child_process';

const gitClone = (url: string): void => {
  exec(url, (error, stdout, stderr) => {
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
};

(() => {
  const master = 'git clone https://github.com/devicons/devicon.git';
  const develop =
    'git clone -b develop https://github.com/devicons/devicon.git';

  process.argv[2] === '--master' ? gitClone(master) : gitClone(develop);
})();
