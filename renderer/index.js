// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const FS = require('fs');
const {ipcRenderer} = require('electron');
const SVG = require('svg.js');


let register = function () {
    buttonRegister();
    animationRegister();
};

let tmpData = {
    maximize:false,
    signal:0,//0:disconnect 1:connecting 2:connected
};

let socketListener = function () {
    let client = require('electron').remote.getGlobal('JunkManClient');
    if (client != null) {
        client.on('data', function (data) {
            let message = new Buffer.from(data).toString();
            console.log(message);
            console.log(JSON.parse(message))
        });
    }
};

let buttonRegister = function () {
    //window tool
    let maximize = document.getElementById('maximize');
    maximize.addEventListener('click', eventHandler.maximize.trigger);

    document.getElementById('minimize').addEventListener('click',function () {
        ipcRenderer.send('window-event', 'minimize');
    });

    document.getElementById('shutdown').addEventListener('click', function () {
        ipcRenderer.send('window-event', 'close');
    });

    //navigation tool
    document.getElementById('signal').addEventListener('click', eventHandler.signal.trigger);
};

let animationRegister = function(){
    let setAnime = SVG('set');
    setAnime.mouseover(function() { this.animate(5000).rotate(360, 0, 0).loop(); });
    setAnime.mouseout(function() { this.stop() })

    let bellAnime = SVG('bell');
    bellAnime.mouseover(function() {
        this.animate(100).rotate(25, 0, 0)
            .animate(100).rotate(0, 0, 0)
            .animate(100).rotate(-25, 0, 0)
            .animate(100).rotate(0, 0, 0);
    });
    bellAnime.mouseout(function() {
        this.animate(100).rotate(0, 0, 0);
    })
}

let eventHandler = {
    maximize:{
        trigger:function () {
            if(!tmpData.maximize){
                eventHandler.maximize.max()
            }else {
                eventHandler.maximize.unmax()
            }
        },
        max:function () {
            ipcRenderer.send('window-event', 'maximize');
            tmpData.maximize = true;
        },
        unmax:function () {
            ipcRenderer.send('window-event', 'unmaximize');
            tmpData.maximize = false;
        }
    },
    signal: {
        trigger:function () {
            if(tmpData.signal == 0){
                eventHandler.signal.connect();
            }else if(tmpData.signal == 1){
                //connecting
            }else {
                eventHandler.signal.disconnect();
            }
        },
        connect: function () {
            ipcRenderer.send('socket-event', 'connect');
            socketListener();
        },
        disconnect: function () {
            ipcRenderer.send('socket-event', 'disconnect');
        }
    },
};