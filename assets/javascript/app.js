

$(document).ready()




var count = 60, timer = setInterval(function() {
    $("#counter").html(count--);
    if(count == 1) clearInterval(timer);
}, 1000);
console.log(count);


var quizContainer = ("#quiz");
var resultsContainer = ("#results");
var secondsLeft = 60*10;
function timeChecker() {
	("#quiz-time-left").html()
}
function genQuiz (questions, quizContainer, resultsContainer) {
	function showQuestions(questions, quizContainer) {
		//need a plae to store output and answers
		var output = [];
		var answers;

		for(var i=0; i<myQuestions.length; i++){
			answers = [];

			for(letter in myQuestions[i].answers){
				//found snippet online that adds radio buttons
				answers.push(
					'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}
		//add to output
			output.push(
				'<div class="question">'+ questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '<div>'
				);
				
			
			}
			quizContainer.innerHTML = output.join('');
		}

		function showResults(questions, quizContainer, resultsContainer) {
			var answerContainers = quizContainer.querySelectorALL('.answers');
			var userAnswer = '';
			var userCorrect = 0;

			for(var i=0; i<myQuestions.length; i++) {
				//using query selector to return right answers
			
				userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

				if (userAnswer===myQuestions[i].correctAnswer){
					numCorrect++;

				}
				
		}

		resultsContainer.innherHTML = numCorrect+ 'out of' + myQuestions.length;


		showQuestions(questions,quizContainer);

		
	}
var myQuestions = [
{
	question: "Who recorded an NBA record, 30 assists in one game?",
	answers: {
		a: "Magic Johnson",
		b: "Scott Skiles",
		c: "John Stockton",
		d: "Jason 'White Chocolate' Williams"
	},
	correctAnswer: "b"
},
{
 	question: "Who recorded an NBA record, 55 rebounds in one game?",
 	answers: {
 		a: "Shaquille Oneal",
 		b: "Bill Russell",
 		c: "Wilt Chamberlain",
 		d: "Dennis Rodman"

 	},
 	correctAnswer: "c"
},
{
	question: "Which player has the record for most Championship rings with 11?",
	answers: {
		a: "Michael Jordan",
		b: "Larry Bird",
		c: "Smush Parker",
		d: "Bill Russell"
	
	},
	correctAnswer: "d"
},
{
	question: "Who has been assessed the most technical fouls?",
	answers: {
		a: "Rasheed Wallace",
		b: "Bill Laimbeer",
		c: "Karl Malone",
		d: "Dwight Coward"
	},
	correctAnswer: "c"
},
{
	question: "Who has the most career points in NBA history?",
	answers: {
		a: "Kareem Abdul Jabbar",
		b: "Michael Jordan",
		c: "Kobe Bryant",
		d: "Karl Malone"
	},
	correctAnswer: "a"
},
{
	question: "What is Kobe Bryant's middle name?",
	answers: {
		a: "Beef",
		b: "Bean",
		c: "Ball",
		d: "Brian"

	},
	correctAnswer: "b"

},
{
	question: "Which one of these names is actually an NBA player?",
	answers: {
		a: "God Shamgod",
		b: "Jihad Muhammad",
		c: "Crusader Christ",
		d: "Batman Bradley"
	},
	correctAnswer: "a"
},
{
	question: "Standing at 5'3 this man was the shortest player in NBA history",
	answers: {
		a: "Spud Webb",
		b: "Earl Boykins",
		c: "Muggsy Bogues",
		d: "Wataru Misaka"
	},
	correctAnswer: "c"
},
{
	question: "Standing at 7'7 this man was the tallest player in NBA history",
	answers: {
		a: "Mark Eaton",
		b: "Manute Bol",
		c: "Yao Ming",
		d: "Shawn Bradley"
	},
	correctAnswer: "b"
},
{
	question: "Weighing in at an astounding 375 lbs this man was the heaviest NBA player in history",
	answers: {
		a: "Oliver Miller",
		b: "Shaquille Oneal",
		c: "Eddy Curry",
		d: "Charles Barkley"

	},
	correctAnswer: "a"
}];


quizContainer.innherHTML = output.join('');






var quizContainer = document.getElementById('#quiz');
var resultsContainer = document.getElementById('#results');
genQuiz(myQuestions, quizContainer, resultsContainer,)};



