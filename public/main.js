const { app, BrowserWindow } = require('electron')

const isDev = require('electron-is-dev')

require('@electron/remote/main').initialize()

const path = require('path')
function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    minWidth: 1200,
    minHeight: 600,
    webPreferences: {
      enableRemoteModule: true,
    },
  })
  win.loadURL('http://localhost:3000')
  // win.loadURL(
  //   isDev
  //     ? 'http://localhost:3000'
  //     : `file://${path.join(__dirname, '../build/index.html')}`
  // )
}

app.on('ready', createWindow)
