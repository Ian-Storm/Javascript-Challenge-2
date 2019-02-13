var answerBox = document.getElementById('answerBox');
var start = document.getElementById('start');
var questionCounter = 0;
var title = document.getElementById('title');
var question = document.getElementById('question');
var answers = [];

answerBox.style.display = "none";

function onload(){
		start.style.display = "block";
	}

function go(){
	answerBox.style.display = "inline";
	start.style.display = "none";
	questions();
}

function restart(){
	location.reload(true);
}

function questions(){
	title.innerHTML = titleArray[questionCounter];
	question.innerHTML = textArray[questionCounter];
}

function addCounter(parametervanian) {

	answers[questionCounter] = ;


	if (questionCounter < 29) {
		questionCounter++;
		questions();
	} else if (questionCounter == 29) {
		restart();
	}
}

function minusCounter(){
	if (questionCounter >= 1 ) {
		questionCounter--;
		questions();
	} else if (questionCounter == 0) {
		answerBox.style.display = "none";
		onload();
	}
}