//callback func

// const fs = require("fs");
// function cleanFile(filePath, cb) {
//   fs.readFile(filePath, "utf-8", function (err, data) {
//     data = data.trim();
//     fs.writeFile(filePath, data, function () {
//       cb();
//     });
//   });
// }

// function onDone() {
//   console.log("file has been cleaned");
// }
// cleanFile("a.txt", onDone);


//promisfied func

const fs = require("fs");

function cleanFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        return reject(err); // Handle read error
      }

      const cleanedData = data.trim();

      fs.writeFile(filePath, cleanedData, (writeErr) => {
        if (writeErr) {
          return reject(writeErr); // Handle write error
        }
        resolve();
      });
    });
  });
}

async function main() {
  try {
    await cleanFile("a.txt");
    console.log("Done cleaning file");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
