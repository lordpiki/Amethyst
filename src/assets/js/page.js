const fs = require('fs');

const toMarkdown = require('to-markdown');
const markdownIt = require('markdown-it')();




// or if you're using ES6

var text = "# Markdown Features Test Line";
console.log(markdownIt.render(text));

for (var i = 0; i < 4; i++)
{
  const html = markdownIt.render(text);
  console.log("html: " + html);
  text = toMarkdown(html);
  console.log("text: " + text);
}
// ***strong and italic***




const contentDiv = document.querySelector('.content');
let fileData = ""; // Initialize with the initial file content

// Function to read the file content
function readFileContent() {
  fs.readFile('Vault/text.md', 'utf8', (err, data) => {
    if (err) {
      alert(err);
      return;
    }
    contentDiv.innerHTML = markdownIt.render(data);
    // Replace newline characters with HTML line breaks for rendering
  });
}

// Function to save the file content
function saveFileContent() {
  
  const markdown = toMarkdown((contentDiv.innerHTML));
  console.log(markdown);
  const contentToSave = markdown;
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
