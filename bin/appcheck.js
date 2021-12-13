const fs = require('fs');
const folders = ['app','client-react-native'];
const renameTo = 'app';

// checks if app exists before running app 
// installation during package.json setup
async function run(){
  try {

    let success = false;

    for (let folder of folders){
      if (!success){

        if (fs.existsSync(`../${folder}`)){
          fs.rename(`../${folder}`, `../${renameTo}`, () => {

            success = true;
            fs.rename(`../${folder}`, `../${renameTo}`, () => {});
  
          });
        }
      }
    }

    return process.exit(success ? 0 : 128);

  } 
  catch (err) {

    console.error(err);
    return process.exit(128)

  }
}

run();