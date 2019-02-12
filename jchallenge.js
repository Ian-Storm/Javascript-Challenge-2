var answerBox = document.getElementById('answerBox');
var start = document.getElementById('start');
var questionCounter = 0;
var title = document.getElementById('title');
var question = document.getElementById('question');

answerBox.style.display = "none";
start.style.display = "block";

function go(){
	answerBox.style.display = "block";
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

function addCounter(){
	questionCounter++;
	questions();
}