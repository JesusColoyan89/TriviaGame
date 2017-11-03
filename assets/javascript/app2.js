var questions = {

	q1: ["Who recorded an NBA record, 30 assists in one game?",
	answers: 
		a: "Magic Johnson",
		b: "Scott Skiles",
		c: "John Stockton",
		d: "Jason 'White Chocolate' Williams"
	
	correctAnswer: "b"],


 	q2: ["Who recorded an NBA record, 55 rebounds in one game?",
 	answers: 
 		a: "Shaquille Oneal",
 		b: "Bill Russell",
 		c: "Wilt Chamberlain",
 		d: "Dennis Rodman"

 	
 	correctAnswer: "c"],


	q3: ["Which player has the record for most Championship rings with 11?",
	answers: 
		a: "Michael Jordan",
		b: "Larry Bird",
		c: "Smush Parker",
		d: "Bill Russell"
	
	
	correctAnswer: "d"],


	q4: ["Who has been assessed the most technical fouls?",
	answers: 
		a: "Rasheed Wallace",
		b: "Bill Laimbeer",
		c: "Karl Malone",
		d: "Dwight Coward"
	
	correctAnswer: "c"],


	q5: ["Who has the most career points in NBA history?",
	answers: 
		a: "Kareem Abdul Jabbar",
		b: "Michael Jordan",
		c: "Kobe Bryant",
		d: "Karl Malone"
	
	correctAnswer: "a"],


	q6: ["What is Kobe Bryant's middle name?",
	answers: 
		a: "Beef",
		b: "Bean",
		c: "Ball",
		d: "Brian"

	
	correctAnswer: "b"],



	q7: ["Which one of these names is actually an NBA player?",
	answers: 
		a: "God Shamgod",
		b: "Jihad Muhammad",
		c: "Crusader Christ",
		d: "Batman Bradley"
	
	correctAnswer: "a"],


	q8: ["Standing at 5'3 this man was the shortest player in NBA history",
	answers: 
		a: "Spud Webb",
		b: "Earl Boykins",
		c: "Muggsy Bogues",
		d: "Wataru Misaka"
	
	correctAnswer: "c"],


	q9: ["Standing at 7'7 this man was the tallest player in NBA history",
	answers: 
		a: "Mark Eaton",
		b: "Manute Bol",
		c: "Yao Ming",
		d: "Shawn Bradley"
	
	correctAnswer: "b"],


	q10: ["Weighing in at an astounding 375 lbs this man was the heaviest NBA player in history",
	answers: 
		a: "Oliver Miller",
		b: "Shaquille Oneal",
		c: "Eddy Curry",
		d: "Charles Barkley"

	
	correctAnswer: "a"],
};

var score = 0;
var questionIndex = 0;
var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5, questions.q6, questions.q7, questions.q8, questions.q9, questions.q10];

function renderQuestion() {
	if (questionIndex <= (questionsArray.length - 1)) {
		document.querySelector("#question").innerHTML =
		questionsArray[questionIndex][0];
	}
	else {
		document.querySelector("#question").innerHTML = "Its Ovaaaaa!";
		document.querySelector("#score")
	}
}






