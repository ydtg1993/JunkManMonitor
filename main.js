// Modules to control application life and create native browser window
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const IpcMain = electron.ipcMain;
const SHELL = require('electron').shell;
const FS = require('fs');
const PATH = require('path');
const Datastore = require('nedb');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 700,
        show: false,
        resizable: false,
        frame: false
    });

    global.DB = {};
    DB.config = new Datastore(PATH.join(__dirname,'/resource/config.db'));
    DB.config.loadDatabase();

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
        SHELL.openExternal("https://github.com/ydtg1993/JunkMan");
    });

    IpcMain.on('error-waring', (event, arg) => {
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
    code:null,
    palpitation: null,
    connect: function () {
        DB.config.findOne({_id:"v5NBSxSzmE3yXjj9"},function(err, doc){
            let net = require('net');
            if (err) {
                electron.dialog.showMessageBox({
                    title: 'warning',
                    type: 'error',
                    message: 'unexpected error! can not find data'
                })
            }

            let HOST =doc.host;
            let PORT = doc.port;

            global.JunkManClient = new net.Socket();
            JunkManClient.setKeepAlive(true);
            JunkManClient.setEncoding("utf8");

            JunkManClient.connect(PORT, HOST);

            JunkManClient.on('connect', function () {
                JunkManClient.write(`{"agent":"client","status":"start"}`);
                socketWorker.palpitation = setInterval(() => {
                    if (JunkManClient) {
                        JunkManClient.write(`{"agent":"client","status":"palpitation"}`);
                    } else {
                        clearInterval(socketWorker.palpitation);
                    }
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
                if (data.substr(0,7) == 'SUCCESS') {
                    mainWindow.webContents.send('stream', 'connected');
                    socketWorker.code = data.substr(8);
                    return
                }

                packageWorker.run(data);
            });
        });
    },
    close: function () {
        clearInterval(socketWorker.palpitation);
        if (global.JunkManClient != null) {
            JunkManClient.end(`{"agent":"client","status":"end","secret":"`+socketWorker.code+`"}`);
            global.JunkManClient = null;
        }
    }
};

let packageWorker = {
    data: "",
    flag: 0,
    buffer: null,
    run: function (data) {
        packageWorker.buffer = Buffer.from(data);
        JunkManClient.pause();
        while (true) {
            let flag = packageWorker.slicer();
            if (flag) {
                break;
            }
        }
        packageWorker.buffer = null;
        JunkManClient.resume();
    },
    slicer: function () {
        let startSign = packageWorker.buffer.indexOf(2);
        let endSign = packageWorker.buffer.indexOf(3);
        if (packageWorker.flag > 3) {
            packageWorker.reset();
        }

        if (endSign >= 0 && startSign >= 0) {
            if (startSign < endSign) {
                //start...end...
                packageWorker.reset();
                packageWorker.data = packageWorker.buffer.slice(startSign + 1, endSign).toString();
                if (isJSON(packageWorker.data)) {
                    mainWindow.webContents.send('stream', packageWorker.data);
                }
                if (endSign < packageWorker.buffer.length - 1) {
                    packageWorker.buffer = packageWorker.buffer.slice(endSign + 1);
                    return false;
                }
                packageWorker.reset();
                return true;
            }
            //end...start...
            if(endSign === 0){
                if (isJSON(packageWorker.data)) {
                    mainWindow.webContents.send('stream', packageWorker.data);
                }
            }else if(endSign > 0) {//...end.start...
                packageWorker.data += packageWorker.buffer.slice(0, endSign).toString();
                if (isJSON(packageWorker.data)) {
                    mainWindow.webContents.send('stream', packageWorker.data.toString());
                }
            }
            packageWorker.reset();
            packageWorker.buffer = packageWorker.buffer.slice(startSign);
            return false;
        } else if (endSign === (packageWorker.buffer.length - 1) && startSign < 0) {
            //...end
            packageWorker.data += packageWorker.buffer.slice(0, endSign).toString();
            if (isJSON(packageWorker.data)) {
                mainWindow.webContents.send('stream', packageWorker.data);
            }
            packageWorker.reset();
            return true;
        } else if (startSign === 0 && endSign < 0) {
            //start...
            packageWorker.reset();
            packageWorker.data = packageWorker.buffer.slice(startSign + 1).toString();
            return true;
        } else {
            //ing
            packageWorker.data += packageWorker.buffer.toString();
            packageWorker.flag++;
            return true;
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
    let file = PATH.join(__dirname, '/resource/config.json');
    try {
        let data = FS.readFileSync(file, 'utf8');
        let config = JSON.parse(data);
        return config;
    } catch (e) {
        console.log(e);
        return false;
    }
}
