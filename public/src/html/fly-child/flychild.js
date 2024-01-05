(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.머리카락 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B352A").s().p("ABWEqIlXlFIikBUQgRg4AVhAQApiDC/gtIApgIQAwgOAcgfQAbgdgpBPQBlgaByAEIhBAjQhDAkgDAGQgDAEAjAHQAoAIAuADQCEAHA2gsQAAASgLAUQgVAog0AMIBHAGQBTACA6gYQgYAkg7BFQgjAmgzAQIAHgBQBngDASgLQgTBQgwBLQhSCCh1AAQgSAAgTgDg");
	this.shape.setTransform(-0.0053,30.0867);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4B352A").s().p("ABhEnIlYlFIikBUQgRg3AVhBQAqiDC+gtIAqgIQAjgEAtgWQAtgXhAA2QBigCBsgzQgZA0gzAfQgvAcgFACIAjAGQAnAIBWgHQBWgIA5glQgJAhgQAdQgQAdgoARIBHAGQBJgFAwgjQgOAwgqA5QgrA4gxAQIAGgBQBUgFAYggQgRBnhCBwQg2BehrAAQgWAAgXgEg");
	this.shape_1.setTransform(-1.0553,30.3702);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4B352A").s().p("ABaEhIlYlFIikBVQgRg4AVhBQAqiDC+gtIAqgIQAfgEA9gZQA8gYhbA6QBigBB6ggQgmAgg0AfQgvAcgEACIAkAFQAhAEBSgMQBRgMBVgHQgfARgbAdQgcAdgKARIBEgGQBIgEBBAAQgfAXgsA4QgtA3gpATIAGgBQBSgRBAAZQg+Aug+B3Qg0BjhrAAQgVAAgXgEg");
	this.shape_2.setTransform(-0.3803,30.9321);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4B352A").s().p("ABbEdIlYlFIikBUQgRg3AVhBQAqiDC+gtIArgKQAdgFBPgQQBOgQh+AsQBsgXB5AIIhnAzIgwAXIAlAHQAgAGBRgHQBQgGBQgzQgXBDgXAYQgXAZgTAGQAfAJApABQBFAIA+gwQgUA1gwA0QgvAzgsARIAGgBQBSALBCgfQgRBKhVB2QhIBjhvAAQgVAAgXgDg");
	this.shape_3.setTransform(-0.4803,31.3925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,0,86,60.3);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AkYCFIGdmdICUCUImdGdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,-28.1,56.2,56.2);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AkYCFIGdmdICUCUImdGdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,-28.1,56.2,56.2);


(lib.r_arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B4D681").s().p("AiMhNIARgYIEICrIgGAgg");
	this.shape.setTransform(13.425,43.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B4D681").s().p("Ah4g7IARgZIDgCIIgFAhg");
	this.shape_1.setTransform(17.625,32.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B4D681").s().p("AhFgdIARgZIBrBBIAOAsg");
	this.shape_2.setTransform(22.05,14.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B4D681").s().p("Ahog5IARgYIDACDIgGAhg");
	this.shape_3.setTransform(20.575,25.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#97BD66").s().p("AhignIAig0ICKBVIAZBLIgEAXg");
	this.shape_4.setTransform(21.625,21.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#97BD66").s().p("Ag1AOQA1hUABgJIA1Cfg");
	this.shape_5.setTransform(22.125,8.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#97BD66").s().p("AiMg0IAthDIDsCPIgRBgg");
	this.shape_6.setTransform(15.1,38.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#97BD66").s().p("Ah0guIAdgrIDLCLIgHAog");
	this.shape_7.setTransform(18.85,28.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#97BD66").s().p("AiZg6IAhgxIESCzIgGAkg");
	this.shape_8.setTransform(11.45,46.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4C2BC").s().p("Ak3F3IHrs7ICEBOInrM7g");
	this.shape_9.setTransform(-0.3,57.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.r_arm, new cjs.Rectangle(-31.5,0,63,103.3), null);


(lib.mouse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("AgIAaQgIgJgDgPQgDgNACgLQADgLAHgBQAGgBAKAKQAKAKAEAPQAEARgFAIQgFAIgIABIgCABQgGAAgGgJg");
	this.shape.setTransform(-4.2261,6.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhtAYIgLgYIDrgnIAHAaQgNAKgxAOQgvAOg1ALQgPAEgMAAQgcAAgOgQg");
	this.shape_1.setTransform(1.65,3.9538);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BD606D").s().p("AgsA+QglgYACgjQABgcAggUQAfgTApADQAcABAaANQgMBcg7ANQgTAFgSAAIgQgBg");
	this.shape_2.setTransform(7.4699,29.5328);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0E0E0E").s().p("AhSBMQgnhFgliWIA2gIIAMAYQAUAXAwgKQA1gLAwgPQAwgPANgKQAdCFgMBYQgagNgcgBQgqgDgfATQgfAUgBAdQgCAjAkAYQhCgIguhSg");
	this.shape_3.setTransform(-0.0244,19.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},6).wait(115));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,0,31.8,35.8);


(lib.Ellipse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E0E0E").s().p("Ai+EKQhrhUgTiJQgUiJBPhuQBPhuCEgTQCCgSBrBUQBrBTATCKQAUCIhPBuQhQBviDASQgYAEgXAAQhnAAhXhFg");
	this.shape.setTransform(33.325,33.3583);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ellipse, new cjs.Rectangle(1.2,-0.1,64.3,67), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkLBSICzlbIFkC4Ii0Fbg");
	mask.setTransform(26.8,26.625);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C2BC").s().p("AhRCaQgigSgRgfQgNgYACgTQACgigDgRQgIgtgHgOIgLgYQgFgOAEgIQAFgIANACQALABALAIQAKAIAHAcQAHAdABABQAIAJAMgIQAKgHAJgSQAGgKAOgkQAPgmAHgQQALgWAPAGQAQAGgGASQgOA0gGAcQgCAMAHACQAFABAHgKQAhg/ATgcQAOgUAQAMQAQALgKAUQgTAmgeAwQgHALAGAGQAFAFAHgGIAegcQAagaALgIQAPgKALALQAMALgNAOIg+BHQgJALAHAEQAFAEAJgEQAWgIAagMQAVgIAEAOQAEAOgRAKQhGAsgfAjQgZAggiAMQgRAGgQAAQgYAAgYgNg");
	this.shape.setTransform(27.5128,29.4068);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(10.2,12.7,34.7,33.400000000000006), null);


(lib.eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0E0E0E").ss(1,1,1).p("AAPgGQAAAFgEAEQgFAEgGAAQgFAAgFgEQgCgDAAAAQgCgDAAgD");
	this.shape.setTransform(0,2.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(7).to({_off:false},0).to({_off:true},5).wait(37));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E0E0E").s().p("AgEARQgHgCgEgGQgEgGACgHQADgHAGgEQAHgDAGABQAHACAEAHQAEAHgCAGQgCAHgHAEQgEACgEAAIgFgBg");
	this.shape_1.setTransform(-0.022,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},7).wait(5).to({_off:false},0).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,0,5,4.2);


(lib.book = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#243038").s().p("AEyF5QgzgGgkgQQgggPgNgUIpcqsQAAABABAAQAAAAABAAQAAgBABAAQAAAAABgBQADgCACABQATAOAdAJQAjALAggCQAygFAbgMQAagMgBgQIJ7LfQgCAQgjAGQgQACgVAAQgWAAgdgDg");
	this.shape.setTransform(-9.6875,116.4315);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A3B48").s().p("Ag7ELIrErZIOjDxIJcKsg");
	this.shape_1.setTransform(-68.95,102.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A3B48").s().p("Aj3JMIpyrSQgDgEABgFQABgEAEgBIUKm6QADgBADABQABAAAAABQABAAAAABQAAAAABABQAAAAAAABIG+ONQACADgCADQgBAEgEABIxWEBIgDAAQgDAAgBgDg");
	this.shape_2.setTransform(57.9625,92.9808);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#243038").s().p("ALwHFI3kt2QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIACgLQABgGAEABIOaDsIJLKXQADADgDADQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgDgBg");
	this.shape_3.setTransform(-70.0625,99.3204);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#243038").s().p("ANnHYI7RnYQgGgBAAgGIAAgLQAAgFAGgDIUPm8QAHgCADAGIHBOTQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAABIAAALQAAAEgDACQgCACgDAAIgCAAg");
	this.shape_4.setTransform(57.9,78.5893);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#243038").s().p("AExF3QgygGgkgQQghgPgNgUIpaqqIAHAGQAQAMAgAGQAhAGAigDQAugDAbgLQAZgKAEgOQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIJ2LaQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgCAPgjAGQgQACgTAAQgXAAgegDg");
	this.shape_5.setTransform(-9.6875,114.3053);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#DEDEDE").ss(0.5).p("AHnCSQgCgbgoghQhShCjBgZQgXgBhFgMQiJgXjlgyIjKg2");
	this.shape_6.setTransform(-93.1894,69.6334);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DEDEDE").ss(0.5).p("AHnCSQgLgmgugoQhbhOiogDQgXABhFgKQiKgTjlgyIjKg2");
	this.shape_7.setTransform(-91.8394,68.6334);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#DEDEDE").ss(0.5).p("AHlCVQgIgtgngsQhOhWidAGQgygBhYgJQivgTjBgtIi5gy");
	this.shape_8.setTransform(-90.6904,68.0003);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DEDEDE").ss(0.5).p("AHoCVQgKgygogxQhQhfiXAMQgyAChYgHQiwgOjBgvIi/gu");
	this.shape_9.setTransform(-89.3837,67.5032);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CBCBCB").s().p("AoEkLIBFggIC/AuQDBAuCwAPQBYAGAygCQCXgNBJBiQAkAwAGA0Il2Ewg");
	this.shape_10.setTransform(-91.775,81.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#DEDEDE").ss(0.5).p("AqGECQgBgpA/g1QB/hrFDg9IDBg0QEFhNFLh8");
	this.shape_11.setTransform(26.5372,60.741);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#DEDEDE").ss(0.5).p("AqGECQgJgpA6g1QB2hqFVg6IDcg2QEYhPEhh8");
	this.shape_12.setTransform(26.7134,58.2952);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#DEDEDE").ss(0.5).p("Ap+EBQgOgxA5g6QByh0FngwIA3gKQBGgPBUgWQELhHEih8");
	this.shape_13.setTransform(25.8513,57.2201);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CBCBCB").s().p("AsVAeIg9gFQgOgvA5g7QByh0FngyIAwgGQBBgMBPgVQD/hCE/iIIBaA5IFMOYg");
	this.shape_14.setTransform(44.978,79);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DEDEDE").s().p("Aq9EeQALghAhgsQBDhWBugsQB7gzBDgdIChhLQByg1DmioQB0hTBchJICiGnIB1CNI0aFYg");
	this.shape_15.setTransform(30.8,48.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CBCBCB").s().p("AgDGnQpAjKAHhBQAMhsB7hRQAvggBegoIBzgsQBwguBeg1QCEhKDCiYQBihMBGg9IAxANIAFS7QkhhZkfhlg");
	this.shape_16.setTransform(16.2952,63.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DEDEDE").s().p("AjyABIjsk9IAfAlQApAvA3AlQCvB8DzABIA8gCQAkAAAgAIQBoAYAjBTQAlBeA6BjQAdAyAVAfg");
	this.shape_17.setTransform(-73.475,67.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DEDEDE").s().p("AqvGFQgGgyAphCQBSiEDshMQDnhJDdimQC4iKgChwQCnGjDdGug");
	this.shape_18.setTransform(27.7617,39.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DEDEDE").s().p("AjdgUIkWkTQBmBOB4BCQB3BCD2gGIA8gDQAkABAgAHQBoAYAjBUQAlBdA6BkQAdAyAVAfg");
	this.shape_19.setTransform(-75.5625,70.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DEDEDE").s().p("ArLF+QgGgzAphCQBSiEDshLQDnhKDdimQC3iJAuhVIGOMpg");
	this.shape_20.setTransform(30.6367,40.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-2.7,292,157.2);


(lib.body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AF4737").s().p("AggDaQiTiZATjYQAUjZA2A0QAbAaAXBGIABArQADA1AJAyQAeCiBXBNQBXBNgXAyQgMAagdAJQhNghhIhMg");
	this.shape.setTransform(19.8013,32.6974);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B4D681").s().p("AjvACIHagsIALAnInsAug");
	this.shape_1.setTransform(-5.1,49.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B4D681").s().p("AjUAEIGlgwIALAmIm3A0g");
	this.shape_2.setTransform(-6,38.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#97BD66").s().p("AjBAWIFiiCIAyCoImlAxg");
	this.shape_3.setTransform(-6.225,27.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B4D681").s().p("AkJgFIIMgcIAMAmIodAdg");
	this.shape_4.setTransform(-3.95,61.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B4D681").s().p("Ak6gNIJsgMIAMAnIp7AMg");
	this.shape_5.setTransform(-1.25,85.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B4D681").s().p("AkgAAII5gmIAMAmIpJAng");
	this.shape_6.setTransform(-2.975,72.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#97BD66").s().p("AkUgYIIdgdIAUBEIo5Ang");
	this.shape_7.setTransform(-3.375,67.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#97BD66").s().p("AkwgRIJIgnIAfBlIpsAMg");
	this.shape_8.setTransform(-1.7,78.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#97BD66").s().p("AlIgnIJ6gMIAaBXIqXAQg");
	this.shape_9.setTransform(-0.125,92.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#97BD66").s().p("AjhgJIG3g1IAYBQInbAtIAMhIg");
	this.shape_10.setTransform(-5.375,43.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#97BD66").s().p("Aj+gIIHsguIAZBSIoNAbg");
	this.shape_11.setTransform(-4.3,55.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#97BD66").s().p("AkdhxQARhrAPgxIFhiFIDpMXIqZAOQANktAijXg");
	this.shape_12.setTransform(-0.1,56.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

	// Layer_3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AF4737").s().p("AgBFdQgphDgbhmQg1jLBKizQBTjJAlBMQATAlACBOIgSAnQgUAygNAyQgpCeAtBrQAuBrgqAkQgSAOgYAAIgJAAg");
	this.shape_13.setTransform(-26.8016,37.5484);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(-36,0,72.1,97.2), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhoBpQgsgsAAg9QAAg8AsgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	mask.setTransform(0,14.85);

	// Layer_2
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(-18,-3.15);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(18.45,31.85);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:18.45,y:31.85},19).wait(21));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.4)").s().p("AhoBpQgsgsAAg9QAAg8AsgsQAsgrA8gBQA9ABAsArQArAsAAA8QAAA9grAsQgsArg9AAQg8AAgsgrg");
	this.shape.setTransform(0,14.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(40));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.8,0,29.700000000000003,29.7);


(lib.l_arm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(18.35,13.9,1,1,0,0,0,26.8,26.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B4D681").s().p("AiRg7IADggIEgCdIgPAag");
	this.shape.setTransform(-19.425,86.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B4D681").s().p("Ah8grIADggID2B9IgPAag");
	this.shape_1.setTransform(-22.85,97.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B4D681").s().p("Ag1gHIgSgrICQBKIgPAbg");
	this.shape_2.setTransform(-26.1,115.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B4D681").s().p("AhsgpIAEgiIDVB8IgPAbg");
	this.shape_3.setTransform(-25.275,104.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#97BD66").s().p("AhHALIgfhIIADgYIDKB1IgeA2g");
	this.shape_4.setTransform(-26.125,108.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#97BD66").s().p("Ag3hNIBvA6QgvBXAAAKg");
	this.shape_5.setTransform(-25.925,122.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#97BD66").s().p("AiOgOIAKhgIEUCXIgpBGg");
	this.shape_6.setTransform(-20.7,91.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#97BD66").s().p("Ah3gpIAFgpIDqB3IgaAug");
	this.shape_7.setTransform(-23.825,101.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#97BD66").s().p("Aieg8IAEgkIE5CPIgeAyg");
	this.shape_8.setTransform(-17.8,83.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F4C2BC").s().p("AkDFdIF9r+ICKBFIl9L+g");
	this.shape_9.setTransform(-6.825,66.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.l_arm, new cjs.Rectangle(-36.4,-12.7,81.6,142.6), null);


(lib.glass = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AgMAEIAZgG");
	this.shape.setTransform(-0.05,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").p("ACSglQAQA7ggA2QgfA2g9AQQg7AQg2ggQg2gfgQg9QgPg7Afg2QAfg2A9gQQA7gPA2AfQA2AfAQA9g");
	this.shape_1.setTransform(-16.6139,20.3861);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").p("ACRglQAQA7gfA2QggA2g8AQQg8AQg1ggQg2gfgQg9QgQg7Agg2QAfg2A9gQQA7gQA2AgQA2AfAPA9g");
	this.shape_2.setTransform(16.6,15.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Symbol_3
	this.instance = new lib.Symbol3();
	this.instance.setTransform(-16.9,20.35,1,1,0,0,0,0,14.8);

	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(16.65,15.25,1,1,0,0,0,0,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.glass, new cjs.Rectangle(-63,-30.8,95.7,67.3), null);


(lib.face = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.glass();
	this.instance.setTransform(-17.25,36.35,1,1,0,0,0,-0.2,17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_7
	this.instance_1 = new lib.eye();
	this.instance_1.setTransform(-9.15,36.35,1,1,0,0,0,-0.1,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_5
	this.instance_2 = new lib.eye();
	this.instance_2.setTransform(-24.05,38.3,1,1,0,0,0,-0.1,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_6
	this.instance_3 = new lib.mouse();
	this.instance_3.setTransform(-12.25,61.1,1,1,0,0,0,-0.1,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2696E").s().p("AgSAMQgJgCgBgFQgBgFAIgDQAIgFAMgCQALgCAJABQAKACAAAFQABAEgIAFQgIAFgMACIgLABIgJgBg");
	this.shape.setTransform(-28.621,44.0929);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2696E").s().p("AgSAMQgJgCgBgFQgBgFAIgDQAIgFAMgCQALgCAJABQAKACAAAFQABAEgIAFQgIAFgMACIgKABIgKgBg");
	this.shape_1.setTransform(-0.5709,38.9429);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4B352A").s().p("AAWhEQgtgNgxAAIgoADQgJBFhwA8Qg4Afg2ARQgCg3Amg4QBMhyDHgMQDGgMBtB2QA2A6APA+IhwA0Qg/iliTgrg");
	this.shape_2.setTransform(-1.905,26.6739);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4C2BC").s().p("AgqA6QgZgSgEgeQgEgcASgYQASgYAegFQAcgEAZASQAYASAEAeQAEAdgSAYQgSAYgeAEIgKAAQgXAAgTgOg");
	this.shape_3.setTransform(24.225,47.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F4C2BC").s().p("Ai+EKQhrhUgTiJQgUiJBPhuQBQhuCDgTQCDgSBqBUQBrBUATCJQAUCIhPBvQhPBuiEATQgXADgXAAQhoAAhXhFg");
	this.shape_4.setTransform(-7.525,51.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C69A9C").s().p("AgpA4QgXgRgEgdQgEgcARgXQARgXAdgEQAcgEAXARQAYARADAdQAEAcgRAXQgRAYgdADIgKABQgWAAgTgOg");
	this.shape_5.setTransform(-37.9241,59.3259);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 머리카락
	this.instance_4 = new lib.머리카락();
	this.instance_4.setTransform(5.95,30.85,1,1,0,0,0,0,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.face, new cjs.Rectangle(-80,-11.8,129,97), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// book
	this.instance = new lib.book();
	this.instance.setTransform(0,196.3,1,1,0,0,0,0,77.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.8377},29,cjs.Ease.get(0.91)).to({scaleX:1},30,cjs.Ease.get(0.91)).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#357298").s().p("AAjCGQl1gTh7gxQAkgtBBgtQCChdCRgHQDmgJE9gKIhOEeIgeABQiVAAiqgKg");
	this.shape.setTransform(-31.325,186.7045);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	// face
	this.instance_1 = new lib.face();
	this.instance_1.setTransform(-21.8,69.75,1,1,0,0,0,-0.3,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// _Ellipse_
	this.instance_2 = new lib.Ellipse();
	this.instance_2.setTransform(-27.95,82.35,1,1,0,0,0,32,33.5);
	this.instance_2.alpha = 0.1992;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// body
	this.instance_3 = new lib.body();
	this.instance_3.setTransform(-14.35,128.2,1,1,0,0,0,0,48.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// l_arm
	this.instance_4 = new lib.l_arm();
	this.instance_4.setTransform(0.15,111.8,1,1,0,0,0,-31.8,111.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-31.7,rotation:12.7433,x:0.2},4).to({regX:-31.8,rotation:0,x:0.15},5).to({regX:-31.7,rotation:12.7433,x:0.2},5).to({regX:-31.8,rotation:0,x:0.15},5).to({regX:-31.7,rotation:12.7433,x:0.2},5).to({regX:-31.8,rotation:0,x:0.15},5).to({regX:-31.7,rotation:12.7433,x:0.2},5).to({regX:-31.8,rotation:0,x:0.15},5).to({regX:-31.7,rotation:12.7433,x:0.2},5).to({regX:-31.8,rotation:0,x:0.15},5).to({regX:-31.7,rotation:12.7433,x:0.2},5).to({regX:-31.8,rotation:0,x:0.15},5).wait(1));

	// Layer_8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF4737").s().p("AAZFpIkameICQk1IDSApICQH9IAMAeQAKAlgIAdQgYBPiZAAQgZAAgcgCg");
	this.shape_1.setTransform(13.6901,130.3297);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(60));

	// r_arm
	this.instance_5 = new lib.r_arm();
	this.instance_5.setTransform(-63.1,136.95,1,1,0,0,0,0,51.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(60));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146,-12.7,292,286.3);


// stage content:
(lib.fly_child = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(150,134.15,1,1,0,0,0,0,130.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:170.05},29,cjs.Ease.get(1)).to({y:134.15},30,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(154,166.1,142,147.1);
// library properties:
lib.properties = {
	id: '2CB5ACE156604BC088EAB37C230118F1',
	width: 300,
	height: 350,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
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
an.compositions['2CB5ACE156604BC088EAB37C230118F1'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
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
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;