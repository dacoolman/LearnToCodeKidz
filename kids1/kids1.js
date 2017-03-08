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
	//Getting the current Lion's position from the left
	var lionLeft = getLionLeft();
	var newLeft = lionLeft + 50;
	//Adding this to the lion
	setLionLeft(newLeft);
}

var pressDown = function() {
	var lionTop = getLionTop();
	var newTop = lionTop + 50;
	setLionTop(newTop);

}

run(pressLeft, pressUp, pressRight, pressDown, pressEnter);

//Extra challenges: make the lion run faster
//Make the lion run slower
//Add in your own sound for the lion