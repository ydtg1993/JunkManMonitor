// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const FS = require('fs');
const {ipcRenderer} = require('electron');
const SVG = require('svg.js');
const PATH=require('path');
const sprintf = require('sprintf-js').sprintf;

let register = function () {
    line_area = document.getElementById('line_content');
    file_area = document.getElementById('file_content');
    var_area = document.getElementById('var_content');
    listener();
    buttonRegister();
    animationRegister();
};

let Stream = {};

let DataStructure = {
    "title": "",
    "status": "",
    "time": "",
    "code": "",
    "stream_type": "",
    "trace_file": "",
    "trace_file_content": {},
    "trace_start_line": "",
    "trace_end_line": "",
    "trace_start_time": "",
    "trace_end_time": "",
    "TraceDataBuffer": [],
    "extend": ""
};

let TmpData = {
    maximize: false,
    signal: 0,//0:disconnect 1:connecting 2:connected

    //current data
    focusData:{},

    //lock
    shrink_lock: true,
    setting_lock: true,
    form_lock:true,
};

let SignalSvg = {
    connect: '<svg id="signal" t="1554198386308" class="icon" style="" viewBox="0 0 1024 1024" version="1.1"\n' +
        '                 xmlns="http://www.w3.org/2000/svg"\n' +
        '                 p-id="19814" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">\n' +
        '                <defs>\n' +
        '                    <style type="text/css"></style>\n' +
        '                </defs>\n' +
        '                <path d="M954.0608 771.7888C910.7456 846.6432 855.04 904.0896 786.7392 944.128L751.8208 886.6816C806.7072 853.2992 855.04 804.2496 896.6144 739.328c41.6768-68.3008 62.464-143.1552 62.464-224.768 0-59.904-11.6736-118.272-35.0208-174.7968-21.6064-51.6096-53.248-99.0208-94.9248-142.336L826.6752 197.4272C783.36 155.7504 735.9488 124.0064 684.3392 102.4 627.712 79.0528 570.2656 67.4816 512 67.4816 453.7344 67.4816 396.288 79.0528 339.6608 102.4 288.0512 124.0064 240.64 155.7504 197.3248 197.3248c-43.3152 43.3152-75.776 90.8288-97.3824 142.336C76.5952 396.288 64.9216 454.5536 64.9216 514.4576c0 76.5952 20.7872 151.552 62.464 224.768C168.96 804.2496 217.2928 853.2992 272.2816 886.6816L237.2608 944.128C172.3392 907.4688 116.5312 850.8416 69.9392 774.2464 23.3472 696.0128 0 609.3824 0 514.4576c0-69.9392 12.4928-136.0896 37.4784-198.5536 24.9856-62.464 61.6448-117.76 109.8752-166.0928 48.3328-48.3328 103.6288-85.2992 166.0928-111.104C375.9104 12.9024 442.0608 0 512 0c69.9392 0 136.0896 12.9024 198.5536 38.7072 62.464 25.8048 117.76 62.8736 166.0928 111.104C924.9792 198.144 961.536 253.5424 986.5216 315.904 1011.5072 378.368 1024 444.6208 1024 514.4576 1024 607.8464 1000.6528 693.4528 954.0608 771.7888zM769.2288 664.3712C749.2608 701.0304 719.2576 734.3104 679.3216 764.2112L644.4032 706.7648c13.312-8.2944 25.8048-18.3296 37.4784-30.0032C693.4528 665.2928 703.488 652.8 711.7824 639.3856l2.4576 0L714.24 636.8256c19.968-34.9184 30.0032-74.0352 30.0032-117.3504 0-68.3008-23.3472-123.1872-69.9392-164.864C632.7296 309.6576 578.56 287.232 512 287.232S391.2704 309.6576 349.696 354.6112C303.0016 396.288 279.7568 451.2768 279.7568 519.4752c0 19.968 2.8672 39.6288 8.704 58.6752 5.8368 19.1488 12.9024 37.0688 21.1968 53.6576l2.4576 2.4576c18.3296 28.3648 40.7552 52.4288 67.4816 72.3968L347.136 764.2112c-19.968-13.312-37.4784-28.7744-52.4288-46.1824-14.9504-17.5104-28.2624-35.328-39.936-53.6576L254.7712 661.8112c-28.2624-39.936-42.496-88.9856-42.496-147.3536 0-86.528 29.184-157.3888 87.4496-212.2752l2.4576 0C358.8096 242.2784 428.7488 212.2752 512 212.2752c81.6128 0 152.3712 30.0032 212.2752 89.9072 58.2656 54.9888 87.4496 125.7472 87.4496 212.2752 0 56.6272-13.312 105.7792-39.936 147.3536L769.2288 664.3712zM512 601.9072c-19.968 0-40.7552-9.1136-62.464-27.4432C432.9472 557.8752 424.5504 537.9072 424.5504 514.4576c0-24.9856 8.2944-45.7728 24.9856-62.464C471.2448 433.7664 492.032 424.5504 512 424.5504c19.968 0 40.7552 9.1136 62.464 27.4432 16.6912 16.6912 24.9856 37.4784 24.9856 62.464 0 23.3472-8.2944 43.3152-24.9856 59.904C552.7552 592.7936 531.968 601.9072 512 601.9072z"\n' +
        '                      p-id="19815"></path></svg>',
    connecting: '<svg id="signal" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" stroke="#ffffff" capture-installed="true">\n' +
        '                <g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2">\n' +
        '                    <circle cx="22" cy="22" r="10.0505" stroke-opacity="0">\n' +
        '                        <animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate>\n' +
        '                        <animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate>\n' +
        '                        <animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate>\n' +
        '                    </circle>\n' +
        '                    <circle cx="22" cy="22" r="18.0505" stroke-opacity="0">\n' +
        '                        <animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate>\n' +
        '                        <animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate>\n' +
        '                        <animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate>\n' +
        '                    </circle>\n' +
        '                    <circle cx="22" cy="22" r="3.03789">\n' +
        '                        <animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate>\n' +
        '                    </circle>\n' +
        '                </g>\n' +
        '            </svg>',
    connected: '<svg id="signal" t="1554198386308" class="icon" style="" viewBox="0 0 1024 1024" version="1.1"\n' +
        '                 xmlns="http://www.w3.org/2000/svg"\n' +
        '                 p-id="19814" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">\n' +
        '                <defs>\n' +
        '                    <style type="text/css"></style>\n' +
        '                </defs>\n' +
        '                <path fill="#00ff9c" d="M954.0608 771.7888C910.7456 846.6432 855.04 904.0896 786.7392 944.128L751.8208 886.6816C806.7072 853.2992 855.04 804.2496 896.6144 739.328c41.6768-68.3008 62.464-143.1552 62.464-224.768 0-59.904-11.6736-118.272-35.0208-174.7968-21.6064-51.6096-53.248-99.0208-94.9248-142.336L826.6752 197.4272C783.36 155.7504 735.9488 124.0064 684.3392 102.4 627.712 79.0528 570.2656 67.4816 512 67.4816 453.7344 67.4816 396.288 79.0528 339.6608 102.4 288.0512 124.0064 240.64 155.7504 197.3248 197.3248c-43.3152 43.3152-75.776 90.8288-97.3824 142.336C76.5952 396.288 64.9216 454.5536 64.9216 514.4576c0 76.5952 20.7872 151.552 62.464 224.768C168.96 804.2496 217.2928 853.2992 272.2816 886.6816L237.2608 944.128C172.3392 907.4688 116.5312 850.8416 69.9392 774.2464 23.3472 696.0128 0 609.3824 0 514.4576c0-69.9392 12.4928-136.0896 37.4784-198.5536 24.9856-62.464 61.6448-117.76 109.8752-166.0928 48.3328-48.3328 103.6288-85.2992 166.0928-111.104C375.9104 12.9024 442.0608 0 512 0c69.9392 0 136.0896 12.9024 198.5536 38.7072 62.464 25.8048 117.76 62.8736 166.0928 111.104C924.9792 198.144 961.536 253.5424 986.5216 315.904 1011.5072 378.368 1024 444.6208 1024 514.4576 1024 607.8464 1000.6528 693.4528 954.0608 771.7888zM769.2288 664.3712C749.2608 701.0304 719.2576 734.3104 679.3216 764.2112L644.4032 706.7648c13.312-8.2944 25.8048-18.3296 37.4784-30.0032C693.4528 665.2928 703.488 652.8 711.7824 639.3856l2.4576 0L714.24 636.8256c19.968-34.9184 30.0032-74.0352 30.0032-117.3504 0-68.3008-23.3472-123.1872-69.9392-164.864C632.7296 309.6576 578.56 287.232 512 287.232S391.2704 309.6576 349.696 354.6112C303.0016 396.288 279.7568 451.2768 279.7568 519.4752c0 19.968 2.8672 39.6288 8.704 58.6752 5.8368 19.1488 12.9024 37.0688 21.1968 53.6576l2.4576 2.4576c18.3296 28.3648 40.7552 52.4288 67.4816 72.3968L347.136 764.2112c-19.968-13.312-37.4784-28.7744-52.4288-46.1824-14.9504-17.5104-28.2624-35.328-39.936-53.6576L254.7712 661.8112c-28.2624-39.936-42.496-88.9856-42.496-147.3536 0-86.528 29.184-157.3888 87.4496-212.2752l2.4576 0C358.8096 242.2784 428.7488 212.2752 512 212.2752c81.6128 0 152.3712 30.0032 212.2752 89.9072 58.2656 54.9888 87.4496 125.7472 87.4496 212.2752 0 56.6272-13.312 105.7792-39.936 147.3536L769.2288 664.3712zM512 601.9072c-19.968 0-40.7552-9.1136-62.464-27.4432C432.9472 557.8752 424.5504 537.9072 424.5504 514.4576c0-24.9856 8.2944-45.7728 24.9856-62.464C471.2448 433.7664 492.032 424.5504 512 424.5504c19.968 0 40.7552 9.1136 62.464 27.4432 16.6912 16.6912 24.9856 37.4784 24.9856 62.464 0 23.3472-8.2944 43.3152-24.9856 59.904C552.7552 592.7936 531.968 601.9072 512 601.9072z"\n' +
        '                      p-id="19815"></path></svg>'
};

let listener = function () {
    ipcRenderer.on('stream', (event, arg) => {
        if (arg == 'connected') {
            TmpData.signal = 2;
            document.getElementById('signal-box').innerHTML = SignalSvg.connected;
            return
        } else if (arg == 'disconnect') {
            TmpData.signal = 0;
            document.getElementById('signal-box').innerHTML = SignalSvg.connect;
            return
        }
        let data = JSON.parse(arg);
        for (let i in DataStructure) {
            DataStructure[i] = "";
            DataStructure[i] = data[i];
        }
        labour.work(DataStructure)
    });
};

let labour = {
    panel: {
        stack: '<div class="stack" data-name="%s" data-shrink="0">\n' +
            '                <div class="row">\n' +
            '                    <div class="shrink-icon shrink-event"><img class="icon" src="resource/image/shrink.svg"></div>\n' +
            '                    <div class="title shrink-event">%s</div>\n' +
            '                    <div>\n' +
            '                        <span class="number-tip">%d</span>\n' +
            '                        <img class="icon delete-stack" src="resource/image/delete2.svg">\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                %s' +
            '            </div>',
        unit: '<div class="row-list" data-code="%s" style="%s">\n' +
            '                    <div class="row-list-icon"><img class="icon" src="resource/image/time.svg"></div>\n' +
            '                    <div class="title open-event">%s</div>\n' +
            '                    <div>\n' +
            '                        <img class="icon information-unit" style="width: 15.5px" src="resource/image/information.svg">\n' +
            '                        <img class="icon delete-unit" src="resource/image/delete.svg">\n' +
            '                    </div>\n' +
            '                </div>'
    },
    registerEvent: {
        shrink: function () {
            if (TmpData.shrink_lock) {
                TmpData.shrink_lock = false;
                let stackDom = this.parentNode.parentNode;
                let mark = stackDom.getAttribute('data-shrink');
                let children = stackDom.childNodes;

                let occur = 'display:none;';
                if (mark == 0) {
                    //spread
                    stackDom.setAttribute('data-shrink', 1);
                    occur = 'display:grid;';
                    stackDom.children[0].children[0].children[0].setAttribute('src','resource/image/spread.svg');
                } else {
                    stackDom.setAttribute('data-shrink', 0);
                    stackDom.children[0].children[0].children[0].setAttribute('src','resource/image/shrink.svg');
                }

                for (let i = 2; i < children.length; i++) {
                    if (children[i] instanceof HTMLElement) {
                        children[i].setAttribute('style', occur);
                    }
                }
                TmpData.shrink_lock = true;
            }
        },
        open:function () {
            let rowDom = this.parentNode;
            let stackDom = rowDom.parentNode;
            let code = rowDom.getAttribute('data-code');
            let title = stackDom.getAttribute('data-name');
            let TraceDataHash = {};

            let data = Stream[title][code];
            TmpData.focusData = {};
            if(data == null){
                return;
            }
            TmpData.focusData = data;
            for (let i in data.TraceDataBuffer) {
                let tmp = data.TraceDataBuffer[i];
                if(TraceDataHash[tmp.Line]) {
                    TraceDataHash[tmp.Line].push(tmp);
                    continue;
                }
                TraceDataHash[tmp.Line] = [tmp];
            }

            line_area.innerHTML = "";
            file_area.innerHTML = "";
            var_area.innerHTML = "";

            let trace_file_content = data.trace_file_content;
            for (let line in trace_file_content){
                line_area.innerHTML+= "<p>"+line+"</p>";
                file_area.innerHTML+= "<p data-line='"+line+"'>"+trace_file_content[line].replace(/\s/g, "&ensp;")+"</p>";
            }
            $("#var_content").JSONView(data.TraceDataBuffer);
            //line explain
            $("#file_content p").click(function () {
                event.stopPropagation();
                for (let index in file_area.childNodes){
                    if ((file_area.childNodes[index] instanceof HTMLElement) == false) {
                        continue;
                    }
                    let dom = file_area.childNodes[index];
                    dom.setAttribute('style', 'background-color:transparent');
                }
                $(this).css('background-color','lightyellow');
                let index = parseInt($(this).attr('data-line'));

                if(TraceDataHash[index]) {
                    $("#var_content").JSONView(TraceDataHash[index]);
                }else {
                    var_area.innerHTML = "";
                }
            });

            file_area.addEventListener('click',labour.registerEvent.explainReset);
        },
        explainReset:function () {
            for (let index in file_area.childNodes){
                if ((file_area.childNodes[index] instanceof HTMLElement) == false) {
                    continue;
                }
                let dom = file_area.childNodes[index];
                dom.setAttribute('style', 'background-color:transparent');
            }
            $("#var_content").JSONView(TmpData.focusData.TraceDataBuffer);
        }
    },
    work: function (DataStructure) {
        let html = '';
        if (DataStructure.title == "") {
            DataStructure.title = "Default";
        }
        let code = DataStructure.code;
        if (Stream[DataStructure.title] == null) {
            //first add
            let catalogDom = document.getElementById('catalog-list');
            Stream[DataStructure.title] = {};
            Stream[DataStructure.title][code] = DataStructure;

            let date = new Date(DataStructure.time * 1000).toLocaleString();
            let unit = sprintf(labour.panel.unit, code, "", date);
            html += sprintf(labour.panel.stack, DataStructure.title, DataStructure.title, 1, unit);
            catalogDom.innerHTML = html + catalogDom.innerHTML;

            document.getElementsByClassName('shrink-event');
            bindClassEvent('shrink-event', 'click', labour.registerEvent.shrink);
            bindClassEvent('open-event','click',labour.registerEvent.open);
            return
        }

        //append
        Stream[DataStructure.title][code] = DataStructure;
        let stackDoms = document.getElementsByClassName('stack');
        let stack;
        for (let index = 0; index < stackDoms.length; index++) {
            let stackName = stackDoms[index].getAttribute('data-name');
            if (stackName == DataStructure.title) {
                stack = stackDoms[index];
                let notice = parseInt(stack.children[0].children[2].children[0].innerHTML);
                notice += 1;
                let date = new Date(DataStructure.time * 1000).toLocaleString();

                let mark = stack.getAttribute('data-shrink');
                let viewStyle;
                if (mark == 0) {
                    viewStyle = 'display:none;';
                } else {
                    viewStyle = 'display:grid;';
                }
                stack.innerHTML = stack.innerHTML + sprintf(labour.panel.unit, code, viewStyle, date);
                stack.children[0].children[2].children[0].innerHTML = notice.toString();
            }
        }
        bindClassEvent('shrink-event', 'click', labour.registerEvent.shrink);
        bindClassEvent('open-event','click',labour.registerEvent.open);
    }
};

let buttonRegister = function () {
    //window tool
    let maximize = document.getElementById('maximize');
    maximize.addEventListener('click', eventHandler.maximize.trigger);

    document.getElementById('minimize').addEventListener('click', function () {
        ipcRenderer.send('window-event', 'minimize');
    });

    document.getElementById('shutdown').addEventListener('click', function () {
        ipcRenderer.send('window-event', 'close');
    });

    //navigation tool
    document.getElementById('signal-box').addEventListener('click', eventHandler.signal.trigger);
    //settings
    document.getElementById('set-box').addEventListener('click', eventHandler.setting.open);
    document.getElementById('mongolia').addEventListener('click', eventHandler.setting.shut);
    document.getElementById('form-apply').addEventListener('click', eventHandler.setting.apply);
    document.getElementById('form-cancel').addEventListener('click', eventHandler.setting.cancel);

    document.getElementById('help-box').addEventListener('click', function () {
        ipcRenderer.send('help-event', 'help');
    });
};

let animationRegister = function () {
    let setAnime = SVG('set');
    setAnime.mouseover(function () {
        this.animate(5000).rotate(360, 0, 0).loop();
    });
    setAnime.mouseout(function () {
        this.stop()
    });

    let bellAnime = SVG('bell');
    bellAnime.mouseover(function () {
        this.animate(100).rotate(15, 0, 0)
            .animate(100).rotate(0, 0, 0)
            .animate(100).rotate(-15, 0, 0)
            .animate(100).rotate(0, 0, 0);
    });
    bellAnime.mouseout(function () {
        this.animate(100).rotate(0, 0, 0);
    })
};

let eventHandler = {
    maximize: {
        trigger: function () {
            if (!TmpData.maximize) {
                eventHandler.maximize.max()
            } else {
                eventHandler.maximize.unmax()
            }
        },
        max: function () {
            ipcRenderer.send('window-event', 'maximize');
            TmpData.maximize = true;
        },
        unmax: function () {
            ipcRenderer.send('window-event', 'unmaximize');
            TmpData.maximize = false;
        }
    },
    signal: {
        trigger: function () {
            if (TmpData.signal == 0) {
                TmpData.signal = 1;
                this.innerHTML = SignalSvg.connecting;
                eventHandler.signal.connect();
                return
            } else if (TmpData.signal == 1) {
                //connecting
                return
            } else {
                TmpData.signal = 0;
                eventHandler.signal.disconnect();
                this.innerHTML = SignalSvg.connect;
            }
        },
        connect: function () {
            ipcRenderer.send('socket-event', 'connect');
        },
        disconnect: function () {
            ipcRenderer.send('socket-event', 'disconnect');
        }
    },
    setting: {
        open: function () {
            if (TmpData.setting_lock) {
                TmpData.setting_lock = false;
                let hotsInput = getNameDom('host');
                let portInput = getNameDom('port');
                let IPvInput = getNameDom('IPv');
                let autoInput = getNameDom('auto-connect');

                let config = getConfigFile();
                hotsInput.value = config.host;
                portInput.value = config.port;

                selectHelp(IPvInput,config.IPv);
                selectHelp(autoInput,config["auto-connect"]);

                document.getElementById('mongolia').setAttribute('style', 'display:block;');
                document.getElementById('form').setAttribute('style', 'display:block;');
                TmpData.setting_lock = true;
            }
        },
        apply:function(){
            if(TmpData.form_lock) {
                TmpData.form_lock = false;
                let hotsInput = getNameDom('host');
                let portInput = getNameDom('port');
                let IPvInput = getNameDom('IPv');
                let autoInput = getNameDom('auto-connect');

                let config = getConfigFile();
                if(!config){
                    eventHandler.setting.resetConfigFile();
                    ipcRenderer.send('error-waring', 'unexpected error! reset config');
                    TmpData.form_lock = true;
                    return
                }
                config.host = hotsInput.value;
                if(portInput.value < 0 || portInput.value > 65535){
                    ipcRenderer.send('error-waring', 'port should be > 0 and <65535');
                    TmpData.form_lock = true;
                    return
                }
                config.port = portInput.value;
                config.IPv = parseInt(IPvInput.value);
                config["auto-connect"] = parseInt(autoInput.value);
                writeConfigFile(config);

                eventHandler.setting.shut();
            }
        },
        cancel:function(){
            eventHandler.setting.shut();
        },
        shut:function () {
            TmpData.form_lock = true;
            document.getElementById('mongolia').setAttribute('style', 'display:none;');
            document.getElementById('form').setAttribute('style', 'display:none;');
        },
        resetConfigFile:function () {
            writeConfigFile({"host":"127.0.0.1","port":"9303","IPv":4,"auto-connect":0,"palpitation":3000});
        }
    }
};

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

function writeConfigFile(data) {
    let file = PATH.join(__dirname,'/resource/config.json');
    let str = JSON.stringify(data);
    FS.writeFile(file, str,function(err){
        if(err) console.log('写文件操作失败');
    });
}

function selectHelp(Dom,value) {
    let options = Dom.options;
    for (let i=0;i<= options.length;i++){
        if ((options[i] instanceof HTMLElement) == false) {
            continue;
        }
        if(options[i].value == value){
            options[i].selected = true;
        }
    }
}

function getNameDom(name) {
    let elements = document.getElementsByName(name);
    if ((elements[0] instanceof HTMLElement) == false) {
        return false;
    }
    return elements[0];
}

function bindClassEvent(className, event, func) {
    let objs = document.getElementsByClassName(className);
    for (let i = 0; i < objs.length; i++) {
        objs[i].addEventListener(event, func, false);
    }
}

Date.prototype.toLocaleString = function () {
    return this.getFullYear() + "/" +
        (this.getMonth() + 1) + "/" +
        this.getDate() + " " +
        this.getHours() + ":" +
        this.getMinutes() + ":" +
        this.getSeconds();
};


