

	function mapCode(keyCode) {

	    if (keyCode == 37) {
	    	return "left";
	    }
	    if (keyCode == 38) {
	    	return "up";
	    }
	    if (keyCode == 39) {
	    	return "right";
	    }
	    if (keyCode == 40) {
	    	return "down";
	    }

	   	if (keyCode == 13) {
	    	return "enter";
	    }

	}

	function lionIsAtGoal(lion, goal) {
		var lionLeft = parseInt(lion.style.left, 10);
		var lionTop = parseInt(lion.style.top, 10);
		var goalLeft = parseInt(goal.style.left, 10);
		var goalTop = parseInt(goal.style.top, 10);	
		var lionIsAtCorrectHeight = (lionTop >= goalTop &&  lionTop <= (goalTop + 100));
		var lionIsAtCorrectWidth = (lionLeft >= goalLeft &&  lionLeft <= (goalLeft + 100));

		return lionIsAtCorrectHeight && lionIsAtCorrectWidth;
		  
	}

	function run(left, up, right, down, enter) {
		var self = this;
		self.left = left;
		self.up = up;
		self.right = right;
		self.down = down;
		self.enter = enter;
		document.onkeydown = function(evt) {
			var lion = document.getElementById('lion');
			var goal = document.getElementById('goal');
			var keyPressed = mapCode(evt.keyCode);
		    if (keyPressed == "left") {
		    	self.left();
		    }
		    if (keyPressed == "up") {
		    	self.up();
		    }
		    if (keyPressed == "right") {
		    	self.right();
		    }
		    if (keyPressed == "down") {
				self.down();
		    }

		   	if (keyPressed == "enter") {
		   		self.enter();
		    }

		    if (lionIsAtGoal(lion, goal)) {
		    	var audio = new Audio('hidden/winner.mp3');
		    	console.log('win');
				audio.play();
		    }
		};
	}

	function getLionLeft() {
		var lion = document.getElementById('lion');

		return parseInt(lion.style.left, 10);
	}

	function setLionLeft(newVal) {
		lion.style.left = newVal + "px";
	}

	function getLionTop() {
		var lion = document.getElementById('lion');

		return parseInt(lion.style.top, 10);
	}

	function setLionTop(newVal) {
		lion.style.top = newVal + "px";
	}
