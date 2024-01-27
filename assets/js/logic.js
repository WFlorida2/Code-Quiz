// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Get references to various HTML elements
    const timerElement = document.getElementById("time");
    const startButton = document.getElementById("start");
    const questionsContainer = document.getElementById("questions");
    const choicesContainer = document.getElementById("choices");
    const endScreen = document.getElementById("end-screen");
    const finalScoreElement = document.getElementById("final-score");
    const initialsInput = document.getElementById("initials");
    const submitButton = document.getElementById("submit");
    const feedbackElement = document.getElementById("feedback");

    // Initialize variables for quiz control
    let currentQuestionIndex = 0;
    let timeLeft = 60;
    let timerInterval;
    let quizEnded = false;

    // Array of quiz questions with choices and correct answers
    const questions = [
        // Question 1
        {
            question: "What does the typeof operator in JavaScript return for this code: 'typeof 42';?",
            choices: [
                ["number"],
                ["string"],
                ["boolean"],
                ["undefined"]
            ],
            correctAnswer: "number"
        },
        // Question 2
        {
            question: "Which of the following is the correct way to declare a function in JavaScript?",
            choices: [
                ["function = myFunction() {}"],
                ["var myFunction = function() {}"],
                ["def myFunction() {}"],
                ["function myFunction() {}"]
            ],
            correctAnswer: "function myFunction() {}"
        },
        // Question 3
        {
            question: "What does the typeof operator return for the data type 'null'?",
            choices: [
                ["object"],
                ["null"],
                ["undefined"],
                ["string"]
            ],
            correctAnswer: "object"
        },
    ];

    // Function to start the quiz
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

    // Function to start the timer
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

    // Function to display the current question
    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];

        if (currentQuestionIndex < questions.length) {
            document.getElementById("question-title").textContent = currentQuestion.question;
            choicesContainer.innerHTML = "";

            // Create buttons for each choice and attach click event listener
            for (let i = 0; i < currentQuestion.choices.length; i++) {
                const choiceButton = document.createElement("button");
                choiceButton.textContent = currentQuestion.choices[i];
                choiceButton.addEventListener("click", function () {
                    checkAnswer(this.textContent);
                });

                choicesContainer.appendChild(choiceButton);
            }
        } else {
            // End the quiz if all questions have been answered
            endQuiz();
        }
    }

    // Function to check the selected answer against the correct answer
    function checkAnswer(selectedAnswer) {
        const currentQuestion = questions[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.correctAnswer) {
            feedbackElement.textContent = "Correct!";
        } else {
            feedbackElement.textContent = "Incorrect! -10 seconds";
            timeLeft = Math.max(0, timeLeft - 10); // Subtract 10 seconds and ensure it doesn't go negative
        }

        feedbackElement.classList.remove("hide");
        setTimeout(() => {
            feedbackElement.classList.add("hide");
        }, 1000);

        // Move to the next question
        currentQuestionIndex++;
        displayQuestion();
    }

    // Function to end the quiz
    function endQuiz() {
        quizEnded = true;
        clearInterval(timerInterval);
        questionsContainer.classList.add("hide");
        endScreen.classList.remove("hide");
        finalScoreElement.textContent = Math.max(0, timeLeft);

        // Event listener for the submit button to save highscores
        submitButton.addEventListener("click", function () {
            const initials = initialsInput.value.trim();

            if (initials !== "") {
                // Save the data to localStorage
                const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
                highscores.push({ initials, score: timeLeft });
                localStorage.setItem("highscores", JSON.stringify(highscores));

                // Redirect to highscores.html
                window.location.href = "highscores.html";
            } else {
                // Handle the case when initials are not provided
                endScreen.classList.remove("hide");
            }
        });
    }

    // Start the quiz when the page loads
    startQuiz();
});


