
var readlineSync = require("readline-sync");
var score = 0;

var highScores = [
  {
    Name: "AKASH",
    Score: 3
  }, {
    Name: "TANYA",
    Score: 4
  }, {
    Name: "RIYA",
    Score: 5
  }
]
function welcomeMsg() {
  var userName = readlineSync.question(" Hii! Please enter your name\n");
  console.log("--------------------------------------");
  console.log("\t\t\tWelcome " + userName + "!")
  console.log("--------------------------------------");
  console.log(" \n I am sure you have watched Money Heist! \n so Let's start this fun QUIZ\n 4 options will be given to you. \n you have to answer in A/B/C/D\n");
}

function showScore() {
  console.log("\nYour Score is : ", score);
  console.log("\n These are the high scores:  ")
  highScores.map((user) => console.log(user.Name + ": " + user.Score))
  console.log("\nIf you score more than the high scorers, then send me a screenshot of it and i will update it");
  console.log("\n THANK YOU FOR PLAYING. I HOPE YOU LIKE IT!")

}


function play(question, correctAnswer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === correctAnswer.toUpperCase()) {
    console.log("\n Right")
    score += 1;
  }
  else
    console.log("\n Wrong")

}
var quiz = [{
  question: " Q1: What was the professor's real name?\nA: Ricardo Ramos\nB: Sergio Marquina \nC: Andres de Fonollosa\nD: None of the above\n",
  correctAnswer: "B"
}, {
  question: "Q2: Who planned the Bank of Spain heist ?\nA: Professor's father\nB: The Professor \nC:Berlin\nD: Palermo\n",
  correctAnswer: "C"
}, {
  question: "Q3: What was the name of Stockholm's son  ? \nA:Ohlo\nB:Miami\nC: Cincinnati\nD: Lisbon\n",
  correctAnswer: "C"
}, {
  question: "Q4: Who was Gandia? \nA: Hostage\nB: Robber\nC: S.W.A.T\nD: Personal security guard\n",
  correctAnswer: "D"
}, {
  question: "Q5: How many robbers died till 2nd heist? \nA: THREE \nB:FOUR\nC: FIVE\nD: SIX\n",
  correctAnswer: "B"
}];
function game() {
  for (i = 0; i < quiz.length; i++) {
    currentQuestion = quiz[i];
    play(currentQuestion.question, currentQuestion.correctAnswer)
  }
}

welcomeMsg();
game();
showScore();
