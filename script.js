var string = "Mark Abidargham";
var array = string.split("");
var loopTimer;

function frameLoop(){
	if(array.length > 0){
		document.getElementById("name").innerHTML += array.shift();
		loopTimer = setTimeout('frameLoop()', 100);
	}
	else{
		clearTimeout(loopTimer);
	}
}
frameLoop();