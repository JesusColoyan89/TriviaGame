$("#start").on("click", function(){
	game.start();
})

$(document).on("click", '#end', function() {
	game.done();
})

var questions =[{
	question:"Who recorded an NBA record, 30 assists in one game?",
	answers:["Magic Johnson","Scott Skiles","John Stockton","Jason 'White Chocolate' Williams"],
	correctAnswer:"Scott Skiles"
}, {
	question:"Who recorded an NBA record, 55 rebounds in one game?",
	answers:["Shaquille Oneal","Bill Russell","Wilt Chamberlain","Dennis Rodman"],
	correctAnswer:"Wilt Chamberlain"
}, {
	question:"Which player has the record for most Championship rings with 11?",
	answers:["Michael Jordan","Larry Bird","Smush Parker","Bill Russell"],
	correctAnswer:"Bill Russell"

}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 20,
	countdown: function() {
		game.counter--;
		$("#counter").html(game.counter);
		if(game.counter<=0){
			console.log("Time is up!");
			game.done();
		}
	},
	
	start: function(){
		timer = setInterval(game.countdown,1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
		$("#start").remove();
		for(var i=0; i<questions.length; i++){
			$('#subwrapper').append('<h2>'+questions[i].question+'</h2>');
			for(var k=0; k<questions[i].answers.length;k++){
				$("#subwrapper").append("<input type='radio' name='question-"+i+"'value='"+questions[i].answers[k]+"'>"+questions[i].answers[k])

			}
		}
		$('#subwrapper').append('<button id="end">Done</button>')

	},
	done: function() {
		$.each($('input[name="question-0]":checked'), function(){
			if($(this).val()==questions[0].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-1]":checked'), function(){
			if($(this).val()==questions[1].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-2]":checked'), function(){
			if($(this).val()==questions[2].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-3]":checked'), function(){
			if($(this).val()==questions[3].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-4]":checked'), function(){
			if($(this).val()==questions[4].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-5]":checked'), function(){
			if($(this).val()==questions[5].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-6]":checked'), function(){
			if($(this).val()==questions[6].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-7]":checked'), function(){
			if($(this).val()==questions[7].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-8]":checked'), function(){
			if($(this).val()==questions[8].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});
		$.each($('input[name="question-9]":checked'), function(){
			if($(this).val()==questions[9].correctAnswer){
				game.correct++;
			} else {
				game.incorrect++;
			}
		});

		this.result();

	},
	result: function(){
		clearInterval(timer);
		$("#subwrapper h2").remove();

		$("#subwrapper").html("<h2>Youre Finished</h2>");
		$("#subwrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
		$("#subwrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
		$("#subwrapper").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
	}	

}



