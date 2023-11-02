import { addNewPage } from "./tabs.js";

import { fileData } from './file-list-loader.js';

console.log(fileData);

const fileList = document.getElementById('file-list');

fileList.addEventListener('click', (event) => {
  const listItem = event.target;
  const fileName = listItem.textContent;

  const file = fileData.find((item) => item.name === fileName);
  console.log(file);
  if (file) {
    if (!file.isDirectory) {
      openFile(file);
    } else {
      navigateToFolder(file.path);
    }
  }
});

function openFile(file) {
    console.log("Opening", file.name);
    addNewPage(file)
    // Implement logic to open/load the selected file
}

function navigateToFolder(folderPath) {
    console.log("Opening", folderPath);
  // Implement logic to navigate to the selected folder
}
