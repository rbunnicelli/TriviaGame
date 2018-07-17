$(document).ready(function() {
    var trivia = [
    {
        question: "Which NBA team won the most championships in the 2000's?",
        answers: ["San Antonio Spurs", "Los Angeles Lakers", "Boston Celtics", "Miami Heat"],
        correct: "Los Angeles Lakers",
        /*2000, 2001, 2002, 2009*/
    },
    {
        question: "How many expansion teams were created across the four major sports?",
        answers: ["0", "2", "3", "5"],
        correct: "3",
        /*2000 - Columbus Blue Jackets, 2002 - New Orleans Hornets and Houston Texans*/
    },
    {
        question: "How many Super Bowls did the New England Patriots win from 2000-2009?",
        answers: ["2", "4", "1", "3"],
        correct: "3",
        /* 2002, 2004, 2005*/
    },
    {
        question: "How many home runs did Barry Bonds hit when he break the single season home run record?",
        answers: ["73", "62", "70", "85"],
        correct: "73",
    },
    {
        question: "Who hit the bloop single to win the 2001 World Series against the New York Yankees?",
        answers: ["Craig Counsell", "Mark Grace", "Luis Gonzalez", "Alex Rodriguez"],
        correct: "Luis Gonzalez",
    },
    {
        question: "Kobe Bryant scored 81 points vs which team?",
        answers: ["New York Knicks", "Indiana Pacers", "Orlando Magic", "Toronto Raptors"],
        correct: "Toronto Raptors",
    },
    {
        question: "Which New York Giants wide receiver was on the receiving end of the Helmet Catch?",
        answers: ["Plaxico Buress", "David Tyree", "Odell Beckham Jr", "Victor Cruz"],
        correct: "David Tyree",
    },
    {
        question: "Which Olympic Athlete won 8 gold medals at the 2008 Beijing games?",
        answers: ["Carl Lewis", "Usain Bolt", "Michael Phelps", "Lebron James"],
        correct: "Michael Phelps",
    },
    {
        question: "Which Division 2 College football team defeated Michigan in stunning fashion",
        answers: ["Appalachian State", "Colorado State", "Ball State", "Clemson"],
        correct: "Appalachian State",
    },
    {
        question: "The New York Yankees won how many World Series in the 2000's?",
        answers: ["0", "4", "2", "1"],
        correct: "73",
        /* 2000, 2009*/
    },
    ]
function startGame() {
    for (i = 0; i<trivia.length; i++) {
        $("#QandA").append("<br>" + trivia[i].question + "<br>" + "<br>" + trivia[i].answers + "<br>");
        
    }
}
console.log(startGame);

$("#start-btn").click(function() {
    $("#startGame").hide();
    $("#triviaGame").show();
    startGame();
});
})