window.onload = function(){
var div = document.getElementById("show");
	div.style.backgroundColor='red';
	div.style.width='100px';
	div.style.height='100px';
	div.innerHTML = "this is a block";
	div.onmouseover = function(){
		div.style.backgroundColor = 'darkcyan';
	}
	div.onmouseleave = function(){
		div.style.backgroundColor = 'red';
	}
	div.onkeydown = function(){
		
	}
}