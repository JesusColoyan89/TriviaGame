var quizContainer = ("#quiz");
var resultsContainer = ("#results");

function showQuestions (myQuestions, quizContainer) {
	// place to store what will be shown in HTML
	var output = [];
	var answers;

	for (var i=0; i<myQuestions.length; i++){
		answers = [];
		for(letter in questions[i].answers){
			answers.push()
		}
	}

quizBuild();

var myQuestions = [
{
	question: "Who recorded an NBA record, 30 assists in one game?",
	answers: {
		a: "Magic Johnson"
		b: "Scott Skiles"
		c: "John Stockton"
		d: "Jason 'White Chocolate' Williams"
	},
	correctAnswer: "b"
};
{
 	question: "Who recorded an NBA record, 55 rebounds in one game?",
 	answers: {
 		a: "Shaquille Oneal"
 		b: "Bill Russell"
 		c: "Wilt Chamberlain"
 		d: "Dennis Rodman"

 	},
 	correctAnswer: "c"
};
{
	question: "Which player has the record for most Championship rings with 11?"
	answers: {
		a: "Michael Jordan"
		b: "Larry Bird"
		c: "Smush Parker"
		d: "Bill Russell"
	
	},
	correctAnswer: "d"
};
{
	question: "Who has been assessed the most technical fouls?"
	answers: {
		a: "Rasheed Wallace"
		b: "Bill Laimbeer"
		c: "Karl Malone"
		d: "Dwight Coward"
	}
	correctAnswer: "c"
};
{
	question: "Who has the most career points in NBA history?"
	answers: {
		a: "Kareem Abdul Jabbar"
		b: "Michael Jordan"
		c: "Kobe Bryant"
		d: "Karl Malone"
	}
	correctAnswer: "a"
};
{
	question "What is Kobe Bryant's middle name?"
	answers: {
		a: "Beef"
		b: "Bean"
		c: "Ball"
		d: "Brian"

	}
	correctAnswer: "b"

};
{
	question: "Which one of these names is actually an NBA player?"
	answers: {
		a: "God Shamgod"
		b: "Jihad Muhammad"
		c: "Crusader Christ"
		d: "Batman Bradley"
	}
	correctAnswer: "a"
};
{
	question: "Standing at 5'3 this man was the shortest player in NBA history"
	answers: {
		a: "Spud Webb"
		b: "Earl Boykins"
		c: "Muggsy Bogues"
		d: "Wataru Misaka"
	}
	correctAnswer: "c"
};
{
	question: "Standing at 7'7 this man was the tallest player in NBA history"
	answers: {
		a: "Mark Eaton"
		b: "Manute Bol"
		c: "Yao Ming"
		d: "Shawn Bradley"
	}
	correctAnswer: "b"
};
{
	question: "Weighing in at an astounding 375 lbs this man was the heaviest NBA player in history"
	answers: {
		a: "Oliver Miller"
		b: "Shaquille Oneal"
		c: "Eddy Curry"
		d: "Charles Barkley"
	}
	correctAnswer: "a"
};
]


