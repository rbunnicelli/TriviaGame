$(document).ready(function() {
    //array of objects containing question, choices, correct answer
    var trivia = [
    {
        question: "Which NBA team won the most championships in the 2000's?",
        answers: ["San Antonio Spurs", "Los Angeles Lakers", "Boston Celtics", "Miami Heat"],
        correct: "Los Angeles Lakers",
        name: "nbaships",
        divClass: ".nbaships"
        /*2000, 2001, 2002, 2009*/
    },
    {
        question: "How many expansion teams were created across the four major sports?",
        answers: ["0", "2", "3", "5"],
        correct: "3",
        name: "expansion",
        divClass: ".expansion"
        /*2000 - Columbus Blue Jackets, 2002 - New Orleans Hornets and Houston Texans*/
    },
    {
        question: "How many Super Bowls did the New England Patriots win from 2000-2009?",
        answers: ["2", "4", "1", "3"],
        correct: "3",
        name: "pats",
        divClass: ".pats"
        /* 2002, 2004, 2005*/
    },
    {
        question: "How many home runs did Barry Bonds hit when he break the single season home run record?",
        answers: ["73", "62", "70", "85"],
        correct: "73",
        name: "bonds",
        divClass: ".bonds"
    },
    {
        question: "Who hit the bloop single to win the 2001 World Series against the New York Yankees?",
        answers: ["Craig Counsell", "Mark Grace", "Luis Gonzalez", "Alex Rodriguez"],
        correct: "Luis Gonzalez",
        name: "dbacks",
        divClass: ".dbacks"
    },
    {
        question: "Kobe Bryant scored 81 points vs which team?",
        answers: ["New York Knicks", "Indiana Pacers", "Orlando Magic", "Toronto Raptors"],
        correct: "Toronto Raptors",
        name: "kobe",
        divClass: ".kobe"
    },
    {
        question: "Which New York Giants wide receiver was on the receiving end of the Helmet Catch?",
        answers: ["Plaxico Buress", "David Tyree", "Odell Beckham Jr", "Victor Cruz"],
        correct: "David Tyree",
        name: "giants",
        divClass: ".giants"
    },
    {
        question: "Which Olympic Athlete won 8 gold medals at the 2008 Beijing games?",
        answers: ["Carl Lewis", "Usain Bolt", "Michael Phelps", "Lebron James"],
        correct: "Michael Phelps",
        name: "phelps",
        divClass: ".phelps"
    },
    {
        question: "Which Division 2 College football team defeated Michigan in stunning fashion?",
        answers: ["Appalachian State", "Colorado State", "Ball State", "Clemson"],
        correct: "Appalachian State",
        name: "appstate",
        divClass: ".appstate"
    },
    {
        question: "The New York Yankees won how many World Series in the 2000's?",
        answers: ["0", "4", "2", "1"],
        correct: "2",
        name: "yanks",
        divClass: ".yanks"
        /* 2000, 2009*/
    },
    ]

var labels = ["first", "second", "third", "fourth"];

//scoring variables
var correct = 0;
var incorrect = 0;

//variables to set timer
var number = 60;
var intervalID;

//function to clear intervalID so cant have multiple instances. Sets timer to decrease by 1 second
function run() {
    clearInterval(intervalID);
    intervalID = setInterval(timer, 1000);
}

//function to run the timer, show on page. Hide game and show ran out of time screen if player runs out of timme
function timer() {
    number --;
    $("#timer").html("<h2>" + number + "</h2>");
    if ( number === 0) {
        $("#triviaGame").hide();
        $("#noTime").show();
        score();
        clearInterval(intervalID);
    }
}

//function to put questions and answers on page (and assign radio buttons to each answer)
var startGame = function() {
    //for loop that inserts a div (with a class of the key value:name in the trivia array) into the #QandA <p> element. 
    for (var i = 0; i < 10; i++) {
        $('#QandA').prepend('<div class="' + trivia[i].name + '"></div>');
        //appends each question in a div (with the class "quest") to the divClass value in the array
        $(trivia[i].divClass).append('<div class="quest">' + trivia[i].question + '</div>');
            //for loop to go through the answers valaue in the array to get each individual answer
            for (var j = 0; j < 4; j++) {
                //appends radio buttons (with the value of each index of the answers array for each object in trivia) to the .divClass for each trivia object
                $(trivia[i].divClass).append('<input type="radio" name="' + trivia[i].name + '" value="' + trivia[i].answers[j] + '"/><label for="' + labels[j] + '">' + trivia[i].answers[j] + '</label>');
            }
           //puts a horizontal break between each div (containing a question and answer pair)
           $("#QandA").prepend('<hr />');
    }
}

//function to score the game
var score = function() {
    for (var i = 0; i <10; i++) {
        //if the radio btn the user selects equals the correct response in the array then add 1 to correct, if not add 1 to incorrect
        if ($("input[type='radio'][name=" + trivia[i].name + "]:checked").val() === trivia[i].correct) {
            correct++;
            $(".correctAnswers").html("Correct: " + correct);
        } else {
            incorrect++;
            $(".incorrectAnswers").html("Incorrect: " + incorrect); 
        }
    }
    //shows the user score as a percentage
    $(".percentage").html(correct * 10 + "%");
}

//function on start button click that hides the start menu, starts timer and shows trivia questions
$("#start-btn").click(function() {
    $("#startGame").hide();
    $("#triviaGame").show();
    startGame();
    run();
    timer();
});

//if submit button clicked, hide triviaGame and show the scoreScreen
$("#submit-btn").click(function() {   
    $("#triviaGame").hide();
    $("#scoreScreen").show();
    clearInterval(intervalID);
    score();
})

//once you finish you can try again. Restart the game over
$("#restart-btn").click(function() {
    $("#scoreScreen").hide();
    $("#triviaGame").show();
    number = 60;
    correct = 0;
    incorrect = 0;
    notGuessed = 0;
    run();
    timer();
})
})