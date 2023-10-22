// main.js

import { fileData } from './file-list-loader.js';

console.log(fileData);

const fileList = document.getElementById('file-list');

fileList.addEventListener('click', (event) => {
  const listItem = event.target;
  const fileName = listItem.textContent;

  const file = fileData.find((item) => item.name === fileName);
    console.log(file);
  if (file) {
    if (isFile(file)) {
      openFile(file.path);
    } else {
      navigateToFolder(file.path);
    }
  }
});

function isFile(file) {
  // Implement logic to check if the file is a file (e.g., using path extension)
  return file.path.endsWith('.md');
}

function openFile(filePath) {
    console.log("Opening", filePath);
    // Implement logic to open/load the selected file
}

function navigateToFolder(folderPath) {
    console.log("Opening", folderPath);
  // Implement logic to navigate to the selected folder
}
