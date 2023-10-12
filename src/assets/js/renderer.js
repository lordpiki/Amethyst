const { app } = require("electron");

console.log("here");
const quitAppButton = document.getElementById('close_button');
console.log(quitAppButton);

quitAppButton.addEventListener('click', () => {
  const { app } = remote;
  app.quit();
});