var score = 0;

function correct() {
	score++;
	disableElements()
	document.getElementById("score").innerHTML = "score = " + score;
	// document.getElementById("somebody").disabled = true;
	// document.getElementById("everybody").disabled = true;
	// document.getElementById("diam").disabled = true;

}

function wrong() {
 	disableElements()
 	document.getElementById("score").innerHTML = "score = " + score;
	}

function disableElements() {
	var answers = document.getElementsByClassName("one");
	for (var i = 0; i < answers.length; i++) {
		answers[i].disabled = true;
	}
	
}




function show() {
	document.getElementById("score").className = "";
}