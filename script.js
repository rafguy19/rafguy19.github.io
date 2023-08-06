//target all elements to save to constants
const page1btn = document.querySelector("#originsbtn");
const page2btn = document.querySelector("#usesbtn");
const page3btn = document.querySelector("#differencebtn");
const yukataOriginbtn = document.querySelector("#yukataOriginbtn");
const kimonoOriginbtn = document.querySelector("#kimonoOriginbtn");
var allpages = document.querySelectorAll(".page");

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

hideall();

function hideall()
{ //function to hide all pages
    
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}

}

function show(pgno)
{ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
//show the page
onepage.style.display="block";
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});
kimonoOriginbtn.addEventListener("click", function (){
    kimonoOriginShow();
})
yukataOriginbtn.addEventListener("click", function (){
    yukataOriginShow();
})

/*for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
hamBtn.addEventListener("click",toggleMenus);
const menuItemsList=document.querySelector("nav ul");

function toggleMenus()
{ /*open and close menu*/
menuItemsList.classList.toggle("menuShow");
}

function yukataOriginShow()
{
    document.querySelector("#yukataOrigin").style.display = "block";
    document.querySelector("#kimonoOrigin").style.display = "none";
}

function kimonoOriginShow()
{
    document.querySelector("#yukataOrigin").style.display = "none";
    document.querySelector("#kimonoOrigin").style.display = "block";
}

var myQuestions = [
	{
		question: "When is the Yukata used?",
		answers: {
			a: 'Marriage',
			b: 'Summer Festival',
			c: 'Funerals'
		},
		correctAnswer: 'b'
	},
	{
		question: "Which of the following is NOT part of the Kimono?",
		answers: {
			a: 'Obi',
			b: 'Haneri',
			c: 'Geta'
		},
		correctAnswer: 'c'
	},
    {
		question: "What word did Yukata derived from?",
		answers: {
			a: 'yu + katabira',
			b: 'ryu + kata',
            c: 'yu + kata'
		},
		correctAnswer: 'a'
	},
    {
		question: "Which is older?",
		answers: {
			a: 'Kimono',
			b: 'Yukata'
		},
		correctAnswer: 'a'
	},
    {
		question: "Where did the Kimono 1st come from?",
		answers: {
			a: 'China',
			b: 'Japan',
            c: 'Korea'
		},
		correctAnswer: 'a'
	}
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer to this question...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
	}

    function showResults(questions, quizContainer, resultsContainer){
	
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){
    
            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }
    
        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
    

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
