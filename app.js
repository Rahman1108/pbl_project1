var quiz = { "JS" : [
	
	{
		"id" : 1,
		"question" :" python is used for backend ? ",
		"options" : [
			{"a":"True", 
			 "b":"False"
			}
			],
		"answer":"True",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" :"SDE stands for _______ Role in Company ",
		"options" : [
			{"a":"Standard Development Environment", 
			 "b":"Software Development Engineering",
			 "c":"Softskills Development Easily",
			}
			],
		"answer":"Software Development Engineering",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" :"Android is proposed by __________ ? ",
		"options" : [
			{"a":"IBM", 
			 "b":"Amezon",
			 "c":"Infosys",
			 "d":"Google"
			}
			],
		"answer":"Google",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "C is a object oriented programming language ? ",
		"options" : [
			{"a": "&lt;True&gt;", 
			 "b":"&lt;False&gt;"}
			],
		"answer":"&lt;False&gt;",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "HTML stands for ___ ? ",
		"options" : [
			{"a": " Hyper Text Making language ", 
			 "b":"Hyper Template Making language ", 
			 "c":"Hydra Text Markup language ",
			 "d":"Hyper Text Markup language "
			}
			],
		"answer":"Hyper Text Markup language ",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "javaScript is the _____ of the program in web applications.",
		"options" : [
			{
			 "a":"Skeletion", 
			 "b":"Designing", 
			 "c":"Logic Implementation"}
			],
		"answer":"Logic Implementation",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : " Ethical hacking is a illegal Activity ? ",
		"options" : [
			{"a": "True", 
			 "b":"False"
			}
			],
		"answer":"False",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" :"Vaagdevi Collage is one of the top most collage ? ",
		"options" : [
			{"a":"True", 
			 "b":"False",
			 }
			],
		"answer":"True",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "Web Development combination of  ",
		"options" : [
			{"a":" frontend and backend ", 
			 "b":" frontend and bootstrap",
			 "c":" backend and wordpress",
			}
			],
		"answer":" frontend and backend ",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" :"What is program : ",
		"options" : [
			{"a":"Communication between user and machine", 
			 "b":"Communication between user and user ",
			 "c":"Communication between student and teacher ",
			}
			],
		"answer":"Communication between user and machine",
		"score":0,
		"status": ""
	}
	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {
			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});			 
	});

	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});	
