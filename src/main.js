const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow;


function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    autoHideMenuBar: true,
    webPreferences: {
      webSecurity: true, // Enable web security
      nodeIntegration: true,
      enableRemoteModule: true, // Enable the remote module
      contextIsolation: false,
      webviewTag: true,
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  mainWindow.loadFile('src/html/page.html');

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


