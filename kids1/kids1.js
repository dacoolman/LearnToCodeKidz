var lion = document.getElementById('lion');

var pressEnter = function() {
	//Why is the sound wrong?
	var audio = new Audio('geese.mp3');
	audio.play();
}

var pressLeft = function () {
	// Your code here!
}

var pressUp = function () {
	//Your code here!
}

var pressRight = function() {
	var lionLeft = getLionLeft();
	var newLeft = lionLeft + 50;
	setLionLeft(newLeft);
}

var pressDown = function() {
	var lionTop = getLionTop();
	var newTop = lionTop + 50;
	setLionTop(newTop);

}

run(pressLeft, pressUp, pressRight, pressDown, pressEnter);