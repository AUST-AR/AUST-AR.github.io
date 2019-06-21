 function resizeCanva() {  
    $("#bgcanva").attr("width", $(window).get(0).innerWidth);  
    $("#bgcanva").attr("height", $(window).get(0).innerHeight);  
	canvaMouseOn();
 };      


function initCanva(){
	var bgcanva = document.getElementById("bgcanva");
	$(window).resize(resizeCanva); 
	resizeCanva();
	$("#bgcanva").attr("width",$(window).get(0).innerWidth);
	$("#bgcanva").attr("height",$(window).get(0).innerHeight);
	canvaMouseOn();
}

function showImage(){
	$(".centerbubble").fadeOut(0);
	$(".gamebubble").fadeOut(0);
	$(".version").fadeOut(0);
	$(".math").fadeOut(0);
	$(".graphic").fadeOut(0);
	$("#bgcanva").fadeOut(0);
	$(".centerbubble").fadeIn(500);
	window.setTimeout(function(){
		$(".gamebubble").fadeIn(500);
	}, 700);
	window.setTimeout(function(){
		$(".version").fadeIn(500);
	},900);
	window.setTimeout(function(){
		$(".math").fadeIn(500);
	},1100);
	window.setTimeout(function(){
		$(".graphic").fadeIn(500);
	},1300);
	window.setTimeout(function(){
		$("#bgcanva").fadeIn(500);
	},1500);
}

function drawEye(ctx, x, y, mx, my){
	var eyeimg = document.getElementById("image");
	var width = eyeimg.width;
	var height = eyeimg.height;
	var bigradius = height/2;
	var smallradius = 20;
	var centerx = x + width/2;
	var centery = y + height/2;
	if(Math.sqrt((centerx-mx)*(centerx-mx) + (centery-my)*(centery-my))>250)
		return ;
	var len = Math.sqrt((mx-centerx)*(mx-centerx) + (my-centery)*(my-centery)) + smallradius;
	//console.log(width);
	if(len >= bigradius){
		var vx = mx - centerx;
		var vy = my - centery;
		var e = new Array(2);
		e[0] = vx/Math.sqrt(vx*vx + vy*vy);
		e[1] = vy/Math.sqrt(vx*vx + vy*vy);
		var p = new Array(2);
		p[0] = e[0]*(bigradius-smallradius-10);
		p[1] = e[1]*(bigradius-smallradius-10);
		mx = centerx + p[0];
		my = centery + p[1];
	}
	ctx.beginPath();
	ctx.drawImage(eyeimg, x, y);
	ctx.lineWidth = 5;
	var color = new Array(3);
	/*
	color[0] = Math.random()*256;	//r
	color[1] = Math.random()*256;	//g
	color[2] = Math.random()*256;	//b
	ctx.strokeStyle = "rgb("+color[0]+","+color[1]+","+color[2]+")";
	*/
	ctx.arc(mx, my, smallradius, 0, 2*Math.PI);
	ctx.closePath();
	ctx.stroke();
}

function canvaMouseOn(event){
	e = event || window.event
	var bgcanva = document.getElementById("bgcanva");
	var ctx = bgcanva.getContext("2d");
	ctx.fillStyle = "lightblue";
	//ctx.fillRect(0, 0, bgcanva.width, bgcanva.height);
	var bgimg = document.getElementById("bgimg");
	ctx.drawImage(bgimg, 0, 0, bgcanva.width, bgcanva.height);
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#6495ED";
	ctx.closePath();
	ctx.stroke();
	for(var x = 0; x<=bgcanva.width; x+=200)
		for(var y = 0; y<=bgcanva.height; y+=100)
			drawEye(ctx, x, y, e.clientX, e.clientY);
}

function canvaTouchOn(event){
	var e = event || window.event
	e.preventDefault()
	canvaMouseOn(e)
}

window.onload = function(){
	var bgcanva = document.getElementById("bgcanva");
	var context = bgcanva.getContext("2d");
	var canva_width = bgcanva.width;
	var canva_height = bgcanva.height;
	initCanva();
	showImage();
	
	window.onmousemove = canvaMouseOn;
	window.ontouchmove = canvaTouchOn;
} 
