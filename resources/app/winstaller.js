const electronInstaller = require('electron-winstaller')
const path = require('path')

console.log('Running on creating installation')

const resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: path.join(__dirname, 'imamelectron-win32-x64'),
    authors: 'Imam Assidiqqi',
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
