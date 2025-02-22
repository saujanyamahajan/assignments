// Try to crete a promised version of
// Settimeout
// Fetch
// Fs.readfile


function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  // Example Usage:
  delay(2000).then(() => console.log("Waited for 2 seconds!"));
  

  ////////////////////////////////////////////////

  function fetchJSON(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
        return response.json();
      });
  }
  
  // Example Usage:
  fetchJSON("https://jsonplaceholder.typicode.com/todos/1")
    .then((data) => console.log(data))
    .catch((err) => console.error("Fetch error:", err.message));

    

    const fs = require("fs");

///////////////////////////////////////////////////////////////

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// Example Usage:
readFileAsync("example.txt")
  .then((data) => console.log("File content:", data))
  .catch((err) => console.error("Read error:", err.message));
