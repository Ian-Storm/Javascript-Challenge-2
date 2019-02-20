var answerBox = document.getElementById('answerBox');
var start = document.getElementById('start');
var questionCounter = 0;
var title = document.getElementById('title');
var question = document.getElementById('question');
var answers = [];
var list = document.getElementById('list');

answerBox.style.display = "none";
start.style.display = "block";
listOfParties.style.display = "none";
resultList.style.display = "none";

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

function addCounter(answer) {
		answers[questionCounter] = {
			answer: answer,
			question: titleArray[questionCounter]
		};
	if (questionCounter < titleArray.length -1){
		questionCounter++;
		questions();
	} else if (questionCounter == titleArray.length -1){
		listOfParties.style.display = "inline";
		answerBox.style.display = "none";
		list.innerHTML = "";
		for (var i = 0; i < parties.length; i++) {
			var party = document.createElement('li');
			party.innerText = parties[i].name;
			
			var answer = document.createElement('input');
			answer.setAttribute('type', 'checkbox');
			answer.setAttribute("id", "space");
			party.appendChild(answer);
			list.appendChild(party);
		}
	}
}

function minusCounter() {
	if (questionCounter >= 1 ){
		questionCounter--;
		questions();
	} else if (questionCounter == 0){
		answerBox.style.display = "none";
		start.style.display = "block";
	}
}

function backFromParties() {
	listOfParties.style.display = "none";
	answerBox.style.display = "inline";
}

function getResult() {
	listOfParties.style.display = "none";

}