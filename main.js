// Modules to control application life and create native browser window
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const IpcMain = electron.ipcMain;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        show: false,
        //frame: false
    });

    // and load the index.html of the app.
    mainWindow.loadFile('index.html');

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
        socketWorker.close();
    });

    IpcMain.on('window-event', (event, arg) => {
        if (arg == 'maximize') {
            mainWindow.maximize();
        } else if (arg == 'unmaximize') {
            mainWindow.unmaximize();
        } else if (arg == 'minimize') {
            mainWindow.minimize();
        } else if (arg == 'close') {
            mainWindow.close();
        }
    });

    IpcMain.on('socket-event', (event, arg) => {
        if (arg == 'connect') {
            socketWorker.connect();
            event.sender.send('asynchronous-reply', 'pong')
        } else if (arg == 'disconnect') {
            socketWorker.close();
        }
    });

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
let socketWorker = {
    connect: function () {
        let net = require('net');
        let HOST = '47.75.133.214';
        let PORT = 26841;

        global.JunkManClient = new net.Socket(({
            readable: true,
            writable: true,
        }));
        JunkManClient.setKeepAlive(true);

        JunkManClient.connect(PORT, HOST, function () {
            JunkManClient.write(`{"agent":"client","status":"start"}`);
            let palpitation = setInterval(() => {
                JunkManClient.write(`{"agent":"client","status":"palpitation"}`);
            }, 3000);

            JunkManClient.on('error', (error) => {
                clearInterval(palpitation);
                global.JunkManClient = null;
                electron.dialog.showMessageBox({
                    title: 'connection error',
                    type: 'error',
                    message: "can't connect the server. please check your config!"
                })
            })
        });
    },
    close: function () {
        if (global.JunkManClient != null) {
            JunkManClient.end(`{"agent":"client","status":"end"}`);
            global.JunkManClient = null;
        }
    }
};