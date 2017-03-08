var lion = document.getElementById('lion');

var pressEnter = function() {
	var audio = new Audio('geese.mp3');
	audio.play();
}

var pressLeft = function () {

}

var pressUp = function () {}

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