const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow;


function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    autoHideMenuBar: true,
    webPreferences: {
      webSecurity:true,
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  
  ipc.on('close', () => {
    app.quit();
  })
  mainWindow.loadFile('src/html/base.html');

}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


