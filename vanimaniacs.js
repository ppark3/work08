var svg = document.getElementById("svg");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");
var clear = document.getElementById("clear");

var animate = function(){
    var r = 0;
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", 250);
    c1.setAttribute("cy", 250);
    c1.setAttribute("r", 0);
    c1.setAttribute("fill", "blue");

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
}

var erase = function(){
}

var pause = function(){
}

circle.addEventListener("click", animate);
dvd.addEventListener("click", bounce);
clear.addEventListener("click", erase);
stop.addEventListener("click", pause);
