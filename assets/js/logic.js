    // Execute full code when the DOM has fully loaded
    document.addEventListener("DOMContentLoaded", function () {

    // Get references to constious HTML elements by their IDs
    // and store them in corresponding constiables

    // Element to display the timer during the quiz
        const timerElement = document.getElementById("time");
                    
        // Start button
        const startButton = document.getElementById("start");
                
        // Container for displaying questions during the quiz
        const questionsContainer = document.getElementById("questions");
                
        // Container for displaying answer choices during the quiz
        const choicesContainer = document.getElementById("choices");
                
        // Container for displaying the end screen (after completing the quiz)
        const endScreen = document.getElementById("end-screen");
                
        // Element to display the final score on the end screen
        const finalScoreElement = document.getElementById("final-score");
                
        // Input field for entering initials on the end screen
        const initialsInput = document.getElementById("initials");
                
        // Button to submit the quiz and initials on the end screen
        const submitButton = document.getElementById("submit");
                
        // Element to display feedback messages during the quiz
        const feedbackElement = document.getElementById("feedback");

        let currentQuestionIndex = 0;
        let timeLeft = 5;
        let timerInterval;
                
        // Function to start the quiz
        function startQuiz() {
        console.log("Page loaded before Start Quiz button is clicked");// startQuiz function is called
                        
        startButton.addEventListener("click", function () {
        console.log("Start button is now clicked");// EventListner is responding
                        
        startButton.parentElement.classList.add("hide");
        questionsContainer.classList.remove("hide");
        startTimer();
        // displayQuestion();
        });
        }

         // Function to start the timer
        function startTimer() {
        timerInterval = setInterval(function () {
        timeLeft--;
        timerElement.textContent = timeLeft;

        console.log(timeLeft);// validate that the timer countdown works

        if (timeLeft === 0) {
            endQuiz();
        }
        }, 1000);
        }

        // Function to end the quiz
        function endQuiz() 
        {
        clearInterval(timerInterval);
        questionsContainer.classList.add("hide");
        endScreen.classList.remove("hide");
        finalScoreElement.textContent = 50;
        // console.log(timeLeft);

        submitButton.addEventListener("click", function () 
        {
        const initials = initialsInput.value.trim();
        });
        }
        startQuiz();
        });


        

