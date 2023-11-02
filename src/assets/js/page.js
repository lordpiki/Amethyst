const fs = require('fs');

const contentDiv = document.querySelector('.content');
let fileData = ""; // Initialize with the initial file content

// Function to read the file content
function readFileContent() {
  fs.readFile('Vault/text.md', 'utf8', (err, data) => {
    if (err) {
      alert(err);
      return;
    }
    fileData = data;
    contentDiv.innerHTML = fileData;
    // Replace newline characters with HTML line breaks for rendering
  });
}

// Function to save the file content
function saveFileContent() {
  console.log(contentDiv.textContent);
  const contentToSave = contentDiv.textContent;
  // Replace HTML line breaks with newline characters for saving
  fs.writeFile('Vault/text.md', contentToSave, 'utf8', (err) => {
    if (err) {
      alert(err);
      return;
    }
    console.log('File saved successfully.');
  });
}

// Attach an input event listener to the content div
contentDiv.addEventListener('input', () => {
  // When the content changes, update the fileData
  fileData = contentDiv.textContent;
  // Save the changes immediately
  saveFileContent();
});

// Initial file load
readFileContent();
