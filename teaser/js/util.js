dojo.require("dojox.gfx");
dojo.require("dojox.gfx.fx");

var allGroup, allShapes = [], regularFill;
var triggered = false;

dojo.ready(function(){
	surface = dojox.gfx.createSurface("surfaceElement",760,200);
	// Regular fill
	regularFill = {type:"linear", x1:0, y1:0, x2:0, y2:900, colors: [{ offset:0, color:"#fff"},{ offset:1, color:"#fff"}]};
	
	letterD = surface.createPath("M102.178,15.478v42.231V81.7v30.015c-6.361,15.638-21.996,25.178-37.63,25.178 c-23.688,0-39.794-20.304-39.794-40.606c0-21.996,17.799-39.795,39.794-39.795c10.254,0,19.051,3.588,25.819,9.136l2.37-15.093 c-8.088-4.77-17.663-7.579-28.188-7.579c-21.996,0-49.036,13.272-53.33,45.683c-0.525,3.966-0.97,4.741,0,16.106 c0.144,1.686,0.879,5.076,1.692,7.581c8.46,27.071,33.026,38.103,51.638,38.103c14.246,0,27.714-5.651,37.63-15.158v12.181h16.919 V15.478H102.178z").setFill(regularFill);
	letterOjo = surface.createPath("M177.936,44.12c-21.996,0-50.339,13.125-53.33,45.683c-0.368,4.011-0.724,8.317,0,16.106 c0.157,1.686,0.879,5.076,1.692,7.581c8.459,27.071,33.026,38.103,51.638,38.103c28.764,0,54.143-22.875,54.143-54.143 C232.079,68.687,209.204,44.12,177.936,44.12z M177.936,138.057c-23.688,0-39.794-20.304-39.794-40.606 c0-21.996,17.798-39.795,39.794-39.795c24.5,0,40.607,20.304,40.607,39.795C218.543,121.95,198.239,138.057,177.936,138.057z M200.744,23.816h-43.991c-0.813,0.879-1.692,0.879-1.692,2.571c0,2.505,0.879,2.505,0.879,3.384h43.991 c0.813-0.879,1.692-0.879,1.692-3.384C201.624,24.695,200.744,24.695,200.744,23.816z 240.586,40.159 254.122,40.159 254.122,19.855 240.586,19.855 M254.122,46.927h-13.536l0.136,96.171c-0.271,5.987-3.856,18.85-15.33,26.972l8.833,12.313 c0,0,20.842-22.264,19.897-38.439 M315.427,44.12c-21.996,0-50.339,13.125-53.33,45.683c-0.368,4.011-0.724,8.317,0,16.107 c0.157,1.686,0.879,5.076,1.692,7.58c8.459,27.072,33.026,38.104,51.638,38.104c28.764,0,54.143-22.875,54.143-54.143 C369.57,68.687,346.696,44.12,315.427,44.12z M315.427,138.057c-23.688,0-39.794-20.303-39.794-40.606 c0-21.996,17.798-39.795,39.794-39.795c24.5,0,40.607,20.304,40.607,39.795C356.035,121.951,335.731,138.057,315.427,138.057z M338.236,23.816h-43.991c-0.813,0.879-1.692,0.879-1.692,2.571c0,2.505,0.879,2.505,0.879,3.384h43.991 c0.813-0.879,1.692-0.879,1.692-3.384C339.115,24.695,338.236,24.695,338.236,23.816z").setFill(regularFill);
	letterJTop = surface.createRect({x: 240, y: 20, width: 14, height: 19 }).setFill(regularFill);
	letterC = surface.createPath("M478.501,143.262c-8.883,5.072-18.129,7.792-27.554,7.792c-29.009,0-52.756-23.929-52.756-52.934 c0-29.187,23.747-52.935,52.756-52.935c9.606,0,19.031,3.08,27.917,7.976l-6.53,13.597c-6.887-3.807-14.318-6.165-21.387-6.165 c-21.031,0-37.35,16.315-37.35,37.527c0,21.209,16.318,37.527,37.35,37.527c7.068,0,13.958-2.359,20.846-5.984L478.501,143.262z").setFill(regularFill);	
	letterOnf = surface.createPath("M535.793,45.185c29.187,0,52.938,23.749,52.938,52.935c0,29.005-23.751,52.934-52.938,52.934 c-29.005,0-52.934-23.929-52.934-52.934C482.859,68.934,506.788,45.185,535.793,45.185z M535.793,135.647 c21.209,0,37.524-16.318,37.524-37.527c0-21.212-16.315-37.527-37.524-37.527c-21.027,0-37.527,16.315-37.527,37.527 C498.266,119.329,514.766,135.647,535.793,135.647z M681.917,147.429h-15.591V86.879c0-14.684-11.603-26.287-26.467-26.287 c-14.683,0-26.285,11.421-26.285,25.743v61.093h-15.591V86.336c0-22.48,19.216-41.333,41.876-41.333 c23.205,0,42.058,19.035,42.058,41.876V147.429z M707.125,147.429h-15.409V73.464c0-28.461,25.379-51.484,55.471-51.484v15.409 c-18.853,0-33.898,11.058-38.433,26.649h32.088v15.589h-33.717V147.429z").setFill(regularFill);
	
	// Put all pieces together
	allGroup = surface.createGroup();
	[letterD, letterOjo, letterC, letterOnf].forEach(function(item) {
		allGroup.add(item);
		allShapes.push(item);
	});
	
	dojo.query(".trigger").forEach(function(item, index, array){
		dojo.connect(item, "onmouseover", function(evt) {
			m11162011(evt.target);
		});
	});
	var cfp = dojo.byId("cfp");
	dojo.connect(cfp,'onmouseover', function () {
	  dojo.byId("ring").play();
	});
	dojo.connect(cfp, 'onmouseleave', function () {
	  dojo.byId("ring").pause();
	});
	
	setTimeout(function () {
  	pulseD = pulsate(letterD, "#fff", "#f4db33").play();
  	pulseC = pulsate(letterC, "#fff", "#f4db33").play();
	}, 2000);
});


function pulsate(theShape, startColor, endColor) {
	pulse = new dojox.gfx.fx.animateFill({
		duration: 1200,
		shape: theShape,
		color: { start: startColor, end: endColor },
		repeat:-1
	});
	
	return pulse;
}

function m11162011(node) {
	var nodeId = dojo.attr(node, "id");
	if(nodeId=="triggerD") {
		dc2451();
	} else {
		dm2551();
	}
}

function dc2451() {
	pulseD.stop();
	if(console && console.warn)  // for our IE comrades
  	console.warn("Nothing is an accident");
	dojo.style("script", "display", "block");
	dojo.style("triggerC", "cursor", "crosshair");
	letterD.setFill("#f4db33");	
}

function dm2551() {
	if(dojo.style("script", "display") == "block" && triggered == false) {
		triggered = true;
		pulseC.stop();
		letterC.setFill("#f4db33");
		dojo.query("#script span").forEach(function(item){
			dojo.animateProperty({
				node: item,
				duration: 1200,
				properties: {
					color: {
						start: "white",
						end: "#f4db33"
					}
				},
				onEnd: function() {
					dojo.query(".warn").style({
						"color": "red"
			        });
				}
			}).play();
		});
	}
}