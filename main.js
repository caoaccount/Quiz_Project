const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//questions
let questions = [
    {
        question : "In The Little Mermaid, what name does Ursula go by when she disguises herself?",
        imgSrc : "img/vanessa.png",
        choiceA : "Marina",
        choiceB : "Athena",
        choiceC : "Morgana",
        choiceD : "Vanessa",
        correct : "D"
    },{
        question : "Which of the following was the first to receive an Oscar nomination for Best Picture?",
        imgSrc : "img/oscar.png",
        choiceA : "Cinderella",
        choiceB : "Beauty & the Beast",
        choiceC : "Snow White & the Seven Dwarfs",
        choiceD : "The Lion King",
        correct : "B"
    },{
        question : "What's the name of the prince in 'Snow White and the Seven Dwarfs'?",
        imgSrc : "img/florian.png",
        choiceA : "Prince Charming",
        choiceB : "Prince Philip",
        choiceC : "Prince Florian",
        choiceD : "Prince Eric",
        correct : "C"
    },{
        question : "What's the name of the pub that Flynn takes Rapunzel to in 'Tangled'?",
        imgSrc : "img/rapunzel.png",
        choiceA : "The Snuggly Duckling",
        choiceB : "The Rusty Thimble",
        choiceC : "The Jolly Roger",
        choiceD : "The Happy Harp",
        correct : "A"
    },{
        question : "Which 'Lion King' character's name means 'skunk' in Swahili?",
        imgSrc : "img/skunk.png",
        choiceA : "Rafiki",
        choiceB : "Timon",
        choiceC : "Pumbaa",
        choiceD : "Shenzi",
        correct : "C"
    },{
        question : "What's the name of the island where Mr. Incredible is sent on his first mission?",
        imgSrc : "img/island.png",
        choiceA : "Municiberg Isle",
        choiceB : "Nomanisan Island",
        choiceC : "Hero's Haven",
        choiceD : "Villainy Retreat",
        correct : "B"
    },{
        question : "What's the full address that Dory remembers?",
        imgSrc : "img/address.png",
        choiceA : "32 Wallaby Way, Sydney",
        choiceB : "42 Wombat Way, Sydney",
        choiceC : "42 Wallaby Way, Sydney",
        choiceD : "32 Wallaby Way, Sydney",
        correct : "C"
    },{
        question : "In 'Up' what's the name of the rare bird that's discovered?",
        imgSrc : "img/kevin.png",
        choiceA : "Ellie",
        choiceB : "Dug",
        choiceC : "George",
        choiceD : "Kevin",
        correct : "D"
    },{
        question : "In 'Ratatouille,' what's the name of the food critic who reviews Gusteau's restaurant?",
        imgSrc : "img/critic.png",
        choiceA : "Anton Ego",
        choiceB : "Chef Skinner",
        choiceC : "Colette",
        choiceD : "Linguini",
        correct : "A"
    },{
        question : "Which of these was the 1st to be entirely produced at Walt Disney Animation Studios?",
        imgSrc : "img/first.png",
        choiceA : "Tarzan",
        choiceB : "The Little Mermaid",
        choiceC : "The Lion King",
        choiceD : "Beauty and the Beast",
        correct : "A"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

// how question shows up
function showQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    showQuestion();
    quiz.style.display = "block";
    ProgressTracker();
    renderCounter();
 
}

// show progress
function ProgressTracker(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// check answer
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        // green color
        answerIsCorrect();
    }else{
        // red color
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        showQuestion();
    }else{
        // end the quiz and show the score
        scoreDisplay();
    }
}

// correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function scoreDisplay(){
    scoreDiv.style.display = "block";
    
    // calculate correct score
    const scorePerCent = Math.round(100 * score/questions.length);
   
    // image based on the score percentage
    let img = (scorePerCent >= 80) ? "img/1.png" :
              (scorePerCent >= 60) ? "img/2.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/4.png" :
              "img/5.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<h2><center><b>Your Final Score: "+ scorePerCent +"%</b></center></h2>";
}