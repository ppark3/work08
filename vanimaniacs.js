var svg = document.getElementById("svg");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");
var clear = document.getElementById("clear");
var increaseID;
var decreaseID;
var goID;

var animate = function(){
	erase();
    var r = 0;
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", 250);
    c1.setAttribute("cy", 250);
    c1.setAttribute("r", 0);
    c1.setAttribute("fill", "blue");
	svg.appendChild(c1);

    var increase = function(){
	console.log(r);
	r++;
	c1.setAttribute("r", r);
	if (r == 250){
	    clearInterval(increaseID);
	    decreaseID = setInterval(decrease, 10);
	}
    }

    var decrease = function(){
	console.log(r);
	r--;
	c1.setAttribute("r", r);
	if (r == 0){
	    clearInterval(decreaseID);
	    increaseID = setInterval(increase, 10);
	}
    }

    increaseID = setInterval(increase, 10);
}

var bounce = function(){
	erase();
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	var x = 250 * Math.random();
    var y = 250 * Math.random();
	var velocityX = 1;
	var velocityY = 1;
	c1.setAttribute("x", x);
	c1.setAttribute("y", y);
	c1.setAttribute("width", 20);
	c1.setAttribute("height", 20);
	c1.setAttribute("fill", "blue");
	svg.appendChild(c1);
	
	var go = function(){
		console.log("x = " + x);
		console.log("y = " + y);
		x += velocityX;
		y += velocityY;
		c1.setAttribute("x", x);
		c1.setAttribute("y", y);
		if (x <= 0 || x >= 480){
			velocityX *= -1;
		}
		else if (y <= 0 || y >= 480){
			velocityY *= -1;
		}
	}
	
	goID = setInterval(go, 10);
}

var erase = function(){
	while(svg.lastChild){
		svg.removeChild(svg.lastChild);
	}
	if (!(increaseID == null)){
		clearInterval(increaseID);
	}
	if (!(decreaseID == null)){
		clearInterval(decreaseID);
	}
	if (!(goID == null)){
		clearInterval(goID);
	}
}

var pause = function(){
	if (!(increaseID == null)){
		clearInterval(increaseID);
	}
	if (!(decreaseID == null)){
		clearInterval(decreaseID);
	}
	if (!(goID == null)){
		clearInterval(goID);
	}
}

circle.addEventListener("click", animate);
dvd.addEventListener("click", bounce);
clear.addEventListener("click", erase);
stop.addEventListener("click", pause);
