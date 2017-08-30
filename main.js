const {BrowserWindow, app} = require('electron');
const path = require('path');

let win;
let boot = () => {
  win = new BrowserWindow({
    width: 700,
    height: 500,
    frame: false
  });

  // Carrega a aplicação no template
  win.loadURL('file://' + __dirname + '/index.html');

  // Abre automaticamente o developer tools quando a janela for criada
  // win.webContents.openDevTools();
};

app.on('ready', boot);
