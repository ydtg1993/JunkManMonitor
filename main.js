// Modules to control application life and create native browser window
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const IpcMain = electron.ipcMain;
const SHELL = require('electron').shell;
const FS = require('fs');
const PATH=require('path');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 750,
        show: false,
        resizable: false,
        //frame: false
    });

    // and load the index.html of the app.
    mainWindow.loadFile('index.html');
    eventListen();

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

let eventListen = function () {
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
        } else if (arg == 'disconnect') {
            socketWorker.close();
        }
    });

    IpcMain.on('help-event', (event, arg) => {
        SHELL.openExternal("https://github.com/ydtg1993/JunkManMonitor");
    });

    IpcMain.on('error-waring',(event, arg) => {
        electron.dialog.showMessageBox({
            title: 'warning',
            type: 'error',
            message: arg
        })
    });

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });
};

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
let socketWorker = {
    palpitation: null,
    connect: function () {
        let net = require('net');
        let config = getConfigFile();
        let HOST = config.host;
        let PORT = config.port;

        global.JunkManClient = new net.Socket();
        JunkManClient.setKeepAlive(true);
        JunkManClient.setEncoding("utf8");

        JunkManClient.connect(PORT, HOST);

        JunkManClient.on('connect', function () {
            JunkManClient.write(`{"agent":"client","status":"start"}`);
            socketWorker.palpitation = setInterval(() => {
                JunkManClient.write(`{"agent":"client","status":"palpitation"}`);
            }, 5000);
        });

        JunkManClient.on('error', (error) => {
            clearInterval(socketWorker.palpitation);
            mainWindow.webContents.send('stream', 'disconnect');
            global.JunkManClient = null;
            electron.dialog.showMessageBox({
                title: 'connection error',
                type: 'error',
                message: "Unable to connect'to the remote server. check your settings!"
            })
        });

        JunkManClient.on('data', function (data) {
            if(data == 'SUCCESS') {
                mainWindow.webContents.send('stream', 'connected');
                return
            }
            packageWorker.run(data);
        });
    },
    close: function () {
        clearInterval(socketWorker.palpitation);
        if (global.JunkManClient != null) {
            JunkManClient.end(`{"agent":"client","status":"end"}`);
            global.JunkManClient = null;
        }
    }
};

let packageWorker = {
    data: "",
    flag: 0,
    run: function (data) {
        let buffer = Buffer.from(data);
        let message;

        let startSign = buffer.lastIndexOf(2);
        let endSign = buffer.lastIndexOf(3);

        if (endSign >= 0 && startSign >= 0) {
            JunkManClient.pause();
            message = buffer.slice(startSign + 1, endSign - startSign).toString();
            if (isJSON(message)) {
                mainWindow.webContents.send('stream', message)
            }
            JunkManClient.resume();
            return
        } else if (endSign >= 0 && startSign < 0) {
            //end
            message = buffer.slice(0, endSign).toString();
            packageWorker.data += message;
            JunkManClient.pause();
            if (isJSON(packageWorker.data)) {
                mainWindow.webContents.send('stream', packageWorker.data);
                packageWorker.reset();
                JunkManClient.resume();
                return
            } else if (packageWorker.flag > 5) {
                packageWorker.reset()
            }
            JunkManClient.resume();
            return
        } else if (startSign >= 0 && endSign < 0) {
            //start
            message = buffer.slice(startSign + 1).toString();
            packageWorker.data += message;
            packageWorker.flag++;
            return
        } else {
            //ing
            packageWorker.data += data;
            packageWorker.flag++;
        }
    },
    reset: function () {
        packageWorker.data = "";
        packageWorker.flag = 0;
    }
};

function isJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}

function getConfigFile() {
    let file = PATH.join(__dirname,'/resource/config.json');
    try {
        let data = FS.readFileSync(file, 'utf8');
        let config = JSON.parse(data);
        return config;
    }catch (e) {
        console.log(e);
        return false;
    }
}
