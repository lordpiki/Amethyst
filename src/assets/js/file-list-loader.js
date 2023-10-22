const fs = require('fs');
const path = require('path');


function scanFolder(folderPath) {
  try {
    const fileData = [];
    const files = fs.readdirSync(folderPath);

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      const stats = fs.statSync(filePath);

      fileData.push({
        name: file,
        isDirectory: stats.isDirectory(),
        size: stats.size,
        path: filePath,
        // Add more properties as needed
      });
    });
    return fileData;
  } catch (error) {
    console.error(`Error scanning folder: ${error.message}`);
    return [];
  }
}

function renderFileList(fileData) {
  const fileListElement = document.getElementById('file-list');

  if (fileListElement) {
    fileData.forEach((file) => {
      const listItem = document.createElement('li');
      listItem.textContent = file.name;

      if (file.isDirectory) {
        listItem.classList.add('directory'); // Apply a specific style for directories
      }

      fileListElement.appendChild(listItem);
    });
  }
}

const folderPath = 'Vault'; // Replace with the actual folder path
const fileData = scanFolder(folderPath);

renderFileList(fileData);

export { fileData };
