// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let fs = require('fs');
const { ipcRenderer } = require('electron');

let register = function(){
    tools.init();
};

let socketListener = {
   init:function () {
       let client = require('electron').remote.getGlobal('JunkManClient');
       client.on('data', function(data) {
           let message = new Buffer.from(data).toString();
           console.log(message)
           console.log(JSON.parse(message))
       });
   }
};

let tools = {
   init:function () {
      let signalDom = document.getElementById('signal');
      signalDom.addEventListener('click',eventHandler.signal.connect)
   },
};

let eventHandler = {
    signal: {
        'connect': function () {
            ipcRenderer.send('socket-event', 'connect');
            socketListener.init();
        },
        'disconnect': function () {
            ipcRenderer.send('socket-event', 'disconnect');
        }
    },
};