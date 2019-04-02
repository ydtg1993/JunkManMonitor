function handleComplete(evt,comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib=comp.getLibrary();
  var ss=comp.getSpriteSheet();
  exportRoot = new lib.home0712();
  stage = new lib.Stage(canvas);  
  //Registers the "tick" event listener.
  fnStartAnimation = function() {
    stage.addChild(exportRoot);
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
  }     
  //Code to support hidpi screens and responsive scaling.
  function makeResponsive(isResp, respDim, isScale, scaleType) {    
    var lastW, lastH, lastS=1;    
    window.addEventListener('resize', resizeCanvas);    
    resizeCanvas();   
    function resizeCanvas() {     
      var w = lib.properties.width, h = lib.properties.height;      
      var iw = window.innerWidth, ih=window.innerHeight;      
      var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;      
      if(isResp) {                
        if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
          sRatio = lastS;                
        }       
        else if(!isScale) {         
          if(iw<w || ih<h)            
            sRatio = Math.min(xRatio, yRatio);        
        }       
        else if(scaleType==1) {         
          sRatio = Math.min(xRatio, yRatio);        
        }       
        else if(scaleType==2) {         
          sRatio = Math.max(xRatio, yRatio);        
        }     
      }     
      canvas.width = w*pRatio*sRatio;     
      canvas.height = h*pRatio*sRatio;
      canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';       
      canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
      stage.scaleX = pRatio*sRatio;     
      stage.scaleY = pRatio*sRatio;     
      lastW = iw; lastH = ih; lastS = sRatio;            
      stage.tickOnUpdate = false;            
      stage.update();            
      stage.tickOnUpdate = true;    
    }
  }
  makeResponsive(true,'both',true,1); 
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}


(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81C3FD").s().p("AiKBRIEWlBIAAHhg");
	this.shape.setTransform(-13.9,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C98EA").s().p("AiKjwIEWFBIkWCgg");
	this.shape_1.setTransform(14,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AksABIEtiuIEsCtIktCug");
	this.shape_2.setTransform(0,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-24.7,60.1,49.5);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FD7170").s().p("Ah7BGIAAkaID3COIAAEbg");
	this.shape.setTransform(-12.4,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FD8083").s().p("Aj2AAID3iOID1COIj2CPg");
	this.shape_1.setTransform(0,-15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FD5756").s().p("Ah7hHID3iMIAAEXIj3CRg");
	this.shape_2.setTransform(12.4,5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AknABIEoirIEnCqIkoCrg");
	this.shape_3.setTransform(0,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.6,-29.6,59.2,59.4);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#53CEAE").s().p("Ag2DFQhRgwgZhbQgZhZAwhSQAvhSBagYQAvgNAuAIQhDAlgeBHQgfBJAUBLQARBDA0AtQAyAsBCAKQgYAOgcAHQggAJgeAAQg4AAg2gfg");
	this.shape.setTransform(-5.6,-3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#74D8BD").s().p("AhxDFQhRgvgZhbQgZhaAwhSQAvhRBbgZQBagYBSAvQBRAvAZBbQAYBagvBSQgvBRhbAZQgfAIgdAAQg6AAg2gfg");
	this.shape_1.setTransform(0.3,-3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.2)").s().p("AifBdQhDgnAAg2QAAg2BCgmQBCgmBeAAQBeAABDAnQBCAmAAA1QABA3hCAmQhDAmheAAQhdAAhDgmg");
	this.shape_2.setTransform(-0.5,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-26,46.3,52.1);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81C3FD").s().p("Ah7BHIAAkcID3CPIAAEcg");
	this.shape.setTransform(-197.3,-98.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj2AAID3iNID2CNIj3COg");
	this.shape_1.setTransform(-184.9,-120.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C98EA").s().p("Ah7hGID3iOIAAEYIj3CRg");
	this.shape_2.setTransform(-172.5,-98.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#74D8BD").s().p("Ah2hPICPhTIBeDyIiPBTg");
	this.shape_3.setTransform(-46.4,-39.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#37BEA1").s().p("AgYgYICPhTIheCEIiPBTg");
	this.shape_4.setTransform(-46.4,-20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#53CEAE").s().p("AheCFIhejxIBeiFIC8BtIBfDxIhfCGg");
	this.shape_5.setTransform(-67.7,-33.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWgYIh3gLIhFhiICQhTIC8BtIhYFEg");
	this.shape_6.setTransform(-60.5,-44.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#81C3FD").s().p("Ah7BHIAAkcID3CPIAAEcg");
	this.shape_7.setTransform(51.5,39.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Aj2AAID3iNID2CNIj3COg");
	this.shape_8.setTransform(63.9,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C98EA").s().p("Ah7hGID3iOIAAEYIj3CRg");
	this.shape_9.setTransform(76.3,39.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#74D8BD").s().p("Ah2hPICPhTIBeDyIiPBTg");
	this.shape_10.setTransform(202.4,99.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#37BEA1").s().p("AgYgYICPhTIheCEIiPBTg");
	this.shape_11.setTransform(202.4,118.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#53CEAE").s().p("AheCFIhejxIBeiFIC8BtIBfDxIhfCGg");
	this.shape_12.setTransform(181.1,104.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAWgYIh3gLIhFhiICQhTIC8BtIhYFEg");
	this.shape_13.setTransform(188.3,93.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.2)").s().p("AZnPxICPhTIFrDRIiQBTgAFXFUIEpirIEnCqIkpCsgAtQl5ICPhTIFrDRIiQBTgEghggQVIEpisIEnCrIkpCrg");
	this.shape_14.setTransform(0,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214.5,-134.4,429,268.8);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgDIH6kkQAFgCACAEQACAEgEADIn6EkIgDABQgDAAgBgDg");
	this.shape.setTransform(-141.8,-80.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgDIH6kkQAEgCADAEQACAEgEADIn7EkIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_1.setTransform(-157.9,-90.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0C7CF").s().p("AkBCVQgCgFAEgBIH6klQAFgCACAEQADAFgFACIn6EkIgDABQgDAAgBgDg");
	this.shape_2.setTransform(-125.8,-71.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH7kkQADgCADAEQADAEgFADIn6EkIgDAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAAAgBg");
	this.shape_3.setTransform(-109.7,-62.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgDIH6kkQAFgCACAEQACAEgEADIn6EkIgDABQgDAAgBgDg");
	this.shape_4.setTransform(-78.2,-44.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgDIH6kkQAEgCADAEQACAEgEADIn7EkIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_5.setTransform(-94.2,-53.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C0C7CF").s().p("AkBCVQgCgFAEgBIH6klQAFgCACAEQADAFgFACIn6EkIgDABQgDAAgBgDg");
	this.shape_6.setTransform(-62.1,-35.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH7kkQADgCADAEQADAEgFADIn6EkIgDAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAAAgBg");
	this.shape_7.setTransform(-46.1,-26.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgDIH6kkQAFgCACAEQACAEgEADIn7EkIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_8.setTransform(98.5,57.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgDIH6kkQAFgCACAEQADAEgEADIn8EkIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_9.setTransform(82.4,48.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgCIH7klQAFgCABAEQADAFgEACIn7EkIgDABQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_10.setTransform(66.3,38.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH7kkQADgCADAEQADAEgFADIn6EkIgDABQgDAAgBgDg");
	this.shape_11.setTransform(50.3,29.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH6kkQAFgCACAEQADAEgFADIn6EkIgDAAQgDAAgBgCg");
	this.shape_12.setTransform(34.2,20.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgCIH6klQAFgCACAEQACAFgEACIn6EkIgDABQgDAAgBgDg");
	this.shape_13.setTransform(18.2,11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgDIH6kkQAEgCADAEQACAEgEADIn7EkIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_14.setTransform(2.1,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH6kkQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABABQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQACAEgDADIn8EkIgCABQgBAAAAgBQgBAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_15.setTransform(-30,-16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C0C7CF").s().p("AkBCVQgDgDAEgDIH8klQAEgCACAEQADAFgFACIn6EkIgDABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_16.setTransform(-13.9,-7.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgCIH6klQAFgCACAEQACAFgEACIn6EkIgDABQgDAAgBgDg");
	this.shape_17.setTransform(114.5,66.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH6kkQAEgCADAEQADAEgFADIn6EkIgDAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAAAgBg");
	this.shape_18.setTransform(130.6,75.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH7kkQADgCADAEQADAEgFADIn6EkIgDABQgDAAgBgDg");
	this.shape_19.setTransform(146.6,85.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.8,-105.2,356.4,205.6);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgCIH6klQAFgCACAEQACAFgEACIn7EkIgCABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape.setTransform(-218.3,-125.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgCIH6klQAFgCACAEQACAFgEACIn6EkIgDABQgDAAgBgDg");
	this.shape_1.setTransform(-202.1,-116.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgDIH6kkQAFgCACAEQADAEgFADIn6EkIgDAAQgDAAgBgCg");
	this.shape_2.setTransform(-185.9,-107.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH6kkQAEgCADAEQADAEgFADIn6EkIgDAAQgDAAgBgCg");
	this.shape_3.setTransform(-169.7,-97.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgCIH6klQAFgCACAEQACAFgEACIn7EkIgCABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_4.setTransform(-153.9,-88.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgCIH6klQAFgCACAEQACAFgEACIn6EkIgDABQgDAAgBgDg");
	this.shape_5.setTransform(-137.7,-79.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgDIH6kkQAFgCACAEQADAEgFADIn6EkIgDAAQgDAAgBgCg");
	this.shape_6.setTransform(-121.5,-70.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH6kkQAEgCADAEQADAEgFADIn6EkIgDAAQgDAAgBgCg");
	this.shape_7.setTransform(-105.3,-60.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH7kkQADgCADAEQADAEgFADIn6EkIgDABQgDAAgBgDg");
	this.shape_8.setTransform(-89.1,-51.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH7kkQADgCADAEQADAEgFADIn6EkIgDABQgDAAgBgDg");
	this.shape_9.setTransform(24.3,14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH6kkQAEgCADAEQADAEgFADIn6EkIgDAAQgDAAgBgCg");
	this.shape_10.setTransform(8.1,4.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgDIH6kkQAFgCACAEQADAEgFADIn6EkIgDAAQgDAAgBgCg");
	this.shape_11.setTransform(-8.1,-4.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgCIH6klQAFgCACAEQACAFgEACIn7EkIgCABQgDAAgBgDg");
	this.shape_12.setTransform(-24.3,-14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAEgCIH7klQAFgCACAEQACAFgEACIn7EkIgCABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_13.setTransform(-40.5,-23.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgDIH6kkQAFgCACAEQADAEgEADIn8EkIgCABQgBAAAAAAQgBgBgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_14.setTransform(-72.9,-42.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgDIH6kkQAFgCACAEQADAEgEADIn8EkIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_15.setTransform(-56.7,-32.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAEgDIH8kkQADgCADAEQADAEgFADIn6EkIgDABQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_16.setTransform(40.6,23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAEgDIH8kkQAEgCACAEQADAEgFADIn6EkIgDABQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_17.setTransform(56.8,32.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAEgCIH7klQAFgCACAEQADAFgFACIn7EkIgCABQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_18.setTransform(73,42.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgCIH6klQAFgCACAEQACAFgEACIn7EkIgCABQgDAAgBgDg");
	this.shape_19.setTransform(89.2,51.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C0C7CF").s().p("AkBCVQgDgDAFgDIH6klQAFgCACAEQACAFgEACIn6EkIgDABQgDAAgBgDg");
	this.shape_20.setTransform(105.4,60.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH6kkQAEgCADAEQADAEgFADIn6EkIgDAAQgDAAgBgCg");
	this.shape_21.setTransform(121.6,70.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C0C7CF").s().p("AkBCVQgCgEAEgDIH7kkQADgCADAEQADAEgFADIn6EkIgDABQgDAAgBgDg");
	this.shape_22.setTransform(137.8,79.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgDIH6kkQAEgCADAEQADAEgEADIn8EkIgCABQgBAAAAAAQgBgBgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_23.setTransform(154,88.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.2,-141,424.2,245.1);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0C7CF").s().p("AD8CXIn7kkQgEgCACgFQACgEAFACIH6ElQAFACgDAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape.setTransform(-7.6,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0C7CF").s().p("AD7CXIn7kkQgEgCADgFQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAQAAAAAAAAIH7ElQAFACgDAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_1.setTransform(-23.5,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0C7CF").s().p("AD7CXIn6kkQgEgDACgEQADgEAEACIH6EkQAFADgDAEQgBADgDAAg");
	this.shape_2.setTransform(-38.7,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0C7CF").s().p("AD7CXIn6kkQgFgDADgEQACgEAEACIH8EkQAEADgDAEQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_3.setTransform(-54.6,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0C7CF").s().p("AD7CXIn6kkQgFgDADgEQADgEADACIH7EkQAEADgCAEQgBADgDAAg");
	this.shape_4.setTransform(-70.6,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C0C7CF").s().p("AD7CXIn6kkQgEgDACgEQADgEAEACIH6EkQAFADgDAEQgBADgDAAg");
	this.shape_5.setTransform(-86.5,50.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C0C7CF").s().p("AD7CXIn6kkQgFgDADgEQACgEAEACIH8EkQADADgCAEQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_6.setTransform(-102.4,59.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0C7CF").s().p("AD8CXIn7kkQgEgCACgFQACgEAFACIH6ElQAFACgDAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_7.setTransform(102.4,-59.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C0C7CF").s().p("AD7CXIn7kkQgEgCADgFQAAAAAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAQAAAAAAAAIH7ElQAFACgDAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_8.setTransform(86.5,-50.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C0C7CF").s().p("AD7CXIn6kkQgEgDACgEQADgEAEACIH6EkQAFADgDAEQgBADgDAAg");
	this.shape_9.setTransform(71.3,-41.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C0C7CF").s().p("AD7CXIn6kkQgFgDADgEQACgEAEACIH8EkQAEADgDAEQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_10.setTransform(55.4,-32.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C0C7CF").s().p("AD7CXIn6kkQgFgDADgEQADgEADACIH7EkQAEADgCAEQgBADgDAAg");
	this.shape_11.setTransform(39.4,-22.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C0C7CF").s().p("AD7CXIn6kkQgEgDACgEQADgEAEACIH6EkQAFADgDAEQgBADgDAAg");
	this.shape_12.setTransform(23.5,-13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C0C7CF").s().p("AD7CXIn6kkQgFgDADgEQACgEAEACIH8EkQADADgCAEQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAg");
	this.shape_13.setTransform(7.6,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.3,-74.4,256.7,148.9);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjTB6QhXgzgBhHQgBhHBYgzQBYgyB8AAQB7AABYAzQBYAzABBGQABBIhZAzQhXAyh8AAQh7AAhZgzg");
	this.shape.setTransform(30,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,60,34.7), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjLB2QhVgxABhFQAAhDBVgxQBUgxB3AAQB3gBBVAxQBUAxgBBEQAABEhVAxQhVAxh2AAQh3AAhUgwg");
	this.shape.setTransform(28.8,16.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0.1,57.7,33.3), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjSB6QhYgzgBhHQAAhIBXgyQBYgyB8AAQB7AABYAzQBYAzABBGQAABIhXAzQhYAyh8AAQh7AAhYgzg");
	this.shape.setTransform(30,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,60,34.7), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjTB6QhXgzgBhHQgBhHBYgzQBYgyB8AAQB7AABYAzQBZAzAABGQABBIhZAzQhXAyh8AAQh7AAhZgzg");
	this.shape.setTransform(30,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,60,34.7), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjBBwQhQguAAhBQAAhBBRguQBQgvBxAAQBxAABQAuQBQAuAABBQgBBBhQAuQhRAvhwAAQhxAAhQgug");
	this.shape.setTransform(27.4,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0.1,0,54.8,31.7), null);


(lib.Image_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Image_5, null, null);


(lib.Image_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Image_15, null, null);


(lib.Image_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Image_13, null, null);


(lib.Image_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Image_11, null, null);


(lib.Image_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Image_9, null, null);


(lib.Image_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Image_7, null, null);


(lib.Image_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Image_5_1, null, null);


(lib.Image_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Image_3, null, null);


(lib.Image_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Image_1, null, null);


(lib.Image = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Image, null, null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("APJX+QjXgBivhEIgcgLQg0gWgjgWIn9kmIABAAIjEhxQAQApgUApQgVApg1AfQhVAxh3AAQh4AAhUgwQhUgxABhFQAAhFBVgxQA1gfBIgMQBGgLBHAJMgkTgVTIg1AfQgnAWgzACQg0ACgigTImjjyQgfgSAAgaQAAghAsgZITarMQAngXA0gCQA0gCAiAUIGiDxQAfASAAAbQAAAggrAZIqmGHMAyiAdgIgBAAIAQAKIAEgDISWqzIo1lGQgsgZAAggQAAgaAfgSIGjjxQAigUA0ACQAzACAnAXITbLLQArAZAAAhQAAAagfASImjDyQgiATgzgCQg0gCgngWIikhfIyWKzQglAWgzAWIgcALQivBEjXABg");
	this.shape.setTransform(346.1,153.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,692.2,306.8), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("APpWqImkjyQgegSAAgaQAAghAsgZIDBhvIltjTQgSAyg/AkQhXAzh9AAQh8AAhXgzQhYgzAAhIQgBhIBYgyQA/glBVgKI7+wIIhvBAQgnAXg0ACQg0ACgigTImjjyQgegTgBgZQAAgQALgPQAMgPAVgMITbrMQAngXAzgCQA0gCAhATIGjDyQAfASAAAbQAAAggrAZIpqFkMAnQAWpIIYk1QAngWA0gCQAzgDAiAUIGjDyQAfASgBAaQABAhgsAZIzaLMQgnAWg0ADIgKAAQgtAAgegSg");
	this.shape.setTransform(246.3,146.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,492.5,293.6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(304.4,-10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({x:252.7,y:22},14).wait(1));

	// Layer_6
	this.instance_1 = new lib.Tween10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-103.9,-25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-282.5,y:-135},40).to({_off:true},1).wait(79));

	// Layer_5
	this.instance_2 = new lib.Tween8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(76.9,82.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:71.7,y:81.6},1).to({x:-287,y:-138.3},79).to({_off:true},1).wait(39));

	// Layer_2
	this.instance_3 = new lib.Tween9("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(249,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:160.4,y:79.2},24).to({x:115.7,y:89.4},8).to({x:74.1,y:80.2},8).to({x:-284.6,y:-139.7},79).wait(1));

	// Layer_3
	this.instance_4 = new lib.Tween10("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(300.5,-9.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({x:156.4,y:79.9},39).to({x:111.8,y:90.1},8).to({x:70.2,y:80.9},8).to({x:-99.5,y:-23},38).wait(1));

	// Layer_4
	this.instance_5 = new lib.Tween8("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(302,-8.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(65).to({_off:false},0).to({x:158,y:80.6},39).to({x:113.3,y:90.8},8,cjs.Ease.none).to({x:76.9,y:82.8},7,cjs.Ease.none).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-50.5,412.6,159.3);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(119.1,66.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-125.6,y:-69.6},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.4,-67.7,429,268.8);


(lib.slide3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkHCWQzgrXgMgEQAIAAD+iVQD/iWAIAEUAnSAWlAAIAALQAFAFkPCPQkPCQADAGIAAAAQgHAAzerYgA3zpFIAAAAIAAAAg");
	mask.setTransform(3,2.3);

	// Layer_3
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(42.3,25.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-19.4,y:-10.5},29,cjs.Ease.none).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.5,-79.7,296.9,169.8);


(lib.slide2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AUMQSUgwigb6gAEAAAIEIiUQEJiVgDAAQAEAAYTN+IYQN6QgEAAkECVQkDCWgEAAIAAAAgAcbLnIAAAAIAAAAIAAAAg");
	mask.setTransform(-0.4,-0.1);

	// Layer_3
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(63.6,36.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.5,y:0},29,cjs.Ease.none).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.6,-104.3,362.2,208.4);


(lib.slide1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArsCPIgCgCIPko/IH5EoIvYI+g");
	mask.setTransform(0.8,-0.6);

	// Layer_3
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(35.8,-20.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-25.2,y:14.8},29,cjs.Ease.none).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.3,-44.2,150.2,87.1);


// stage content:
(lib.home0712 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmoHAIlgjLQgagPAAgWQAAgbAlgWIQSpYQAhgTArgCQAsgCAcARIFgDLQAaAPAAAWQAAAcglAUIwSJZQghATgrACIgIAAQgmAAgagPg");
	this.shape.setTransform(941,462.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEE2E6").s().p("ABUEoIlejMQgbgPAAgWIAAguIAtgHIIdk3IiZHyIAAB5QghgBgXgNg");
	this.shape_1.setTransform(890.1,482.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EFF1F3").s().p("AmoHAIlgjLQgagPAAgWQAAgcAlgUIQSpZQAhgTArgCQAsgBAcAQIFgDLQAaAPAAAWQAAAbglAWIwSJYQghATgrACIgJAAQgmAAgZgPg");
	this.shape_2.setTransform(941,467);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0C7CF").s().p("AsiC5IMii5IMjjmIAAAuIsjC4IsiDng");
	this.shape_3.setTransform(941,464.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0C7CF").s().p("AiYJcIAA1oIExCxIAAVog");
	this.shape_4.setTransform(884,551.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DEE2E6").s().p("ApKkMISVqlIAAS+IyVKlg");
	this.shape_5.setTransform(958,535.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003D87").s().p("AgggeQAjAVAeAFIgCAjg");
	this.shape_6.setTransform(790.1,503.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003D87").s().p("AhIAWQg2gagdggQgCgIAAgPQAcAkA8AiQBXAzBHgIQAegDAZgOQAIgEAFgFQgGAFgHAFQgZAPgfAFQgOACgOAAQg8AAhIgmg");
	this.shape_7.setTransform(795.8,495.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A569F").s().p("AgTANQgIgEgBgHQAAgGAIgFQAQgLASAGIAFACQAJAFAAAGQABAGgIAGIgHADQgIADgHAAQgJAAgJgEg");
	this.shape_8.setTransform(807.4,569.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A569F").s().p("AhOliICNgLIAQLWIg7AFg");
	this.shape_9.setTransform(802.4,532.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F7386").s().p("AgoAvQgSgCgLgKQgLgKABgSQABgRAOgIIBKgXQAOgIASACQASACALALQALAKgCANQgCALgPAIIhHAiQgLAGgNAAIgIgBg");
	this.shape_10.setTransform(811.5,570.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A569F").s().p("AgTANQgIgEgBgHQAAgGAIgGQAPgJATAFIAFACQAJAEAAAHQABAGgIAFIgHAEQgIADgHAAQgJAAgJgEg");
	this.shape_11.setTransform(788.2,558.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A569F").s().p("AhGlbICNgCIgeK6Ig6ABg");
	this.shape_12.setTransform(787,523.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F7386").s().p("AgoAvQgSgCgLgKQgLgLABgRQABgRAOgHIBKgYQAOgIASACQARADAMAKQALAKgCANQgDALgOAIIhHAiQgLAGgNAAIgIgBg");
	this.shape_13.setTransform(792.3,559.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#234885").s().p("ABBDKIiZhiQgLgGgEgMQgFgLADgMIABgDIA9jqQAFgRAPgIQAPgJAQAEQARAFAIAPQAJAPgEARIg2DRIByBmQAIAHABALQAAAMgHAIQgHAHgKACIgEAAQgHAAgHgEg");
	this.shape_14.setTransform(804.8,469.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A569F").s().p("Ag2gXQgBgFAEgDQAGgGATAIQAcAOA1Axg");
	this.shape_15.setTransform(796.1,439.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A569F").s().p("AisDBIAnh9QAGgXgCgYIgXjwQgBgQADgKQAJghAggOQAhgOAgASICPBTQAXAOAPAYQAPAYABAbIAUGfg");
	this.shape_16.setTransform(795.7,465.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A569F").s().p("AA4BkQg4gGhCgmQhGgogZgpQgagrAigUQAigTBKAOQBJAPBGAoQBCAmAIAgQAIAdglAWQggARgoAAIgPAAg");
	this.shape_17.setTransform(795.7,491.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A569F").s().p("AAjBMQhKgQgogcQgogcgHgvQgBgIAAgOIACgVID9BNIgPA2IgBAEIgKAmQgdgDgmgIg");
	this.shape_18.setTransform(793.2,496.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#997A6D").s().p("Ag1BWIgLhCQgCgcAVgIQgDgEABgIQABgOAQgOQAOgMAXgIQAegKAdAAQgEACgIABIgKABQghAHgWAZQgRAUAAASIAAAEIgEADQgWALgDAeQgCARAHAig");
	this.shape_19.setTransform(793.5,417.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#805A4A").s().p("Ag3CCQgogVgLhIQgMg8AAgFQgBgeAVgIQgDgEAAgIQABgOARgOQAbgXAxgGQA9gHArAnQAyAsg/ADIAHASQAJAZgIANQgLAPAAAHIAAALIgMAEIAAgSQgFABgFAEQgLAJAAAVQAAANAJAFQAEACAEAAQgQAWgYASQgdAXgZAAQgOAAgMgHg");
	this.shape_20.setTransform(798.9,422.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFC8AB").s().p("AAyCHIgggGQgugHgkgjQgrgogDg3QgDg5AcgiQAaggArgDQAtgCAlAdQApAhADA3QADAvgKAtQgKAwgRAKQgHAEgMAAIgHAAg");
	this.shape_21.setTransform(798.9,423.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFC8AB").s().p("AgKBKQgRgGgOgNQgMgJACgMIAUhwIBUAkIgNBqQAAAFgFADIgNAFQgFACgHAAQgJAAgLgFg");
	this.shape_22.setTransform(796.1,434.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFC8AB").s().p("AAHASIgZgVQgDgCAAgEQgBgEADgDQACgDAEAAQAEgBADADIAZAUQADADAAAEQAAAEgCADQgCADgEAAQgEAAgDgCg");
	this.shape_23.setTransform(815.5,491.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFC8AB").s().p("AAJARIgbgRQgEgCAAgEQgBgEACgDQADgEADgBQAEAAAEACIAaARQADADABADQABAEgCAEQgDACgDABIgCABQgDAAgCgCg");
	this.shape_24.setTransform(818,491);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFC8AB").s().p("AAOANIgfgIQgJgCACgIQACgJAJACIAgAIQADABACADQACADgBAEQAAAEgEABIgFACIgCgBg");
	this.shape_25.setTransform(818.8,488.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFC8AB").s().p("AgTAOQgDgCgBgDQgCgEACgDQACgDADgBIAfgLQADgCAEACQAEACABADQACAIgIAEIgeALIgEAAIgEgBg");
	this.shape_26.setTransform(816.2,485.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFC8AB").s().p("AgHAgQgOgDgGgMQgHgMADgMQADgOAMgHQAMgHAMAEQAOADAHAMQAHAMgEAMQgDAOgMAHQgIAEgJAAIgHgBg");
	this.shape_27.setTransform(814.9,488.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F0F0F0").s().p("AA0DKQgTAAgNgOQhjhegMgSIAAAAQgKgRAFgUIA/jQQAGgSAQgJQAQgIASAFQASAFAJARQAJAQgGASIgwCgIBSBtQANAOgBATQgBATgOAMQgNAMgRAAIgCAAg");
	this.shape_28.setTransform(379.8,730);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#714635").s().p("AgPARQgDgCAAgDQAAgEACgDIAUgVQADgCADgBQAEAAACADQADACAAADQAAAFgCACIgUAVQgCACgEABQgEAAgCgDg");
	this.shape_29.setTransform(389.2,745.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#714635").s().p("AAEARIgUgVQgCgDAAgDQAAgEACgCQADgDAEAAQADAAADADIAUAVQACACAAAEQAAAEgCACQgDADgDAAQgEAAgDgDg");
	this.shape_30.setTransform(388.3,752.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#714635").s().p("AAHAQIgYgRQgDgCAAgDQgBgEACgDQACgDAEAAQADgBADACIAYARQADACABADQABAEgDADQgCADgDAAIgCAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBAAg");
	this.shape_31.setTransform(391.1,751.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#714635").s().p("AAKAPIgagOQgIgEAEgHQACgDADgBQAEgBADABIAaAOQADABABAEQABADgCADQgBAEgEABIgCAAIgEgBg");
	this.shape_32.setTransform(391.4,748.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#714635").s().p("AgIAmQgQgEgIgNQgJgOAEgPQADgQAOgIQAOgJAOAEQAQAEAJANQAJAOgEAPQgEAQgOAIQgJAGgKAAIgJgBg");
	this.shape_33.setTransform(387.4,748.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag4gYQgBgFAEgDQAHgHATAJQAeAPA3Azg");
	this.shape_34.setTransform(371,700.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#54200C").s().p("Ag8CCQgkgUgKhEQgIgmgBgOQgDgZAJgLQgKgmAxgPQAYgHAbABIgRgSQAVgOAiATQASAJANAMIgQgmQAqAEAbAfQAdAggfAOQABALgDAQQgHAfgXAbIgMAOIAAgRQgEAAgFAEQgKAIAAAUQgBAMAIAFQAEACAEAAQgPAUgWAQQgcAVgXAAQgNAAgMgGg");
	this.shape_35.setTransform(372.1,681.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#805A4A").s().p("AANB6QgqgIgighQgngmgCgyQgCg2AaggQAYgdApgCQAxgCAcANQAoATACAyQAGCVgcAPQgIAFgXAAQgUAAgSgDg");
	this.shape_36.setTransform(371.6,683);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#714635").s().p("AAWAiIhBggIAKgjIBOAFIgUA+g");
	this.shape_37.setTransform(370.2,697.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#805A4A").s().p("AgwgNIAOghIBKACIAKBbg");
	this.shape_38.setTransform(370.7,698.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhFEGQg1gegcgjQgaggACgaIABgCQABgHAEgHIATg7QAHgXgDgZIgNjxQgCgQADgLQAKgjAigOQAigPAhATICVBXQAZAOAPAZQAPAZACAdIAPFvIgBAAQAEAUgjAUQggASgnAAQg+AAhPgug");
	this.shape_39.setTransform(371.2,727.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#81C3FD").s().p("AAkBPQhNgQgqgdQgqgegHgxIABgsIEIBQIgbBjQgfgCgngJg");
	this.shape_40.setTransform(368.7,753.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2C98EA").s().p("AgxgzIBiApIgLA+g");
	this.shape_41.setTransform(365.3,762.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#81C3FD").s().p("AgGGCQgHgFgBgHIgBAAIg8r5ICXgDIgfL8QAAAEgDADIgDADIgDACQgJAFgNAAQgMAAgIgFg");
	this.shape_42.setTransform(378.8,790.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#81C3FD").s().p("Ag8FvQgKgFABgIIAAAAIgDrVICRAIIhSLNIAAACIAAACQgBAFgHAEQgDACgFABQgIACgHAAQgKAAgKgFg");
	this.shape_43.setTransform(364.6,780.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1152A2").s().p("AgtApQgVgIABgOQAAgNAHgPIAHgNQAVgJAZgHQAMgHATABIAGAAIAOAEQAPAFAEALQAEAKgKAJIgsAmQgKAJgRADIgJAAQgNAAgLgEg");
	this.shape_44.setTransform(363,817.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1152A2").s().p("Ag1AiQgRgEgHgJQgEgFABgGQAAgOAGgMIAGgJIBGgJQBHgEAIAZIAAABIAAABIABAEQgBAHgHAGQgHAGgMADIhKATQgJACgJAAQgIAAgIgCg");
	this.shape_45.setTransform(384.2,829.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FD7170").s().p("AglCgQgRg0ALiBQAMiUAygLQAMgDAJAJQALAKgDAOQgIAkAABmQABBmgEAVQgJArgaAUQgKAIgIAAQgNAAgIgWg");
	this.shape_46.setTransform(216.3,677.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgUAVQgJgJAAgMQAAgMAJgIQAJgJALAAQAMAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_47.setTransform(219.8,660.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FD7170").s().p("AgcB+QgsgEgbgoQgYglAAgwQABgyAagiQAdglAzgBQBNgCAlAZQAcATgCAdIgEAhQgMAlgrAUIAAgXIgTANQgOARATAYIgVAgQgZAbgbAAIgGAAg");
	this.shape_48.setTransform(228.1,653.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5D78B1").s().p("AhWCjQgLgJgEgOIgBgDIg+j8QgFgSAKgQQAJgQASgEQATgFAPAKQAQAKAFASIA3DeICkAZQAMACAHAJQAIAKgCAMQgCAKgIAIQgIAGgLABIjHACQgOAAgLgIg");
	this.shape_49.setTransform(246.4,690.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFC8AB").s().p("AAAASIgOgaQgCgDABgEQABgDADgCQAIgDADAGIAPAaQACADgBAEQgBADgDACIgFABQgEAAgDgEg");
	this.shape_50.setTransform(260.6,701.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFC8AB").s().p("AgVALQgBgEABgDQABgDADgBIAbgOQADgCADACQAEABABADQAEAIgIADIgaANIgFACQgEAAgDgFg");
	this.shape_51.setTransform(266.9,703.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFC8AB").s().p("AgMASQgEAAgCgDQgFgHAGgFIAXgSQAIgFAFAGQAFAHgHAGIgWASQgDABgDAAIgBAAg");
	this.shape_52.setTransform(266.7,700.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFC8AB").s().p("AgQARQgDgCABgEQgBgEADgCIAVgVQAGgGAGAGQADACgBAEQABAEgDACIgUAVQgDADgEAAQgDAAgDgDg");
	this.shape_53.setTransform(264.2,699.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFC8AB").s().p("AgGAmIgXgPQgOgJAAgLQgBgLANgKQAVgQAIgCQAKgEANAIQAPAJAGARQAGARgMAJQgZASgNAAIgEAAg");
	this.shape_54.setTransform(262.8,703.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2A569F").s().p("AAACFQgPgJgKgaQgXg0gDhhIABhYIAjBwIA6AoIAJB9QgMACgKAAQgSAAgMgHg");
	this.shape_55.setTransform(237.1,696.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5D78B1").s().p("AAuEdQgwgBg+gkQg4ghgbgiQgbgiAKgYIABgBIAbhLQADgTgEgTIgRhoQgGggACgvQAEhOAhgXQARgMAjAEIA0AIQARABAmAXQAkAWANAPQAIAIAJAQIARAfIAiA9QASAXgHAYQgFARgYAcIgDADIAQDXQADAJgCAIQgDATgaAQQgmAVglAAIgBAAg");
	this.shape_56.setTransform(227.8,694.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#80909F").s().p("AAlBTQhRgSgrgeQgrgegIg0IABguIEUBTIgdBoQgggDgpgIg");
	this.shape_57.setTransform(226,719.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#80909F").s().p("AgUAMQgIgFAAgHQAAgGAJgFQAHgEAKgBQAJAAAJADIAFACQAIAFAAAGQAAAHgIAFIgHADQgIACgGAAQgKAAgKgFg");
	this.shape_58.setTransform(235.4,795.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#80909F").s().p("AgDARQgKgBgHgEQgIgFAAgHQAAgGAIgFQAIgEAKgBQAJAAAJADIAFACQAIAFAAAGQAAAHgIAFIgIADQgGACgGAAIgEAAg");
	this.shape_59.setTransform(218,784.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5F7386").s().p("AgogoIBRAmIgFArg");
	this.shape_60.setTransform(223.3,727.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#80909F").s().p("AhGF4IgBryICPAIIhTLtg");
	this.shape_61.setTransform(222.2,747.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#80909F").s().p("AhHmJICPgCIgcMWIg7ABg");
	this.shape_62.setTransform(234.1,755.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2C98EA").s().p("AgrAoQgVgHABgPQAAgNAHgOIAHgMIANgGIAfgKQAMgHASABIAGABQAIABAFACQAPAFAEAKQAEAKgKAJIgrAlQgJAJgQACIgJABQgNAAgKgEg");
	this.shape_63.setTransform(220.3,786.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2C98EA").s().p("AgzAhQgRgEgHgJQgDgGAAgEIAAAAQAAgOAHgMIAFgIIBEgJQBFgEAHAZIAAAAIABACIAAAEQAAAGgHAGQgHAGgMADIhHASQgJACgJAAQgHAAgIgCg");
	this.shape_64.setTransform(239.2,797.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFD4BE").s().p("AgpBzQAfgEAPgSQAWgYADhCIgBg8IgSg7IATAKQAMAUAAAeQgGCbgdAPQgGADgNAAQgMAAgRgCg");
	this.shape_65.setTransform(236,656.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFC8AB").s().p("AAbCDIgXgEQgrgMgigkQgmgqACg1QABg4AeggQAbgdArABQBSADAZAnQAMAUAAAeQgGCbgdAPQgHADgOAAQgLAAgRgCg");
	this.shape_66.setTransform(229.1,654.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFC8AB").s().p("AANAmIg9guIAAgeIBhARIghA8g");
	this.shape_67.setTransform(226.4,667.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFC8AB").s().p("AgwgaIAAgeIBhARIgIBgg");
	this.shape_68.setTransform(227.1,669.9);

	this.instance = new lib.Path_13();
	this.instance.parent = this;
	this.instance.setTransform(230.9,792.9,1,1,0,0,0,28.8,16.6);
	this.instance.alpha = 0.039;

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgKCRIiXhXQgNgHgEgMQgEgMAHgIICJihQAIgIAOgBQAPgBAMAHICXBYQANAHAEAMQAEALgHAJIiJChQgIAIgOABIgDAAQgNAAgLgHg");
	this.shape_69.setTransform(267.2,704.7);

	this.instance_1 = new lib.Image_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(267.3,704.8,1,1,0,0,0,28.8,25.9);
	this.instance_1.alpha = 0.809;

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FD7170").s().p("AAAAdQgJgGgHgNQgIgMAAgLQAAgMAIgEQAHgFAJAGQAKAGAIANQAHAMAAALQAAAMgHAEQgDACgEAAQgFAAgGgDg");
	this.shape_70.setTransform(287.6,686.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAAAdQgJgHgIgMQgHgMAAgMQAAgMAHgEQAIgDAJAFQAKAGAIANQAHAMAAALQAAAMgHAEQgDACgEAAQgFAAgGgDg");
	this.shape_71.setTransform(280.5,682.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#53CEAE").s().p("AAAAdQgJgHgHgMQgIgLAAgMQAAgMAIgFQAHgDAJAFQALAHAHAMQAHALAAAMQAAAMgHAFQgDABgDAAQgGAAgGgDg");
	this.shape_72.setTransform(273.3,678.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#AEB7C1").s().p("ABVCfIAAi8QAAgWgUgMIichbQgEgCACgFQADgEAEADICcBbQAMAGAGALQAHAMAAANIAADBg");
	this.shape_73.setTransform(250.1,762.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#FD9799","#FD8083","#FD7170"],[0,0.761,1],0,-8,0,8).s().p("AguBFQgUgMABgPIAAg4QAAgbATgSQATgUAbAAQAbAAATAUQAUASAAAbIAAA4QgBARgTAJQgTALgbABQgbAAgTgLg");
	this.shape_74.setTransform(277.2,654.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#DEE2E6").s().p("AhBApQgcgRgBgYQAAgWAdgSQAcgQAmAAQAmAAAbAQQAdARgBAXQAAAYgcARQgdAQglAAQglAAgcgQgAg7gfQgZANAAASQABASAXAOQAZAPAjAAQAjgBAZgOQAZgOAAgSQAAgRgYgOQgZgPgjAAQgjABgZAOg");
	this.shape_75.setTransform(277.3,659.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#AEB7C1").s().p("ABZDMIi2hpQgQgKgLgVQgMgVAAgWIAAjEQAAgZAPgJQANgHAQAJIC2BqQAQAKAMAVQALAWAAAVIAADEQAAAZgPAIQgFADgHAAQgJAAgIgFgAhwjEQgKAGAAATIAADEQAAASAKAUQAKATAOAIIC2BqQAMAHAHgFQAKgGAAgTIAAjEQAAgTgKgTQgKgTgOgIIi2hqQgHgEgFAAQgEAAgDACg");
	this.shape_76.setTransform(228.5,740.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#80909F").s().p("AgEmsIAJgFIAANeIgJAFg");
	this.shape_77.setTransform(305,718.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#AEB7C1").s().p("Aj1A3QAAgYAQgSIDxkaQAPgSAAgYIAAhuQAAgNAIgNQAIgOALgGIClhgQALgGAIAEQAIAFAAANIAAM/InrEbg");
	this.shape_78.setTransform(291.9,727);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DEE2E6").s().p("ABpBCIjWh7QgEgCACgEQADgFAEADIDWB7QAEACgCAEQgCADgDAAg");
	this.shape_79.setTransform(294.3,669.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AmBhlQAIgRANgHIClhgQALgGAIAEII2FHIgKAaIjDBfg");
	this.shape_80.setTransform(277.1,660);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#DEE2E6").s().p("ACMFEIo2lGQAEgKAGgHIDxkbQAJgJADgMII3FGIAXFBg");
	this.shape_81.setTransform(253.9,697.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C0C7CF").s().p("AoMGUIAAn/QAAgOAFgMQAEgKAGgHIDxkbQAIgIAEgNQAEgKAAgLIAAhuQAAgLAGgLQAIgQANgIIClhfQALgGAIAEII2FHIgKAaIjCGBIkXLRg");
	this.shape_82.setTransform(263.2,710.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.instance_1},{t:this.shape_69},{t:this.instance},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(120));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6NlaIAAncIJUlYMArHAX0Ir3Mpg");
	mask.setTransform(790.7,417.6);

	// Layer_3
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(782.7,427.1);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AROXKIgEACIAAgEMg6rghnIAAndIJUlXMAxCAcGIPYolIJVFYIAAHcI4BN9IAAAVg");
	mask_1.setTransform(429.7,666.1);

	// Layer_5
	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(421.2,668.4);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

	// conveyors
	this.instance_4 = new lib.slide3("synched",9);
	this.instance_4.parent = this;
	this.instance_4.setTransform(782.8,436.7);

	this.instance_5 = new lib.slide1("synched",4);
	this.instance_5.parent = this;
	this.instance_5.setTransform(611.8,735);

	this.instance_6 = new lib.slide2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(355.2,673.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(120));

	// flash0.ai
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AADAjQgMgIgKgQQgJgOAAgPQAAgUAOABQAGAAAHAEQALAHAKAQQAJAPAAAPQAAASgOAAQgFAAgHgDg");
	this.shape_83.setTransform(664.2,405.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AADAjQgMgIgKgPQgJgPAAgPQAAgUAOAAQAGABAHAEQALAHAKAQQAJAPAAAPQAAASgOAAQgFABgHgEg");
	this.shape_84.setTransform(695.2,423.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AACAiQgMgHgJgPQgJgPAAgQQAAgTAOAAQAFAAAHAFQAMAHAKAQQAJAPAAAPQAAASgOABQgGAAgHgFg");
	this.shape_85.setTransform(726.1,441.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AACAiQgMgHgJgPQgJgPAAgQQAAgSAOgBQAFAAAHAFQAMAHAKAQQAJAPAAAPQAAASgOABQgGAAgHgFg");
	this.shape_86.setTransform(757.1,459.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AACAiQgLgHgKgQQgJgPAAgPQAAgSAOgBQAFAAAHAFQAMAHAKAQQAJAOAAAQQAAATgOAAQgGAAgHgFg");
	this.shape_87.setTransform(788,477.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AADAiQgNgHgJgQQgJgPAAgPQAAgSAOAAQAGgBAGAEQAMAIAKAQQAJAOAAAPQAAAUgOAAQgGgBgGgEg");
	this.shape_88.setTransform(819,495.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AADAiQgMgHgKgQQgJgPAAgPQAAgSAOAAQAGAAAHADQAMAIAJAQQAJAPAAAOQAAAUgOgBQgFAAgHgEg");
	this.shape_89.setTransform(849.9,513.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AADAjQgMgIgKgQQgJgPAAgOQAAgTAOAAQAHAAAGAEQAMAHAJAQQAJAPAAAPQAAASgOAAQgGAAgGgDg");
	this.shape_90.setTransform(880.8,530.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AADAiQgMgHgKgQQgJgPAAgPQAAgSAOAAQAGAAAGADQAMAIAKAQQAJAPAAAOQAAAUgOgBQgGAAgGgEg");
	this.shape_91.setTransform(637.7,390.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#80909F").s().p("APoJ2I/1yaIgBhXIf2SYQAQAKAMATQALAUAAASQAAASgLAHQgFADgGAAQgHAAgKgGg");
	this.shape_92.setTransform(780.8,472.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C0C7CF").s().p("AMJIdIy1q3ImXmKIZMOiQAYAOASAiQARAhAAAhQAAAkgUAMQgHAFgIAAQgMAAgMgIg");
	this.shape_93.setTransform(804,485.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#DEE2E6").s().p("ACvHiIFyjcIvNoyImXmKIZMOjQAZAOARAhQARAhAAAhQAAAlgUALIoBEpg");
	this.shape_94.setTransform(855.3,470.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#DEE2E6").s().p("AzYmtIIkkUIeNRbIoBEog");
	this.shape_95.setTransform(804.2,449.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C0C7CF").s().p("AzYmtIIkkUIeNRbIoBEog");
	this.shape_96.setTransform(804.2,453.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C0C7CF").s().p("AzYmtIIkkUIeNRbIoBEog");
	this.shape_97.setTransform(804.2,465.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#AEB7C1").s().p("ALbLDI/Jx+IIjkVIerRtQAPAJAAASQAAASgPAJImhDwQgXAOgbAAQgaAAgYgOg");
	this.shape_98.setTransform(806.4,470.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#DEE2E6").s().p("ALbLDI/Jx+IIjkVIeQReIAqgMIAAA2QAAASgPAJImhDwQgXAOgbAAQgaAAgYgOg");
	this.shape_99.setTransform(806.4,475.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAEgCIH7klQAFgCACAEQADAFgFACIn7EkIgCABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_100.setTransform(709.5,394.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C0C7CF").s().p("AkBCVQgCgFAEgBIH7klQAEgCACAEQADAFgFACIn6EkIgDABQgDAAgBgDg");
	this.shape_101.setTransform(725.4,403.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C0C7CF").s().p("AkBCVQgDgEAFgCIH6klQAFgCACAEQACAFgEACIn6EkIgDABQgDAAgBgDg");
	this.shape_102.setTransform(741.3,412.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C0C7CF").s().p("AkBCVQgCgEADgCIH8klQAEgCACAEQADAFgFACIn7EkIgCABQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_103.setTransform(757.3,422);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#DEE2E6").s().p("ArZhzIIBknIOyIhIojEUg");
	this.shape_104.setTransform(713.8,395.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C0C7CF").s().p("ArZhzIIBkoIOyIiIojEVg");
	this.shape_105.setTransform(713.8,399.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#80909F").s().p("An4j/QgQgJgLgTQgMgUAAgSQAAgSAMgHQALgGAQAJIQXJdIAABYg");
	this.shape_106.setTransform(688.2,420.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#DEE2E6").s().p("An4CDQgWgMgRAJIH/kmQARgKAWANIIZE1InjgCIg2iSQgagPgSglImODhg");
	this.shape_107.setTransform(687.3,368.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C0C7CF").s().p("An2jfQgZgOgSgiQgSgiAAghQAAglAVgMQARgJAXAMIQqJnIAAChg");
	this.shape_108.setTransform(687.2,420.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#C0C7CF").s().p("ArZhyIIBkoIOyIhIojEUg");
	this.shape_109.setTransform(713.8,411.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#AEB7C1").s().p("AsFh8QgQgIAAgSQAAgSAQgJIGgjwQAYgOAbAAQAbAAAWAOIQXJbIpZD2g");
	this.shape_110.setTransform(713.2,412.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#DEE2E6").s().p("AsHh7QgQgJAAgSIAAg3IAZAXIGXjrQAYgOAbAAQAbAAAWAOIQaJeIpcDzg");
	this.shape_111.setTransform(713.4,418.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#AEB7C1").s().p("AgvFDQgUgMAAgQIAAp1ICHABIAAJ1QAAAQgUALQgUAMgcAAQgbAAgUgMg");
	this.shape_112.setTransform(857.3,524.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAAAnQgbAAgUgMQgUgLAAgQQAAgQAUgLQAUgLAbAAQAcAAATALQAVAMAAAPQAAAQgUAMQgTALgbAAIgCAAg");
	this.shape_113.setTransform(857.3,491.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C0C7CF").s().p("AAAByQhRAAg5ghQg7giAAgvQAAguA5giQA7ghBRAAQBRAAA7AiQA6AhAAAvQAAAvg5AhQg6AhhQAAIgDAAg");
	this.shape_114.setTransform(857.3,555.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#AEB7C1").s().p("AAAFPQgbAAgUgMQgUgLAAgQIAAp2ICHABIAAJ1QAAARgUALQgTALgaAAIgDAAg");
	this.shape_115.setTransform(678,421.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgvAcQgUgLAAgRQAAgPAUgMQAUgLAbAAQAcAAAUAMQAUALAAAPQAAARgUALQgUALgcAAQgbAAgUgLg");
	this.shape_116.setTransform(678,387.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C0C7CF").s().p("AiKBQQg6ghgBgvQAAgvA6ghQA5giBSABQBSAAA6AhQA6AiAAAuQAAAvg6AiQg6AhhRAAQhRAAg6gig");
	this.shape_117.setTransform(678,451.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C0C7CF").s().p("AgEDTIAAmlQAAgGAEAAQAFAAAAAGIAAGlQAAAGgFAAQgEAAAAgGg");
	this.shape_118.setTransform(536.7,769.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgIAhQgOgDgHgNQgHgMAEgNQADgOANgHQAMgHANAEQAOAEAHAMQAHAMgEANQgEAOgMAHQgIAEgJAAIgIgBg");
	this.shape_119.setTransform(536.5,798.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AADAjQgMgIgKgQQgJgPAAgOQAAgUAOAAQAGABAHAEQAMAHAJAQQAJAPAAAPQAAASgOAAQgFAAgHgDg");
	this.shape_120.setTransform(261.6,656.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AADAiQgMgHgKgQQgJgPAAgPQAAgSAOAAQAGgBAHAEQAMAIAJAQQAJAOAAAPQAAAUgOAAQgFgBgHgEg");
	this.shape_121.setTransform(488.5,787.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AADAiQgMgHgKgQQgJgPAAgPQAAgSAOAAQAGAAAGAEQAMAHAKAQQAJAPAAAPQAAASgOAAQgGAAgGgEg");
	this.shape_122.setTransform(460.2,771.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AACAiQgLgHgKgQQgJgPAAgPQAAgSAOgBQAFAAAHAFQAMAHAKAQQAJAOAAAQQAAATgOAAQgGgBgHgEg");
	this.shape_123.setTransform(431.8,754.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AACAiQgMgHgIgQQgKgPAAgPQAAgSAOAAQAGAAAHAEQAMAHAIAQQAKAPAAAPQAAASgOAAQgHAAgGgEg");
	this.shape_124.setTransform(403.5,738.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AADAiQgMgHgKgQQgJgPAAgPQAAgTAOAAQAGAAAHAFQAMAHAJAQQAJAPAAAPQAAASgOABQgFAAgHgFg");
	this.shape_125.setTransform(375.1,722.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AADAiQgMgHgKgQQgJgPAAgPQAAgSAOAAQAGAAAGAEQAMAHAKAQQAJAPAAAOQAAATgOAAQgGAAgGgEg");
	this.shape_126.setTransform(346.7,705.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AACAiQgLgHgKgQQgJgPAAgPQAAgTAOAAQAFAAAHAFQAMAHAKAQQAJAPAAAPQAAASgOABQgGAAgHgFg");
	this.shape_127.setTransform(318.4,689.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AADAiQgNgHgJgQQgJgPAAgPQAAgSAOAAQAGAAAGADQANAIAIAQQAKAPAAAOQAAATgOAAQgGAAgGgEg");
	this.shape_128.setTransform(290,673);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AADAjQgMgIgKgQQgJgPAAgOQAAgUAOAAQAGABAHAEQAMAHAJAQQAJAPAAAPQAAASgOAAQgFAAgHgDg");
	this.shape_129.setTransform(261.6,656.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AADAiQgMgHgKgQQgJgPAAgPQAAgSAOAAQAGAAAGADQAMAIAKAQQAJAPAAAOQAAATgOAAQgFAAgHgEg");
	this.shape_130.setTransform(233.3,640.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AACAjQgLgIgKgQQgJgPAAgOQAAgUAOABQAFAAAHADQAMAIAKAQQAJAOAAAQQAAASgOAAQgGAAgHgDg");
	this.shape_131.setTransform(204.9,623.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AADAiQgMgHgKgQQgJgPAAgPQAAgSAOAAQAGAAAHADQALAIAKAQQAJAPAAAOQAAATgOAAQgFAAgHgEg");
	this.shape_132.setTransform(176.5,607.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgYAiQgEgGAAgJQAAgPAJgOQAJgQAMgIQAIgEAFAAQAOABAAASQAAAPgJAPQgKAQgLAHQgIAEgFABQgHgBgDgEg");
	this.shape_133.setTransform(589.6,785);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgcAUQAAgPAJgPQAJgQAMgHQAHgFAGAAQAOAAAAATQAAAPgJAPQgKAQgMAHQgHAFgFAAQgOgBAAgSg");
	this.shape_134.setTransform(621,766.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgcATQAAgOAJgPQAKgQAMgIQAHgDAFAAQAOgBAAAUQAAAPgJAOQgJAQgMAIQgHADgGAAQgOAAAAgTg");
	this.shape_135.setTransform(652.4,748.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgcATQAAgOAJgPQAKgQAMgIQAGgDAGAAQAOAAAAASQAAAPgJAPQgKAQgMAHQgGAEgGAAQgOAAAAgTg");
	this.shape_136.setTransform(683.9,730.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#C0C7CF").s().p("AgDgDQAEgDACAFQACADgEADg");
	this.shape_137.setTransform(589.8,777.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#DEE2E6").s().p("AuCE2IUErlIIBEoIsBG7QjVB8ktAAIgCAAQktAAjTh6g");
	this.shape_138.setTransform(575.4,747.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#DEE2E6").s().p("ArIBzIOQoOIIBEoIuQIPg");
	this.shape_139.setTransform(609.5,736.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#C0C7CF").s().p("AuCE2IUErlIIBEoIsBG7QjVB7ktABIgCAAQktAAjTh6g");
	this.shape_140.setTransform(575.4,750.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#C0C7CF").s().p("ArMB4IOYoTIIBEoIuQIPg");
	this.shape_141.setTransform(609.1,739.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#80909F").s().p("AhvAMIC5hrQARgJALAHQALAGAAASQAAASgLAUQgLATgRAJIi6Bsg");
	this.shape_142.setTransform(676.5,735.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#DEE2E6").s().p("Agtg1QgTAlgaAOIlwAzIFwjUQAXgMARAJIH9EmQgRgJgVANIhFAng");
	this.shape_143.setTransform(642.6,708.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#C0C7CF").s().p("AhugZICghdQAXgNAQAKQAWAMAAAlQgBAhgRAiQgSAhgZAOIiSBVg");
	this.shape_144.setTransform(679.7,734);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#80909F").s().p("AuCE2IUErlIIBEoIsBG7QjVB7ktABIgCAAQktAAjTh6g");
	this.shape_145.setTransform(575.4,759.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#80909F").s().p("ArQB9IOgoYIICEoIuQIPg");
	this.shape_146.setTransform(608.7,748.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#C0C7CF").s().p("AuCE2IUErlIIBEoIsBG7QjVB8ktAAIgCAAQktAAjTh6g");
	this.shape_147.setTransform(575.4,762.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#C0C7CF").s().p("ArQB9IOgoYIICEoIuQIPg");
	this.shape_148.setTransform(608.7,752);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#AEB7C1").s().p("AuCE2IUErlIIBEoIsBG7QjVB7ktABIgCAAQktAAjTh6g");
	this.shape_149.setTransform(575.4,766.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#AEB7C1").s().p("AryCSIPRo0QAXgNAbAAQAbAAAXANIGhDxQAPAJAAASQAAARgPAJIvDIsg");
	this.shape_150.setTransform(611.9,753.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#DEE2E6").s().p("Ar0CVIPVo2QAXgOAbAAQAbAAAXAOIGXDrIAZgXIAAA3QAAARgPAJIvCIsg");
	this.shape_151.setTransform(611.7,758.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#DEE2E6").s().p("AuCE2IUErlIIBEoIsBG7QjVB7ktABIgCAAQktAAjTh6g");
	this.shape_152.setTransform(575.4,771.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AACAiQgMgHgJgPQgJgQAAgPQAAgSAOgBQAFAAAHAFQAMAHAKAQQAJAPAAAPQAAASgOABQgGAAgHgFg");
	this.shape_153.setTransform(233.3,640.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C0C7CF").s().p("AgCgBQACgFAEADIgEAIQgEgDACgDg");
	this.shape_154.setTransform(483.6,777.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#DEE2E6").s().p("AGCGwQkuAAjVh8IsBm7IIBkoIUELlQjTB6ksAAIgCAAg");
	this.shape_155.setTransform(498.1,747.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#DEE2E6").s().p("A7xraIIBknMAviAbbIoAEpg");
	this.shape_156.setTransform(357.4,674.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#C0C7CF").s().p("AGCGwQkugBjVh7IsBm7IIBkoIUELlQjTB6ksAAIgCAAg");
	this.shape_157.setTransform(498.1,750.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#C0C7CF").s().p("A71raIIBknMAvqAbgIoJEkg");
	this.shape_158.setTransform(357.8,678.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#80909F").s().p("AhJgHQgRgJgLgTQgLgUAAgSQAAgSALgGQALgHARAJIC5BrIABBZg");
	this.shape_159.setTransform(184,612.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#DEE2E6").s().p("ArInlQgagOgSglImPDhIhEgnQgWgNgQAJIH+knQAQgJAXAMIFwDVIZGQ/g");
	this.shape_160.setTransform(298.1,634.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#C0C7CF").s().p("AgxAqQgZgOgSghQgRgiAAghQgBglAWgMQAQgKAXANICfBdIgNCYg");
	this.shape_161.setTransform(180.7,611);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#80909F").s().p("AGCGwQkugBjVh7IsBm7IIBkoIUELlQjTB6ksAAIgCAAg");
	this.shape_162.setTransform(498.1,759.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#80909F").s().p("A76raIIBkoMAvzAbmIoREfg");
	this.shape_163.setTransform(358.3,687.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#C0C7CF").s().p("AGCGwQkuAAjVh8IsBm7IIBkoIUELlQjTB6ksAAIgCAAg");
	this.shape_164.setTransform(498.1,762.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#C0C7CF").s().p("A76raIIBkoMAvzAbmIoREfg");
	this.shape_165.setTransform(358.3,690.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#AEB7C1").s().p("AGCGwQkugBjVh7IsBm7IIBkoIUELlQjTB6ksAAIgCAAg");
	this.shape_166.setTransform(498.1,766.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#AEB7C1").s().p("A8MrjQgPgJAAgRQAAgSAPgJIGhjxQAYgNAaAAQAbAAAXANMAwjAcCIoTEeg");
	this.shape_167.setTransform(355.1,691.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#DEE2E6").s().p("A8OrjQgPgJAAgRIAAg3IAZAXIGXjrQAXgOAbAAQAbAAAXAOMAwnAcEIoXEbg");
	this.shape_168.setTransform(355.3,697.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#DEE2E6").s().p("AGCGwQkugBjVh7IsBm7IIBkoIUELlQjTB6ksAAIgCAAg");
	this.shape_169.setTransform(498.1,771.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#AEB7C1").s().p("AAAFPQgbAAgUgMQgUgLAAgQIAAp2ICHABIAAJ1QAAARgUALQgTALgaAAIgDAAg");
	this.shape_170.setTransform(626.3,771.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAAAnQgbAAgUgMQgUgLAAgQQAAgPAUgMQAUgMAbABQAcAAAUALQAUALAAAQQAAAQgUAMQgTALgaAAIgDAAg");
	this.shape_171.setTransform(626.3,738.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#C0C7CF").s().p("AiKBQQg6ghgBgvQAAgvA6ghQA5giBSABQBRAAA6AhQA6AiABAuQAAAwg6AhQg6AhhRAAQhRAAg6gig");
	this.shape_172.setTransform(626.3,802.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#AEB7C1").s().p("AAAFPQgbAAgUgMQgUgLAAgQIAAp2ICHABIAAJ1QAAAQgUAMQgTALgbAAIgCAAg");
	this.shape_173.setTransform(207.8,636.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAAAnQgbAAgUgLQgUgMAAgQQAAgPAUgMQATgMAcABQAbAAAVAMQAUALAAAPQAAAPgUANQgTALgbAAIgCAAg");
	this.shape_174.setTransform(207.8,603.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#C0C7CF").s().p("AiKBQQg6ghgBgvQAAgvA6ghQA5giBSABQBSAAA6AhQA5AiABAuQAAAwg6AhQg6AhhSAAQhRAAg5gig");
	this.shape_175.setTransform(207.8,667.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#AEB7C1").s().p("AAAFPQgbAAgUgMQgUgLAAgQIAAp2ICHABIAAJ1QAAAQgUAMQgTALgbAAIgCAAg");
	this.shape_176.setTransform(341.7,713.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgvAcQgUgMAAgQQAAgQAUgLQAUgLAbAAQAcAAAUAMQAUALAAAPQAAARgUALQgUALgcAAQgbAAgUgLg");
	this.shape_177.setTransform(341.7,680.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#C0C7CF").s().p("AiLBQQg6ghAAgvQAAgvA5ghQA6giBSABQBRAAA6AhQA6AiABAuQAAAvg6AiQg6AhhSAAQhQAAg7gig");
	this.shape_178.setTransform(341.7,744.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#AEB7C1").s().p("AABFPQgcAAgUgMQgUgLAAgRIAAp1ICHABIAAJ1QAAAQgUAMQgTALgaAAIgCAAg");
	this.shape_179.setTransform(474.5,790.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgvAcQgUgMAAgQQAAgPAUgMQAUgLAbAAQAcAAAUALQAUAMAAAPQAAARgUALQgUALgbAAQgcAAgUgLg");
	this.shape_180.setTransform(474.5,757.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#C0C7CF").s().p("AiLBQQg6ghAAgvQAAgvA5ghQA6giBSABQBRAAA6AhQA6AiABAuQAAAvg6AiQg6AhhSAAQhQAAg7gig");
	this.shape_181.setTransform(474.5,821.1);

	this.instance_7 = new lib.Path();
	this.instance_7.parent = this;
	this.instance_7.setTransform(790.3,493.8,1,1,0,0,0,246.3,146.8);
	this.instance_7.alpha = 0.039;

	this.instance_8 = new lib.Path_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(433.1,719.1,1,1,0,0,0,346.1,153.4);
	this.instance_8.alpha = 0.039;

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FD7170").s().p("AAAAcQgJgFgIgNQgHgMAAgLQAAgMAHgEQAIgFAJAHQAKAFAIANQAHALAAANQAAALgHAFQgDABgEAAQgFAAgGgEg");
	this.shape_182.setTransform(674,655.2);

	this.instance_9 = new lib.Image_15();
	this.instance_9.parent = this;
	this.instance_9.setTransform(674.2,655.4,1,1,0,0,0,9.3,10.1);
	this.instance_9.alpha = 0.809;

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AAAAcQgJgFgHgNQgIgMAAgLQAAgMAIgEQAHgFAJAGQALAGAHANQAHALAAAMQAAAMgHAEQgDACgDAAQgGAAgGgEg");
	this.shape_183.setTransform(666.9,651.1);

	this.instance_10 = new lib.Image_13();
	this.instance_10.parent = this;
	this.instance_10.setTransform(667,651.2,1,1,0,0,0,9.3,10);
	this.instance_10.alpha = 0.809;

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#53CEAE").s().p("AAAAdQgJgGgIgNQgHgMAAgLQAAgMAHgEQAIgEAJAFQAKAGAHANQAIAMAAALQAAAMgIAFQgCABgEAAQgFAAgGgDg");
	this.shape_184.setTransform(659.7,646.9);

	this.instance_11 = new lib.Image_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(659.8,647.1,1,1,0,0,0,9.3,10);
	this.instance_11.alpha = 0.809;

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AFiHPQgsgCghgTIwSpYQglgWAAgbQABgWAZgPIFgjLQAcgQAsABQArACAhATIQTJZQAjAUABAcQAAAXgaAOIlfDLQgaAPglAAIgJAAg");
	this.shape_185.setTransform(685,619.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#DEE2E6").s().p("AiLC9IiZnyIIeE3IArAHIAAAuQAAAXgZAOIlfDLQgXAOghABg");
	this.shape_186.setTransform(735.9,639.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#EFF1F3").s().p("AFiHPQgsgCghgTIwSpZQglgVAAgbQABgWAZgPIFgjLQAcgRAsACQArACAhATIQTJYQAjAVABAcQAAAWgaAPIlfDLQgbAPgmAAIgHAAg");
	this.shape_187.setTransform(685,624.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#C0C7CF").s().p("AgDAAIMmC5IAAAugAsii4IAAguIMfDmg");
	this.shape_188.setTransform(685,622.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#5C6873").s().p("AjWj3IGtD3ImtD4g");
	this.shape_189.setTransform(656.4,664.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#DEE2E6").s().p("AiYpbIExiwIAAVnIkxCwg");
	this.shape_190.setTransform(742.1,709.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#80909F").s().p("AkzBIIAAnzIJnFkIAAHyg");
	this.shape_191.setTransform(665.7,682.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#C0C7CF").s().p("ApKEMIAAy9ISVKmIAAS9g");
	this.shape_192.setTransform(668.1,692.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FD7170").s().p("AgRAfQgHgFAAgLQAAgMAHgMQAIgMAJgHQAKgFAHAEQAIAEAAAMQAAAMgIALQgHANgKAFQgFAEgFAAQgEAAgDgBg");
	this.shape_193.setTransform(185.5,530.2);

	this.instance_12 = new lib.Image_9();
	this.instance_12.parent = this;
	this.instance_12.setTransform(185.4,530.4,1,1,0,0,0,9.4,10.1);
	this.instance_12.alpha = 0.809;

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgQAfQgIgFAAgMQAAgLAIgMQAHgNAJgGQALgFAHAEQAHAEAAAMQAAALgHAMQgHANgLAGQgFADgFAAQgEAAgCgBg");
	this.shape_194.setTransform(192.7,526.1);

	this.instance_13 = new lib.Image_7();
	this.instance_13.parent = this;
	this.instance_13.setTransform(192.6,526.2,1,1,0,0,0,9.4,10);
	this.instance_13.alpha = 0.809;

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#53CEAE").s().p("AgRAfQgHgFAAgMQAAgMAHgLQAIgMAJgHQAKgFAIADQAHAFAAAMQAAALgHAMQgIAMgKAHQgFADgFAAQgEAAgDgBg");
	this.shape_195.setTransform(199.8,522);

	this.instance_14 = new lib.Image_5_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(199.8,522.1,1,1,0,0,0,9.4,10);
	this.instance_14.alpha = 0.809;

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AmoHAIlgjLQgagPAAgWQAAgcAkgUIQTpZQAhgTArgCQAsgCAcARIFgDLQAZAPAAAWQAAAcgkAUIwSJZQghATgrACIgHAAQgnAAgagPg");
	this.shape_196.setTransform(174.5,494.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#DEE2E6").s().p("ABUEnIlfjLQgZgOAAgXIAAgtIArgHIIek4IiZHyIAAB5QghgCgXgNg");
	this.shape_197.setTransform(123.6,514.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#EFF1F3").s().p("AmoHAIlgjLQgagOAAgXQAAgcAkgVIQTpYQAhgTArgCQAsgCAcARIFgDLQAZAPAAAWQAAAcgkAUIwSJZQghATgrACIgHAAQgnAAgagPg");
	this.shape_198.setTransform(174.5,499.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#C0C7CF").s().p("AsiC5IMfi4IMljnIAAAuIslC5IsfDmg");
	this.shape_199.setTransform(174.5,497.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#5C6873").s().p("AjVAAIGrj3IAAHvg");
	this.shape_200.setTransform(203.2,539.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#C0C7CF").s().p("AiYJcIAA1nIExCwIAAVng");
	this.shape_201.setTransform(117.4,584.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#80909F").s().p("AkzhHIJnlkIAAHzIpnFjg");
	this.shape_202.setTransform(193.8,557.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#DEE2E6").s().p("ApLkLISXqmIAAS9IyXKmg");
	this.shape_203.setTransform(191.5,567.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FD7170").s().p("AgRAfQgHgFAAgLQAAgMAHgMQAHgMAKgHQAKgFAHAEQAIAEAAAMQAAAMgIALQgHANgKAFQgFAEgFAAQgEAAgDgBg");
	this.shape_204.setTransform(644.5,314.2);

	this.instance_15 = new lib.Image_3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(644.4,314.4,1,1,0,0,0,9.4,10.1);
	this.instance_15.alpha = 0.809;

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgQAfQgIgFAAgMQAAgLAIgMQAHgNAJgGQALgFAHAEQAHAEAAAMQAAALgHAMQgHANgLAGQgFADgFAAQgEAAgCgBg");
	this.shape_205.setTransform(651.7,310.1);

	this.instance_16 = new lib.Image_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(651.6,310.2,1,1,0,0,0,9.4,10);
	this.instance_16.alpha = 0.809;

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#53CEAE").s().p("AgRAfQgHgFAAgMQAAgMAHgLQAIgMAJgHQAKgFAIADQAHAFAAAMQAAALgHAMQgIAMgKAHQgFADgFAAQgEAAgDgBg");
	this.shape_206.setTransform(658.8,306);

	this.instance_17 = new lib.Image();
	this.instance_17.parent = this;
	this.instance_17.setTransform(658.8,306.1,1,1,0,0,0,9.4,10);
	this.instance_17.alpha = 0.809;

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AmoHAIlgjLQgagPAAgWQAAgcAlgUIQSpZQAhgTArgCQAsgCAcARIFgDLQAZAPAAAWQAAAcgkAUIwSJZQghATgrACIgHAAQgnAAgagPg");
	this.shape_207.setTransform(633.5,278.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#DEE2E6").s().p("ABUEnIlfjLQgZgOAAgXIAAgtIArgHIIek4IiZHyIAAB5QghgCgXgNg");
	this.shape_208.setTransform(582.6,298.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EFF1F3").s().p("AmoHAIlgjLQgagOAAgXQAAgcAlgVIQSpYQAhgTArgCQAsgCAcARIFgDLQAZAPAAAWQAAAcgkAUIwSJZQghATgrACIgHAAQgnAAgagPg");
	this.shape_209.setTransform(633.5,283.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#C0C7CF").s().p("AsiC5IMfi4IMljnIAAAuIslC5IsfDmg");
	this.shape_210.setTransform(633.5,281.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#5C6873").s().p("AjVAAIGrj3IAAHvg");
	this.shape_211.setTransform(662.2,323.9);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#C0C7CF").s().p("AiYJcIAA1nIExCwIAAVng");
	this.shape_212.setTransform(576.4,368.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#80909F").s().p("AkzhHIJnlkIAAHzIpnFjg");
	this.shape_213.setTransform(652.8,341.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#DEE2E6").s().p("ApLkLISXqmIAAS9IyXKmg");
	this.shape_214.setTransform(650.5,351.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.instance_17},{t:this.shape_206},{t:this.instance_16},{t:this.shape_205},{t:this.instance_15},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.instance_14},{t:this.shape_195},{t:this.instance_13},{t:this.shape_194},{t:this.instance_12},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.instance_11},{t:this.shape_184},{t:this.instance_10},{t:this.shape_183},{t:this.instance_9},{t:this.shape_182},{t:this.instance_8},{t:this.instance_7},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]}).wait(120));

	// flash0.ai
	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#80909F").s().p("ABzIIQgFgEgCgHIj+vvQgCgIAEgIQAFgHAIgCQAHgCAHAEQAIAFACAIID+PwQACAIgFAHQgDAHgJACIgEAAQgHAAgGgEg");
	this.shape_215.setTransform(435,390.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#EFF1F3").s().p("AioALIBmg/IDrAhIh/BIg");
	this.shape_216.setTransform(378.1,279.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#53CEAE").s().p("AAAj7IDEEUImHDig");
	this.shape_217.setTransform(251.7,326.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#74D8BD").s().p("AjvDUIDEn2ICMBPIgGAOICVDRIkoCrIgqBsg");
	this.shape_218.setTransform(242,322.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#EFF1F3").s().p("AkwBMIG0j7ICuBkIm1D7g");
	this.shape_219.setTransform(245,336.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#81C3FD").s().p("AiLBRIEXlCIAAHkg");
	this.shape_220.setTransform(293,292.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#2C98EA").s().p("AiLjxIEXFCIkXCig");
	this.shape_221.setTransform(321.1,292.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#EFF1F3").s().p("AktABIEuivIEtCuIkuCug");
	this.shape_222.setTransform(307.1,300.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FD7170").s().p("Ah7BGIAAkaID3CPIAAEag");
	this.shape_223.setTransform(226.7,432.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FD8083").s().p("Aj2AAID3iNID1CNIj2COg");
	this.shape_224.setTransform(239.1,411.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FD5756").s().p("Ah7hGID3iNIAAEXIj3CQg");
	this.shape_225.setTransform(251.5,432.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#EFF1F3").s().p("AknABIEoirIEnCqIkoCrg");
	this.shape_226.setTransform(239.1,439.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFE2D3").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgLANABQAPgBAKALQAKAKgBANQAAAPgKAJQgKALgOAAQgOgBgJgKg");
	this.shape_227.setTransform(515.5,321.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFE2D3").s().p("AAHARIgYgTQgDgBAAgFQgBgEACgCQADgDADgBQAEAAADACIAYATQADACABADQAAAEgCADQgDADgDAAIgCABQgDAAgCgCg");
	this.shape_228.setTransform(514.8,317.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#C0C7CF").s().p("Ah1DKQgMgDgGgKQgGgJACgKQABgKAJgHICsiQIhDiVQgHgRAGgRQAHgRAQgHQAPgHARAGQARAGAIARIBSC1QAGAOgEAPQgEAOgNAIIjaCOQgHAFgIAAIgGgBg");
	this.shape_229.setTransform(528.9,302.7);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#2C98EA").s().p("Ah6BHIAAkbID1CPIAAEag");
	this.shape_230.setTransform(484.8,320.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#81C3FD").s().p("Aj2AAID3iNID2CNIj3COg");
	this.shape_231.setTransform(497.2,299.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#1152A2").s().p("Ah7hHID3iMIAAEXIj3CRg");
	this.shape_232.setTransform(509.5,320.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFE2D3").s().p("AgGgdQAQAIAHAKQAHAKgGAJQgJAQgdAGg");
	this.shape_233.setTransform(530.3,265.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FD7170").s().p("AAkBBQAAghgMgOIgHAZQgEAAgJgaQgHgbAFgRIADgGQg0AQhBgnQgOgJACgRQACgRAQgFIAUgCQBNgkA3AVQAhANAUAeQAiAxgJBDQgHAqgUAoQgFAKgLgCIhNABg");
	this.shape_234.setTransform(527.4,261.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#F7E5E4").s().p("AABgUIAFACQAFADABADQABANgMAMIgMAIg");
	this.shape_235.setTransform(530.8,263.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFE2D3").s().p("AgvB1IgegDQgRgDgGgHQgNgNADguQADgrAOgpQAQgyAugTQAngQApANQAnANAPAjQAQAmgRAyQgQAxgwAaQgjASgjAAIgPgBg");
	this.shape_236.setTransform(526.3,260.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFC8AB").s().p("Ag4AlIAMgiIBlgrQgRAugVAOQgQAKgVAGQgPAFgKAAQgIAAgFgEg");
	this.shape_237.setTransform(527.1,269.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFE2D3").s().p("AgWBAQgTgDgIgHQgLgJADgJIAjhjIBRADIggBrQgDALgPAEQgIACgJAAIgOAAg");
	this.shape_238.setTransform(527.2,269.4);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#C0C7CF").s().p("AgWBCQgTgBgJgLIgHgJQgDgFABgFIAlhkIBSADIghBtQgDALgPAEQgMAEgNAAIgGAAg");
	this.shape_239.setTransform(526,273.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FD7170").s().p("Ag3gVIASgxIBsAKIg1B9IhYAGQgCgkARg4g");
	this.shape_240.setTransform(520.1,262.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#80909F").s().p("AgZhUIAzA7IgjBbIgCATg");
	this.shape_241.setTransform(531.8,299.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#80909F").s().p("Ag5ABIBphJIANApIh5Bog");
	this.shape_242.setTransform(526.6,319.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#C0C7CF").s().p("AARD9IgLgCQgcgGgYgSIhQg9QgNgLgHgRQgHgQABgLQACgSAJgVQAMgYAEgMIADgIIAEgQIAHgwIgCgCQgXgcgFgQQgHgXARgWIAhg5QANgVARgUQAYgaAkgCQAxgCAlAZQAnAcASAjQATAlgBA2QAAALgCANIgrBtIgCATIABASIAXBLQAGAQgFARQgEARgNALQgHAHgKAEIgEACQgaALgdAAIgVgBg");
	this.shape_243.setTransform(520,300.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#53CEAE").s().p("AAdBXIhehIQgOgKgGgNICrhjIgCDXQgggEgXgRg");
	this.shape_244.setTransform(513.3,338.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#74D8BD").s().p("AAfC6QgfgEgWgRIhghHQgNgLgHgNQgLgUADgWIAJjWIEcBWIgJDdQgDAUgRAQQgOALgcANQgNAGgRAAIgPgBg");
	this.shape_245.setTransform(518.5,330.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFC8AB").s().p("Ag1hFIBrA9IAABOg");
	this.shape_246.setTransform(512.1,346.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFE2D3").s().p("AAeGGQgKAAgIgHQgHgHgBgKIhEqrQgDgbARgVQASgVAagDQAagCAVARQAVARADAbIAAAHIgIKuQAAAMgIAHQgIAIgKAAIgBAAg");
	this.shape_247.setTransform(511.3,352.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFE2D3").s().p("AA7FlQgKgFgEgMIhjkwIAAAAIgyk2QgFgeASgZQASgZAfgFQAegFAYASQAZASAFAeIABANIgBEvIA/EyQADANgHALQgHAKgNADIgGAAQgIAAgIgEg");
	this.shape_248.setTransform(527.5,356.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#5F7386").s().p("AgyA1QgFgOAPgpIAQgoIAvgUIAHAFQAKAJAKAQQAEAGgEAIIgVAxQgFALgPAJQgOAKgQACIgIAAQgRAAgEgKg");
	this.shape_249.setTransform(535,394.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#5F7386").s().p("AgxAkQgPgFgGgJQgDgEAAgFIAAgBIABgBQADgRAzgRQAZgJAYgFIAjADIAFALQAEAOgCAPQAAAHgHAFQgHAFgLACIhDAMIgMABQgJAAgJgCg");
	this.shape_250.setTransform(510.2,392.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#80909F").s().p("AAyhBIg3BtIgsAWg");
	this.shape_251.setTransform(506.6,286.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#C0C7CF").s().p("AhcBmQgLgDgFgLQgHgPAIgOQANgUAVgYQAPgRAVgWQATgTATgSQAZgWARgMQAPgLASADQARADALAPQAJAMgBAQQgBAPgKALQgRATgWASQgSARgXASQgWARgVAPQgdATgTAJQgGADgGAAQgFAAgFgCg");
	this.shape_252.setTransform(509.4,287);

	this.instance_18 = new lib.Path_20();
	this.instance_18.parent = this;
	this.instance_18.setTransform(520.6,395.9,1,1,0,0,0,30,17.3);
	this.instance_18.alpha = 0.039;

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#003D87").s().p("AgagJIA1goIghBjg");
	this.shape_253.setTransform(406.1,257.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#2A569F").s().p("Aj4B4QgNgMAAgRQgBgSAMgNQAMgNASgBIDqgKQAHAAAFgFICjiWQANgMASAAQASABANANQAMANgBASQgBASgNANIijCWQgdAbgnABIjrAJQgSAAgMgMg");
	this.shape_254.setTransform(387.1,254.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFC8AB").s().p("AgBAVQgCgCgBgDIgGgcQgBgDACgDQACgDADgBQAEAAACABQADACAAAEIAGAbQABAEgCADQgCADgDAAIgDABIgDgCg");
	this.shape_255.setTransform(362.3,259.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFC8AB").s().p("AgSALQgCgCgBgDQgBgDACgDQABgCAEgBIAbgIQAIgBACAHQACAIgIABIgbAIIgDAAIgEgBg");
	this.shape_256.setTransform(359.7,265.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFC8AB").s().p("AgTAHQgCgCgBgDQgBgHAJgBIAcgCQAIgBABAJQAAACgCADQgCACgEAAIgcACIgBAAQgDAAgCgCg");
	this.shape_257.setTransform(357.9,263.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFC8AB").s().p("AgOAIQgIgBAAgHQABgIAIAAIAcACQADAAADACQACADAAACQAAAEgDACQgCACgEAAg");
	this.shape_258.setTransform(359.1,261.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFC8AB").s().p("AgLAjQgOgEgHgOQgIgOAFgOQAFgPAOgGQAOgIANAGQAPAEAHAOQAHAOgFAOQgFAOgNAHQgIAFgJAAQgEAAgHgDg");
	this.shape_259.setTransform(362.4,263.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#2A569F").s().p("AgWAPQAVgoANgPQAOgOAKADQAFACABAEIgmAvIgtAzg");
	this.shape_260.setTransform(411.9,235.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#361500").s().p("AAiByIgtgUIAGgFQAFgHgEgKQgHgSgMgEIgKAAIAGAPIgPgJQgdgQgSgaIgLgWQgggCAOgnQAOglAkgSIgBAnIAUgdQAZgdAYAGIgJAVIAvgLQAwgEAEAmQAMAGAGAXQAEAPAGAjQAPBAgaAfQgQASgaAAQgOAAgRgFg");
	this.shape_261.setTransform(403.3,217.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFC8AB").s().p("AgYCBQgRgDgYgyQgRglgSgyQgPgtAegeQAUgWAugPQAkgMAgASQAiATAQAxQAQAvgWAuQgUApgkAWQgOAIgSAHQgQAHgKAAIgDAAg");
	this.shape_262.setTransform(404.4,220.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFB089").s().p("AgsgIIBEggIAVAdIgvAzIgDABg");
	this.shape_263.setTransform(410.8,231.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFC8AB").s().p("AggAPQgLgpgBgDIBBgbIAYAYIhDBZIgKgqg");
	this.shape_264.setTransform(410.8,233.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FD7170").s().p("AgTALIgHgFQgCgDAAgDQAAgFAGgEIADgCQAIgFALAAQAMAAAIAFQAJAFAAAGQAAAHgJAFQgIAFgMAAQgLgBgIgFg");
	this.shape_265.setTransform(435.3,350.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FD7170").s().p("AgMAPIgHgDQgJgGAAgGQAAgGAJgFIAFgCQAIgDAJAAQAKABAHAEQAJAFAAAGQAAAHgIAFQgKAFgKAAQgGAAgHgCg");
	this.shape_266.setTransform(454.1,339.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#2A569F").s().p("Ag7ExQgOgDgIgGQgGgFgGgMIAAgBIgtiRIg1i+QgJgaAFgcQAFgbASgWIBziFQAkgTAiAMQAjANAMAmIA2DbIBNB1QAbA0hPBGQhtBhhJAAIgQgBg");
	this.shape_267.setTransform(421.8,260.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FD7170").s().p("Ah2AbIDbicIAQA0QAIA8ggAjQggAlhEApIg+Aig");
	this.shape_268.setTransform(429.8,282);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FD5756").s().p("AgmgNIBNg6IgrCPg");
	this.shape_269.setTransform(435.2,291.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FD7170").s().p("Aick0ICFgsIC0KvIg3ASg");
	this.shape_270.setTransform(441.2,305.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FD7170").s().p("Ah4lBICIgdIBpKxIg5AMg");
	this.shape_271.setTransform(426,316.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#1152A2").s().p("AAMArQgQgCgJgJIgrglQgJgIAEgKQADgKAPgFIAOgEIAFAAQASgBAMAHQAXAGAVAJIAHAMQAGAOAAANIAAAAQABAOgUAIQgLADgLAAIgKAAg");
	this.shape_272.setTransform(451.8,341.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#1152A2").s().p("AATAgIhGgSQgZgGgBgPIABgDIAAgCIAAAAQAHgZBFAEQAhACAhAHIAGAJQAGALAAAOQAAAFgDAFQgHAJgQAEQgIABgIAAQgIAAgJgCg");
	this.shape_273.setTransform(431.5,352.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FD8083").s().p("Ah2BQIBejyICPBTIheDyg");
	this.shape_274.setTransform(349.5,238.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FD7170").s().p("AgYAZIheiEICPBTIBeCEg");
	this.shape_275.setTransform(349.5,257.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FD5756").s().p("Ai8BtIBejyIC8htIBfCGIhfDxIi8Bug");
	this.shape_276.setTransform(370.9,243.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AimhrIC8htICQBTIhDBiIh5ALIg3Dxg");
	this.shape_277.setTransform(363.7,233);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#80909F").s().p("Ai2BqQgEgHACgIQADgIAHgEIFKi/QAHgEAIACQAIADAEAHQAEAHgCAIQgCAIgHAEIlKC+QgFADgFAAQgMAAgGgKg");
	this.shape_278.setTransform(459.6,410.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#80909F").s().p("Ai2BqQgEgHACgIQACgJAHgEIFKi+QAIgEAIACQAIADAEAHQAEAHgCAIQgCAIgIAEIlKC+QgFADgFAAQgLAAgGgKg");
	this.shape_279.setTransform(451.7,378.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#80909F").s().p("Ai2BqQgEgHACgIQADgJAGgEIFKi+QAIgEAIACQAIACAEAIQAEAHgCAIQgCAIgIAEIlKC+QgEADgGAAQgLAAgGgKg");
	this.shape_280.setTransform(443.9,347.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#80909F").s().p("Ai5BrQgEgHACgIQACgIAIgEIFQjCQAHgEAIACQAIACAEAHQAEAHgCAJQgCAIgHAEIlQDBQgFADgFAAQgMAAgGgKg");
	this.shape_281.setTransform(435.7,316.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#80909F").s().p("Ai5BrQgDgHABgIQADgIAHgEIFPjBQAIgEAHACQAIACAFAHQAEAHgCAJQgCAIgIAEIlPDBQgEACgGAAQgLAAgHgKg");
	this.shape_282.setTransform(427.9,285);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#80909F").s().p("Ai6BsQgEgHACgIQACgIAHgEIFTjDQAHgEAIACQAIACAEAHQAEAHgCAIQgCAIgHAEIlTDEQgGACgEAAQgMAAgFgKg");
	this.shape_283.setTransform(419.8,253.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#80909F").s().p("Ai6BsQgEgHACgIQACgIAHgEIFTjDQAHgEAIACQAIACAEAHQAEAHgCAIQgCAIgHAEIlTDDQgFADgFAAQgMAAgFgKg");
	this.shape_284.setTransform(412,222.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#80909F").s().p("AEfSuQgGgFgCgGMgJUgk7QgCgIAEgHQAEgHAIgCQAIgCAHAEQAHAEACAIMAJVAk7QACAIgEAHQgEAHgIACIgFABQgHAAgFgEg");
	this.shape_285.setTransform(451.8,303.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#80909F").s().p("AEfSuQgGgFgCgGMgJUgk7QgCgIAEgHQAEgHAIgCQAIgCAHAEQAHAEACAIMAJVAk7QACAIgEAHQgEAHgIACIgFABQgHAAgFgEg");
	this.shape_286.setTransform(417.9,322.8);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#2A569F").s().p("Ag0C8QhNgtgYhXQgXhWAthOQAthOBWgXQAqgMAvAHQhAAkgdBEQgdBFATBIQAQA/AxAsQAwAqA/AJQgYAOgaAHQgeAIgcAAQg3AAgzgeg");
	this.shape_287.setTransform(344.1,360.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#5D78B1").s().p("AhsC8QhNgtgYhXQgXhWAthOQAthOBXgXQBWgXBOAtQBNAtAYBWQAXBWgtBOQgtBPhXAXQgdAIgcAAQg3AAg0geg");
	this.shape_288.setTransform(349.7,360.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#EFF1F3").s().p("AiYBYQg/gkgBg0QAAgzA/glQBAgkBZAAQBZAABAAlQBAAlAAAyQAAA0g/AlQhAAkhZAAQhZAAhAglg");
	this.shape_289.setTransform(349,375.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#74D8BD").s().p("Ah0D/IAAn+QDeFNAFAMQAOAhgPAgQgVAthAAcQg9AbhOABIgCgBg");
	this.shape_290.setTransform(310.5,392.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#53CEAE").s().p("AAAD/QgdAAgegEQhegPgxgxQgwgwAYg2QAFgKDdlKQDfFNAFAMQAOAhgPAgQgVAthAAcQg+AbhNABIgDgBg");
	this.shape_291.setTransform(298.8,392.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#EFF1F3").s().p("AivBlQhJgqAAg7QAAg7BIgqQBJgqBnABQBmAABJAqQBJAqABA7QAAA7hIAqQhKAqhnAAQhmAAhJgrg");
	this.shape_292.setTransform(298.7,405.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#DEE2E6").s().p("AjWhfIAAg5IGtD4IAAA5g");
	this.shape_293.setTransform(211.8,458.7);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#C0C7CF").s().p("As9HDIZ7u+IAAA5I57O+g");
	this.shape_294.setTransform(316.4,423.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AwVFjIZ7u+IGvD5I57O9g");
	this.shape_295.setTransform(294.9,408);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#DEE2E6").s().p("AjWhfIAAg5IGtD4IAAA5g");
	this.shape_296.setTransform(211.8,361.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#C0C7CF").s().p("As9HDIZ7u+IAAA5I57O+g");
	this.shape_297.setTransform(316.4,325.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#EFF1F3").s().p("AjsA2IFJi+ICQBTIlJC+g");
	this.shape_298.setTransform(364.4,273.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AwVFjIZ7u9IGvD4I57O+g");
	this.shape_299.setTransform(294.9,310.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#DEE2E6").s().p("Ai4BrQgEgHACgIQACgIAHgEIFPjBQAHgEAIACQAIACAEAHQAEAHgCAIQgCAIgHAEIlPDBQgFADgFAAQgMAAgFgKg");
	this.shape_300.setTransform(412.3,401.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#DEE2E6").s().p("AiyBnQgDgHABgIQADgIAHgEIFCi5QAHgEAIACQAHACAEAHQAEAHgCAIQgBAIgIAEIlBC5QgEADgGAAQgLAAgHgKg");
	this.shape_301.setTransform(434.8,414.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#DEE2E6").s().p("Ai6BsQgEgHACgIQACgIAHgEIFTjDQAHgEAIACQAIACAEAHQAEAHgCAIQgCAIgHAEIlTDDQgEADgGAAQgMAAgFgKg");
	this.shape_302.setTransform(405.2,385.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#DEE2E6").s().p("Ai6BsQgEgHACgIQACgIAHgEIFTjDQAHgEAIACQAIACAEAHQAEAHgCAIQgCAIgHAEIlTDDQgDADgHAAQgMAAgFgKg");
	this.shape_303.setTransform(405.2,350);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#DEE2E6").s().p("Ai6BsQgEgHACgIQACgIAHgEIFTjDQAHgEAIACQAIACAEAHQAEAHgCAIQgCAIgHAEIlTDDQgDADgHAAQgMAAgFgKg");
	this.shape_304.setTransform(405.2,314.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#DEE2E6").s().p("Ai6BsQgEgHACgIQACgIAHgEIFTjDQAHgEAIACQAIACAEAHQAEAHgCAIQgCAIgHAEIlTDDQgDADgHAAQgLAAgGgKg");
	this.shape_305.setTransform(405.1,278.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#DEE2E6").s().p("Ai6BsQgEgHACgIQACgIAHgEIFTjDQAHgEAIACQAIACAEAHQAEAHgCAIQgCAIgHAEIlTDDQgEADgGAAQgLAAgGgKg");
	this.shape_306.setTransform(405.1,236.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#DEE2E6").s().p("AEgSwIpcldIgB/wQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIIAAfZIJJFRQAHAEADAIQACAIgEAHQgGAKgMAAQgFAAgFgCg");
	this.shape_307.setTransform(451.8,303.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#DEE2E6").s().p("AEgSwIpclcIgB/xQAAgIAGgGQAGgGAIAAQAIAAAGAGQAGAGAAAIIABfZIJIFRQAHAEADAIQACAIgEAHQgGAKgMAAQgGAAgEgCg");
	this.shape_308.setTransform(417.9,322.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#80909F").s().p("AA9AtIiBhLQgHgEAEgHQABgCADgBQAEgBACACICCBKQAHAEgEAHQgDAEgEAAg");
	this.shape_309.setTransform(534.3,576.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#80909F").s().p("ABfBAIjFhyQgDgBgBgDQgBgEACgCQABgDADgBQAEgBACACIDGBxQAHAFgEAGQgCAEgFAAg");
	this.shape_310.setTransform(537.7,575);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#80909F").s().p("ABfBAIjFhxQgHgEAEgHQABgDADgBQAEgBACACIDGByQADABABADQABAEgCACQgCAEgFAAIgEgBg");
	this.shape_311.setTransform(537.7,571.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("ABuCCIjciAQgIgEgHgLQgGgMAAgMIAAhMQAAgMAGgEQAHgFAIAFIDcCAQAJAEAHALQAGAMAAAMIAABMQAAAMgGAFQgDACgEAAQgEAAgFgDg");
	this.shape_312.setTransform(537.7,575);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AjsCJQgEgJAIgFIHHkGQAEgDAEACQAEABACADQACAEgBAEQgBAEgEACInHEGQgCACgDAAQgFAAgEgFg");
	this.shape_313.setTransform(592.6,553.2);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AElC1IpTlXQgDgCgCgEQgBgEACgEQACgDAFgCQADgBAEACIJTFXQAEADABAEQABAEgCADQgEAFgFAAIgFgBg");
	this.shape_314.setTransform(540,549.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#AEB7C1").s().p("AjIhjIHIkHIg3HNInIEIg");
	this.shape_315.setTransform(589.9,576.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#C0C7CF").s().p("Aj3B3IgyoJIJTFYIg3HNg");
	this.shape_316.setTransform(540,572.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FD6160").s().p("Ag0C8QhOgtgXhXQgXhWAthOQAthNBWgYQAsgMAtAHQhBAkgcBEQgeBFAUBIQAQA/AxAsQAwAqA/AKQgVAMgdAIQgdAIgdAAQg2AAg0geg");
	this.shape_317.setTransform(537.1,547.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FD8083").s().p("AhsC8QhOgtgXhXQgXhWAthOQAthNBXgYQBVgXBPAtQBOAtAXBXQAXBWgtBOQgtBNhWAYQgeAIgcAAQg3AAg0geg");
	this.shape_318.setTransform(542.7,547.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#74D8BD").s().p("Ah0D/IAAn+QDeFNAFAMQANAigPAfQgUAthBAcQg9AbhMABIgDgBg");
	this.shape_319.setTransform(593.8,550);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#53CEAE").s().p("AABD/QgdAAgegEQhegPgxgxQgxgwAZg2QAEgKDelKQDfFNAFAMQANAigPAfQgUAthBAcQg+AbhNABIgCgBg");
	this.shape_320.setTransform(582,550);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#EFF1F3").s().p("AiuBlQhKgqAAg7QAAg7BIgqQBJgqBnABQBmAABKAqQBIAqABA7QAAA7hIAqQhKAqhnAAQhmAAhIgrg");
	this.shape_321.setTransform(581.9,563.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#2C98EA").s().p("Ah7BbIAAlDID3COIAAFDg");
	this.shape_322.setTransform(554.7,530.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#81C3FD").s().p("Aj2AAID3iNID1CNIj2COg");
	this.shape_323.setTransform(567.1,507.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#2A569F").s().p("Ah7haID3iNIAAE/Ij3CQg");
	this.shape_324.setTransform(579.5,530.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#5F7386").s().p("AgiAjQgOgOAAgVQAAgUAOgOQAPgOATAAQAVAAAOAOQAOAPAAATQAAAVgOAOQgOAOgVAAQgTAAgPgOg");
	this.shape_325.setTransform(605.7,591.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#5F7386").s().p("AghAiQgPgOAAgUQAAgTAPgOQAOgPATAAQAUAAAOAPQAPAOAAATQAAAUgPAOQgOAPgUAAQgTAAgOgPg");
	this.shape_326.setTransform(564.2,615.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#5F7386").s().p("AgiAiQgOgNAAgVQAAgTAOgOQAPgPATAAQAUAAAPAPQAOANAAAUQAAAVgOANQgPAPgUAAQgTAAgPgPg");
	this.shape_327.setTransform(522.3,591.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFC8AB").s().p("AgEAZQgDgCAAgEIgEgiQAAgFADgDQACgCAEgBQADgBADADQADACABAFIADAhQABAEgDADQgCADgEABIgBAAQgDAAgDgCg");
	this.shape_328.setTransform(528.2,526.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFC8AB").s().p("AgFAZQgDgDAAgEIgBgiQgBgEADgDQADgDAEAAQADAAADACQADADAAAEIABAiQABAEgDADQgDADgEAAIgBAAQgCAAgDgCg");
	this.shape_329.setTransform(530.5,524.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFC8AB").s().p("AgaAcQgLgLgBgQQAAgPALgLQALgMAQAAQAPgBALALQAMALABAQQAAAPgLALQgLAMgQABIgBAAQgOAAgMgLg");
	this.shape_330.setTransform(527.5,523);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("ABjDzIjmjBQgQgNABgVIABgDIAPjbQABgTAOgMQAPgNATABQATACAMAOQANAOgCATIgNDIIC/DIQAIAJAAAMQAAANgJAIQgIAIgMAAQgLAAgIgHg");
	this.shape_331.setTransform(515.2,499.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AjZB+QgFgJAJgFIGijxQAEgCADABQAEACACADQADAEgBAEQgBAEgEACImiDxQgCABgDAAQgGAAgDgFg");
	this.shape_332.setTransform(531.1,519.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AElC0IpTlXQgDgCgBgEQgCgEADgDQACgEAEgBQAEgBADACIJTFXQAEACABAEQABAEgCAEQgDAFgGAAIgFgCg");
	this.shape_333.setTransform(585.6,522.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#5F7386").s().p("AjQhBIGhjyIheJng");
	this.shape_334.setTransform(531.2,538.6);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFC8AB").s().p("AgNAYQgDgCgBgEQgBgEACgEIAQgdQACgEAEgBQAEgBADACQAEACABAEQABAEgCAEIgRAdQgBADgEACIgDAAIgFgBg");
	this.shape_335.setTransform(555,452.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FD7170").s().p("AA3BfQAIgEAHgHQAOgNAAgNQgBgQgPgGQgQgGgHAQIgHg0QgmAJgoABQhQAEgDgnQgEgwAWgaQAHgIALAEQAKAEAAALIAGgMQAJgOANgGQAIgEAHAFQAHAEAAAIIABABIAsgGQA1ACAhAmQAjApgXBDQgSAygqAxg");
	this.shape_336.setTransform(514.8,449.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFC8AB").s().p("AhWCCQgRgMgHgxQgHgvAGgvQAHg4AtgfQAogbAtAGQAsAFAYAjQAaAlgHA5QgHA4guAmQgoAhgvAEIghADIgDAAQgQAAgHgFg");
	this.shape_337.setTransform(514.5,451.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#DEE2E6").s().p("AAOAhIgsggQgHgEgCgDIAAgdIBPAsIgJAUQgCAFgGABIgCABQgDAAgEgDg");
	this.shape_338.setTransform(514.5,470.4);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFB289").s().p("AgegHIA+gPIgLAPQgSARgiANg");
	this.shape_339.setTransform(514,464.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFC8AB").s().p("AggBHIgMgHQgEgEAAgFIAGhsIBagWIABB0QAAAMgOAIQgRAKgRADQgHACgHAAQgLAAgIgFg");
	this.shape_340.setTransform(515.5,463.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#DEE2E6").s().p("AABAdIgQgIQAHgEAGgJQAKgPgJgWIAGAJQAHAMADALQACAIgCAKQAAAFgFACIgFACIgEgBg");
	this.shape_341.setTransform(520.1,469.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#04266A").s().p("AAUCPIgjgjQgGgGAAgIIgBhcQgChcgCgBIgIgJQgHgHACgJQABgKAJgEIAXgMQAFgCAEADQAEAEgBAFIgFAfIAnC1QABAGgBAEIgRA0QAAABAAAAQAAAAAAAAQgBAAAAABQAAAAgBAAIgBgBg");
	this.shape_342.setTransform(520.4,485);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFC8AB").s().p("AAAAcIgfgVQgVgQAAgLIAXgLIAggEIAQACQASAEAEAMQALAXABAGQADARgSAFQgGACgGAAQgNAAgNgIg");
	this.shape_343.setTransform(515.8,468.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#E6F8F8").s().p("AATBYQgggCgdgQIgEgCQgRgJgKgRQgJgQAAgTIAChPIADgBIAKgFIALgJIA2A3IBVBuQgaAKgcAAIgKAAg");
	this.shape_344.setTransform(508.6,506.8);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("Ah4DuIgEgCQgRgJgJgRQgKgQABgTIAGjvQAEhAAXgoQAXgmAugaQAhgTAjgEQAigDAZALIAiAYQAjAgADAkIAJBWQAJBnABBbQAAAcgZASIhsBAQghAVgoAAIgDAAQgmAAgigSg");
	this.shape_345.setTransform(516.4,490);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#80909F").s().p("AhaBaQgagPgIgKQgLgNgFghIgJh0IEpgBIABA4QABATgKARQgJARgRAKIhnA/QgWANgdACIgIAAQgZAAgRgJg");
	this.shape_346.setTransform(515.9,512.2);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#5F7386").s().p("Ag8A0QgKgBgEgGQgJgOgDgQIgCgNIA4gfIA0gRQA3gNALARIAAAAQADAGgBAFQgBAMgNAOQgOANgSAHIhOAhQgMAEgKAAIgCAAg");
	this.shape_347.setTransform(530,588.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#80909F").s().p("ABMGOQgJgHgDgLIi7raQgFgSAagOQASgJAlgJQAegHAZAQQAaAQAHAdIBTLLQACANgIAKQgIAKgNABIgEAAQgJAAgIgFg");
	this.shape_348.setTransform(514.9,551.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#80909F").s().p("AiXFgQgKgGgCgMQgCgLAFgKICOj8IABgCIABgCIAEgMQADgNgBgMIAAgBIAZktQACgfAYgTQAXgUAfADQAHAAArgIQAUgEgCAYIACAWQABAagFAeIhCEeQgDAdgKAZQgIAQgIAMIiuDtQgIAKgMACIgGAAQgJAAgIgGg");
	this.shape_349.setTransform(515.1,538.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#5F7386").s().p("AAcBAQgRgBgQgIQgQgJgGgLIgcgxQgEgJADgGQAJgSAJgKIAIgGIAyAQIAVApQAVAqgFAPQgDANgWAAIgEAAg");
	this.shape_350.setTransform(502.9,576.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFC8AB").s().p("AgZAcQgMgLAAgPQgBgPALgMQALgMAQAAQAPgBALALQAMALABAQQAAAPgLALQgKAMgQABIgCAAQgOAAgLgLg");
	this.shape_351.setTransform(555.9,456.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#EFF1F3").s().p("AggAPQgGgVAEgWQABAAAAAAQABABAAAAQAAABAAAAQABABAAABIAOgNQAQALACAKIACAHQACAEAEADQASARAKAXg");
	this.shape_352.setTransform(531,475.7);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AAzCPIjThGQgSgGgJgRQgIgRAFgSQAGgRARgIQARgJASAGICtA3IBhirQAGgLAMgDQAMgDAKAGQAKAFAEAKQADALgEAKIhXDeQgGAPgQAIQgJAEgJAAQgGAAgHgCg");
	this.shape_353.setTransform(539.4,468.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#5F7386").s().p("Aj3B4IgyoKIJTFYIg3HNg");
	this.shape_354.setTransform(585.6,545.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#DEE2E6").s().p("AnxgKIHekVIIEEqIndEUg");
	this.shape_355.setTransform(561.8,594.7);

	this.instance_19 = new lib.Path_7();
	this.instance_19.parent = this;
	this.instance_19.setTransform(516.6,573.3,1,1,0,0,0,29.9,17.3);
	this.instance_19.alpha = 0.039;

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#805A4A").s().p("AgVAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQACgGAFABIAeAFIAOAFIgEAPg");
	this.shape_356.setTransform(892.4,433.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#805A4A").s().p("AgVAAQgGgBACgGIAAgBQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIAFgBIArAKIgJARg");
	this.shape_357.setTransform(891.9,431.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#805A4A").s().p("AgSAAQgEAAAAgFIAAgBQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAQACgBADAAIAlAKIAAABIgLAMg");
	this.shape_358.setTransform(892.9,429.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#805A4A").s().p("AAAAiQgOAAgKgKQgJgKAAgOQAAgOAKgKQAKgJAOAAQAOAAAKAKQAKALgBANQAAAOgKAKQgKAJgNAAIgBAAg");
	this.shape_359.setTransform(895.9,431.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FD8083").s().p("AiACdQgJgIgBgLQAAgLAGgIQAGgIAKgCICegkIgsi2QgEgRAIgPQAJgQASgEQARgEAPAJQAQAJAEASIA4DgIAAADQAEAQgIAPQgJAOgQAEIgHABIjRAPIgCAAQgKAAgIgGg");
	this.shape_360.setTransform(908.9,417.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("ABwCfIiHhPQgIgEgJgNQgJgMgEgNIhCiwQgEgNABgGQACgGAIAFICIBPQAHAEAJAMQAJANAFANIBCCvQAEANgCAHQgBADgDAAIgGgCg");
	this.shape_361.setTransform(887,424.7);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#805A4A").s().p("AAIAPIgYgPQgGgFAEgHQAFgGAHAEIAXAPQAHAFgFAHQgDAEgEAAQgCAAgCgCg");
	this.shape_362.setTransform(895.4,428.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#805A4A").s().p("AgQgeQARAEAJAIQAKAIgEALQgEARgbAMg");
	this.shape_363.setTransform(908,382.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#54200C").s().p("ABQCOQgOgCgKgLQgJgKAAgPIAEhmQgIgfgOgKIgBAZQgEABgOgWQgPgaADgRIABgHQgLAHgZAFQgeAEgOAEQg0ANgEAnQgGgHACgbQAEg5AegeQA/g9A7ALQAiAGAeAcQA5A2AGB2QADBOgQBXQgPgqgigDg");
	this.shape_364.setTransform(903.8,383.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#F7E5E4").s().p("AgFgVIAFABQAGABABAEQAFAMgKANIgJAMg");
	this.shape_365.setTransform(907.9,380.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#714635").s().p("Ag2geIABgKIBtAAQg8A5gwAYQgFgkADgjg");
	this.shape_366.setTransform(898,379.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#805A4A").s().p("AhKB4QgTgMgHg5QgEgkADgjIABgKQAIgvAmgbQAigXAoAEQAoADAXAfQAZAggFA2QgEAygpAkQgjAfgrAGIgeAEIgFABQgNAAgGgFg");
	this.shape_367.setTransform(902.8,378.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#714635").s().p("AgfAxIAEgjIA1g+IAFAXQADAZgIAOQgJARgRALQgOAHgNAAIgEAAg");
	this.shape_368.setTransform(904,386.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#805A4A").s().p("AggBDQgNgGAAgKIAMhoIBPgQIgGBvQgBALgNAIQgLAHgTACIgLAAQgLAAgGgDg");
	this.shape_369.setTransform(905.4,386.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FD8083").s().p("AggBDIgKgIQgDgDAAgFIALhqIBQgRIgGByQAAALgNAHQgPAJgOADIgKABQgMAAgIgGg");
	this.shape_370.setTransform(905,390.2);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FD5756").s().p("AgJBYQgXgagEgZQgDgQAIgVQAKgYAAgLQAAgHgDgLIgEgSQgCgEABgDIAFgsQABgFAFgBQAGgCADAEIAWAZQANAPAIAMIgVA1QgEATADARIAXBKQAGAVgHAUQgigfgJgLg");
	this.shape_371.setTransform(911.7,424.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FD8083").s().p("AAVD8QgkgEgfgWIhQg9QgMgLgIgRQgHgPABgMQACgRAKgWQALgXAFgMIADgIIAEgRIAHgvIgDgCQgXgcgFgQQgGgXARgWIAgg5QAPgXAQgRQAYgbAjgBQAxgDAlAaQAnAbARAjQATAlAAA2QAAAMgDAMIgrBtQgEATADARIAYBLQAGAUgIAUQgEAMgLAJQgHAHgKAEIgEABQgbAMgdAAIgPgBg");
	this.shape_372.setTransform(902.3,417);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#5F7386").s().p("AAaC5QgcgFgUgQIhfhHQgQgLgHgSQgHgRACgTIAIjWIEcBXIgKDbQgDAVgRAPQgNALgcANQgOAHgRAAQgJAAgKgCg");
	this.shape_373.setTransform(900.8,446.8);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#714635").s().p("AAFgIQgcgpgWgWIBbAzIgFBcQABgbglg1g");
	this.shape_374.setTransform(895.3,464.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#805A4A").s().p("AgBGfQgLgBgIgIQgIgJgBgLIgsrRQgCgeAUgXQAVgXAegCQAegCAXAUQAXAVACAeQABAFgBAEIgrLRQgBANgJAIQgJAIgLAAIgCAAg");
	this.shape_375.setTransform(894.2,470.6);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#805A4A").s().p("AgDGKQgJgJgBgLIg8q2IAAgBQgDgeAUgYQAUgXAfgDQAdgCAYAUQAXATADAfQABAHgBAGIgZEuIgBGFQAAANgJAJQgJAJgNAAQgMAAgIgIg");
	this.shape_376.setTransform(906.7,477.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#80909F").s().p("AgeA5QgZgBgBgNQgDgPAXgmQALgTAMgRIAxgLIAGAHQAIAKAHASQACAHgFAHIgeArQgGAKgRAHQgNAGgOAAIgEgBg");
	this.shape_377.setTransform(907.2,519.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#80909F").s().p("AgxAjQgPgEgGgJQgCgFAAgFIAAAAIAAgCQAEgRAygRQAZgIAYgFIAjADIAEALQAEAOgBAOQAAAHgHAFQgHAGgLACIhDAMIgMABQgJAAgJgDg");
	this.shape_378.setTransform(890.1,512.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#361500").s().p("Ag8BiQAHgZgDgMQgahaAIg/IAMguIByAAIAZDpIiIAsQgHgSAGgXg");
	this.shape_379.setTransform(897.3,387.9);

	this.instance_20 = new lib.Path_1_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(895.9,516,1,1,0,0,0,27.4,15.8);
	this.instance_20.alpha = 0.039;

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#54200C").s().p("AgdARIAghTIAWArQAPAzglAng");
	this.shape_380.setTransform(916.1,402.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FD5756").s().p("AhbBhQgNgMgBgSQAAgSAMgNIB8iDQANgNASAAQARgBANANQANAMABASQAAASgMANIh8CDQgNANgTAAQgQAAgNgMg");
	this.shape_381.setTransform(890,412.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#81C3FD").s().p("AATCCQgLgCgIgHIjDi1QgMgLAAgQQgBgRALgMQALgMARgBQAQAAAMALICwCiICMgsQAKgCAJAEQAJAFAEAKQADAJgEAJQgEAIgIAEIiaBPQgIAEgIAAIgFAAg");
	this.shape_382.setTransform(407.2,492.3);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#805A4A").s().p("AiHCRIASiRQAMhZALglIAAgCQAUg5ApgaQAVgNAQgBIA2ACQAVABASAJQATALALAQQAJANACAOIAAACQgBgDgGgIQgLgRgSgKQgSgJgVgBIg3gDQgPABgVANQgqAbgTA5IAAABQgMAlgMBZIgSCRQgEAiAHAfQgMgoAFgqg");
	this.shape_383.setTransform(376.9,467.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#54200C").s().p("AAAEdQg+gHgpg7Qgqg8AJhKIASiQQAMhZAMgmIAAgBQATg5AqgaQAVgNAPgCIA3ADQAVABASAJQASAKALARQAJANACAOIABAcQgDAjgUAfIgKAQIgCgRQgFABgFAEQgJAKADAVQACAQAMABIAEAAIAAAQQABA/gDALQgHAagsAfQgWAQgDAnQgBAVAGAzQAGAtgEAQQgFAXgXAAIgGgBg");
	this.shape_384.setTransform(377,473.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#2C98EA").s().p("Ag0hGIBpBmQAAALgWAcg");
	this.shape_385.setTransform(395.6,493.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#81C3FD").s().p("AAvEpQgxgBhBgmQg6ghgdgkQgcgkALgYIAAgBIAchPQAEgTgFgVIgRhsQgGgcACg2QAEhRAigZQASgMAkAEIA3AJQARAAAoAZQAmAXAOAPQAGAHALAUIASAgIAjA+QATAYgIAZQgFARgZAeIgCADIgBgCIAAACIARDgQADAJgCAIIAAABQgDAUgbAQQgmAWgmAAIgEAAg");
	this.shape_386.setTransform(383.5,502.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#2A569F").s().p("AAyCmIithLQgVgMgBgYIAFgwQAAgfgQgbQgOgagEgXQgEgXAAg2IFKBmIAbDAQAAAYgVAMIgTANQgUAMgYAAQgZAAgUgMg");
	this.shape_387.setTransform(384.1,534.2);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFC8AB").s().p("AgEgLIg0g7IBxAqIgLBjQAAgUgyg+g");
	this.shape_388.setTransform(379.3,551.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFE2D3").s().p("ABcFSQgKgDgBgIIAAAAIjdqXICVgDICEKMIgBAAIAAACQACAHgHAHIgHAFQgMAGgLAAQgGAAgHgCg");
	this.shape_389.setTransform(396.7,558.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#80909F").s().p("Ag3A3QgGgCgDgFIAAAAQgHgOAAgNIABgLIA6gpQA8gnATATIABABIAAABIADADQADAHgDAJQgEAJgJAIIg5A0QgMAMgRAFQgIACgGAAQgHAAgGgDg");
	this.shape_390.setTransform(411.7,590.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFE2D3").s().p("AAdCBQgtgDgogeQgugigJg2QgIg3AXgkQAVgiArgHQAzgJAfAKQAsAPAIAzQAKA6ACAtQACA9gPALQgIAGgYADQgPACgNAAIgMAAg");
	this.shape_391.setTransform(380.7,460.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#5EAFFF").s().p("AAaAhIhFghIgGgdIBjgDIgVBBg");
	this.shape_392.setTransform(380,474);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#7DC2FF").s().p("AgwgPIgGgdIBjgEQAAAEAFAuIAFAug");
	this.shape_393.setTransform(380.6,475.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FD6160").s().p("AiNBTIEblIIgBHrg");
	this.shape_394.setTransform(396.3,487.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFC8AB").s().p("AgSAOQgDgCgBgEQgCgEACgCQACgDADgBIAdgKQADgCAEACQADABABADQADAJgIACIgdALIgDAAIgEAAg");
	this.shape_395.setTransform(430.5,494.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFC8AB").s().p("AgQAQQgEgCgBgDQgCgDABgEQABgDAEgBIAbgOQAIgDAEAHQACAEgBADQgCADgDABIgbAOIgEABIgDAAg");
	this.shape_396.setTransform(431,492.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFC8AB").s().p("AgRASQgCgDAAgDQAAgEACgDIAWgVQACgDAFAAQADAAACADQADACAAAEQAAAEgDACIgUAWQgDACgEAAQgEAAgDgCg");
	this.shape_397.setTransform(429.5,490.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFC8AB").s().p("AgEAYQgDAAgCgDQgCgDAAgEIAGgeQACgIAIABQADABADADQACADgBADIgGAeQgCAHgFAAIgDAAg");
	this.shape_398.setTransform(426,491.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFC8AB").s().p("AgVAWQgJgJAAgNQAAgMAJgKQAJgJAMAAQANAAAJAJQAJAKAAAMQAAANgJAJQgJAKgNgBQgMABgJgKg");
	this.shape_399.setTransform(427.5,493.8);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FD6160").s().p("AhpAIIDThFIiWB7g");
	this.shape_400.setTransform(414,503.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FD8083").s().p("AiNj1IEcFIIkdCjg");
	this.shape_401.setTransform(424.7,487.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#80909F").s().p("AgLAvQg9gjACgJIAagzIBAARIgEATQAMgGALAEIASAFQAMAEACALQABANgLAGIgbAPQgQAJgQAAQgGAAgHgCg");
	this.shape_402.setTransform(372.8,595.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFE2D3").s().p("AhhFkIA5k6IgLmcICVAHIgsGhIhbE9g");
	this.shape_403.setTransform(378.1,556.1);

	this.instance_21 = new lib.Path_2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(395.2,594.9,1,1,0,0,0,30,17.3);
	this.instance_21.alpha = 0.039;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.instance_20},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.instance_19},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.instance_18},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215}]}).wait(120));

	// Layer_1
	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("transparent").s().p("EhWiBWkMAAAitGMCtGAAAMAAACtGg");
	this.shape_404.setTransform(541,538.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_404).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(527,524.4,1107.9,1107.9);
// library properties:
lib.properties = {
	id: '14DEBCF967EFB345B8F8E7240CB91542',
	width: 1080,
	height: 1080,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['14DEBCF967EFB345B8F8E7240CB91542'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;

jQuery(document).ready(function(){

  canvas = document.getElementById("canvas");
  anim_container = document.getElementById("animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  var comp=AdobeAn.getComposition("14DEBCF967EFB345B8F8E7240CB91542");
  var lib=comp.getLibrary();
  handleComplete({},comp);

});