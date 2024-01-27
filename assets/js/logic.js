
document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("time");
    const startButton = document.getElementById("start");
    const questionsContainer = document.getElementById("questions");
    const choicesContainer = document.getElementById("choices");
    const endScreen = document.getElementById("end-screen");
    const finalScoreElement = document.getElementById("final-score");
    const initialsInput = document.getElementById("initials");
    const submitButton = document.getElementById("submit");
    const feedbackElement = document.getElementById("feedback");

    let currentQuestionIndex = 0;
    let timeLeft = 15;
    let timerInterval;
    let quizEnded = false;

    const questions = [
        {
            question: "What does the typeof operator in JavaScript return for this code: 'typeof 42'; ?",
            choices: ["number", 
                        "string", 
                        "boolean", 
                        "undefined"
                    ],
            correctAnswer: "number"
        },
        {
            question: "Which of the following is the correct way to declare a function in JavaScript ?",
            choices: ["function = myFunction() {}",
                        "var myFunction = function() {}",
                        "def myFunction() {}",
                        "function myFunction() {}"
                    ],
            correctAnswer: "function myFunction() {}"
        },
        {
            question: "What does the typeof operator return for the data type 'null'?",
            choices: ["object", "null", "undefined", "string"],
            correctAnswer: "object"
        },
    ];
    
    function startQuiz() {
        console.log("Page loaded before Start Quiz button is clicked");
        startButton.addEventListener("click", function () {
            console.log("Start button is now clicked");
            startButton.parentElement.classList.add("hide");
            questionsContainer.classList.remove("hide");
            startTimer();
            displayQuestion();
        });
    }

    function startTimer() {
        timerInterval = setInterval(function () {
            timeLeft--;
            timerElement.textContent = timeLeft;

            console.log(timeLeft);

            if (timeLeft <= 0 && !quizEnded) {
                endQuiz();
            }
        }, 1000);
    }

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];

        if (currentQuestionIndex < questions.length) {
            document.getElementById("question-title").textContent = currentQuestion.question;
            choicesContainer.innerHTML = "";

            for (let i = 0; i < currentQuestion.choices.length; i++) {
                const choiceButton = document.createElement("button");
                choiceButton.textContent = currentQuestion.choices[i];
                choiceButton.addEventListener("click", function () {
                    checkAnswer(this.textContent);
                });

                choicesContainer.appendChild(choiceButton);
            }
        } else {
            endQuiz();
        }
    }

    function checkAnswer(selectedAnswer) {
        const currentQuestion = questions[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.correctAnswer) {
            feedbackElement.textContent = "Correct!";
        } else {
            feedbackElement.textContent = "Incorrect!";
            timeLeft -= 10;
        }

        currentQuestionIndex++;
        displayQuestion();
    }

    function endQuiz() {
        quizEnded = true; // Set the flag to true to indicate that the quiz has ended
        clearInterval(timerInterval);
        questionsContainer.classList.add("hide");
        endScreen.classList.remove("hide");
        finalScoreElement.textContent = Math.max(0, timeLeft);

        submitButton.addEventListener("click", function () {
            const initials = initialsInput.value.trim();

            if (initials !== "") {
                console.log("Score saved:", timeLeft, "Initials:", initials);
            }
        });
    }

    startQuiz();
});

