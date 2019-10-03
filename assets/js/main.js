
$(document).ready(function(){
let questions = [
{
    question : "who played the character of harry potter movie?" ,
    choices : ["Dambledor", "Daniel" , "Herminey" ],
    correctIndex : "0" ,
},
{
    question : "how many holes are there in a full round of golf?" ,
    choices : ["11" ,"12" ,"18"] ,
    correctIndex: "2" ,
},
{
    question : "which one of the options is not a tvshows?" ,
    choices : ["meanGirls" ,"harryPotter" ,"this is us"] ,
    correctIndex : "1" ,

},
{
    question :"what yard line must a football team drive to,to reach the red Zone",
    choices :["10" , "15" ,"20"] ,
    correctIndex : "2" ,
},
{
    question :"what color are strawberries?",
    choices :["Red" , "yellow" ,"blue"] ,
    correctIndex : "0" ,
},
{
    question :"what color are strawberries?",
    choices :["Red" , "yellow" ,"blue"] ,
    correctIndex : "0" ,
},
{
    question :"what color are strawberries?",
    choices :["Red" , "yellow" ,"blue"] ,
    correctIndex : "1",
},
{
    question :"what color are bananas?",
    choices :["Red" , "yellow" ,"blue"] ,
    correctIndex : "1",
},
{
    question :"what color are apple?",
    choices :["red" , "yellow" ,"blue"] ,
    correctIndex : "0",
},
{
    question :"what is the color of the sky?",
    choices :["Red" , "yellow" ,"blue"] ,
    correctIndex : "2",
}];
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;
var userGuess =""; 
var timer = 30;
var intervalId;
var running = false;
var qCount = options.length;
var pick;
var index;
var newArray = [];
var holder = [];
$("#reset").hide();
$("#start").on("click", function () {
        $("#start").hide();
        displayQuestion();
        runTimer();
        for(var i = 0; i < options.length; i++) {
    holder.push(options[i]);
}
    })
    if (!running) {
        intervalId = setInterval(decrement, 1000);
        running = true;
        }
    }
     function.decrement() {
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer --;
        if (timer === 0) {
            unansweredCount++;
            stop();
            $("#answerblock").html("<p>Time’s up! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }    
    }
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
    index = Math.floor(Math.random()*options.length);
    pick = options[index];
    $("#questionblock").html("<h2>" + pick.question + "</h2>");
    for(var i = 0; i < pick.choice.length; i++) {
        var userChoice = $("<div>");
        
        userChoice.addClass("answerchoice");
        userChoice.html(pick.choice[i]);
        userChoice.attr("data-guessvalue", i);
        $("#answerblock").append(userChoice);
    }
    $(".answerchoice").on("click", function () {
        userGuess = parseInt($(this).attr("data-guessvalue"));

        if (userGuess === pick.answer) {
            stop();
            correctCount++;
            userGuess="";
            $("#answerblock").html("<p>Correct!</p>");
            hidepicture();
        } else {
            stop();
            wrongCount++;
            userGuess="";
            $("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }
    })
    
    function hidepicture () {
        $("#answerblock").append(<"img src=" + pick.photo + ">");
        newArray.push(pick);
        options.splice(index,1);
        var hidpic = setTimeout(function() {
            $("#answerblock").empty();
            timer= 30;
        if ((wrongCount + correctCount + unansweredCount) === qCount) {
            $("#questionblock").empty();
            $("#questionblock").html("<h3>Game Over!  Here’s how you did: </h3>");
            $("#answerblock").append("<h4> Correct: " + correctCount + "</h4>" );
            $("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>" );
            $("#answerblock").append("<h4> Unanswered: " + unansweredCount + "</h4>" );
            $("#reset").show();
            correctCount = 0;
            wrongCount = 0;
            unansweredCount = 0;
        } else {
            runTimer();
            displayQuestion();
        }
        }, 3000);
    }
    $("#reset").on("click", function() {
        $("#reset").hide();
        $("#answerblock").empty();
        $("#questionblock").empty();
        for(var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        runTimer();
        displayQuestion();
    })

 
 
