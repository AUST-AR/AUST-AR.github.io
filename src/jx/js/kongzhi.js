window.onload = function(){
	Crafty.init(500, 500, document.getElementById("game"));
	Crafty.e('2D, DOM, Color, Twoway, Canvas').attr({x: 100, y: 100, w: 100, h:100, rotation:45}).color('#F0F').twoway(200);
}