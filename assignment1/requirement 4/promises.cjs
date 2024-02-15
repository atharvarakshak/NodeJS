

const fs = require('fs');



// Attach 'exit' event to the 'process' object
process.on('exit', (code) => {
    console.log(`'exit' event called with code: ${code}`);
});

// Attach 'unhandledRejection' event to the 'process' object
process.on('unhandledRejection', (reason, promise) => {
    console.error(`'unhandledRejection' event called with reason: ${reason}`);
    throw new Error('Error in unhandledRejection event handler');
});

// Promise version of fs.readFileSync
function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}

// Using the Promise function with incorrect file name
readFileAsync('data.t')
  .then((data) => {
    console.log('File content:', data);
      })
  .catch((error) => {
    console.error('Error reading file:', error.message);
        throw new Error('Error in catch handler');
  });


// Exiting the process with code 1

process.exit(400);
