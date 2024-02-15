const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
// //function to disappear welcome message
document.querySelector(".start-btn").addEventListener("click", disappear);

function disappear() {
    document.querySelector(".welcome-message").style.display = "none";
}

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [{
        question: 'In The Little Mermaid, what name does Ursula go by when she disguises herself and uses Ariels voice to enchant Prince Eric?',
        answers: [{
                text: 'Marina',
                correct: false
            },
            {
                text: 'Athena',
                correct: false
            },
            {
                text: 'Morgana',
                correct: false
            },
            {
                text: 'Vanessa',
                correct: true
            }
        ]
    },
    {
        question: 'Which of the following Disney movies was the first to receive an Academy Award nomination for Best Picture? ',
        answers: [{
                text: 'Cinderella',
                correct: false
            },
            {
                text: 'Beauty & the Beast',
                correct: true
            },
            {
                text: 'Snow White and the Seven Dwarfs',
                correct: false
            },
            {
                text: 'The Lion King',
                correct: false
            }
        ]
    },
    {
        question: 'What is the name of the pub that Flynn takes Rapunzel to in "Tangled"?',
        answers: [{
                text: 'The Snuggly Duckling',
                correct: true
            },
            {
                text: 'The Rusty Thimble',
                correct: false
            },
            {
                text: 'The Jolly Roger',
                correct: false
            },
            {
                text: 'The Happy Harp',
                correct: false
            }
        ]
    },
    {
        question: 'Which of the following characters from "The Lion King" has a name that means "skunk" in Swahili?',
        answers: [{
                text: 'Rafiki',
                correct: false
            },
            {
                text: 'Timon',
                correct: false
            },
            {
                text: 'Pumbaa',
                correct: true
            },
            {
                text: 'Shenzi',
                correct: false
            }
        ]
    },
    {
        question: 'In "Finding Nemo," Dory suffers from short-term memory loss. However, she can remember a very important address throughout the movie. What is the full address she remembers?',
        answers: [{
                text: '32 Wallaby Way, Sydney',
                correct: false
            },
            {
                text: '42 Wombat Way, Sydney',
                correct: false
            },
            {
                text: '42 Wallaby Way, Sydney',
                correct: true
            },
            {
                text: "32 Wallaby Way, Sydney",
                correct: false
            }
        ]
    }
]

