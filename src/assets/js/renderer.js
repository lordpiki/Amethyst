const ipc = require('electron').ipcRenderer

// close app
function closeApp(e) {
    console.log("here")
  e.preventDefault()
  ipc.send('close')
}

document.getElementById("close_button").addEventListener("click", closeApp);