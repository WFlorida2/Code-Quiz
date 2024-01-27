        // Execute full code when the DOM has fully loaded
        document.addEventListener("DOMContentLoaded", function () {

            // Get references to various HTML elements by their IDs
            // and store them in corresponding variables

            // Element to display the timer during the quiz
            var timerElement = document.getElementById("time");
            
            // Start button
            var startButton = document.getElementById("start");
        
            // Container for displaying questions during the quiz
            var questionsContainer = document.getElementById("questions");
        
            // Container for displaying answer choices during the quiz
            var choicesContainer = document.getElementById("choices");
        
            // Container for displaying the end screen (after completing the quiz)
            var endScreen = document.getElementById("end-screen");
        
            // Element to display the final score on the end screen
            var finalScoreElement = document.getElementById("final-score");
        
            // Input field for entering initials on the end screen
            var initialsInput = document.getElementById("initials");
        
            // Button to submit the quiz and initials on the end screen
            var submitButton = document.getElementById("submit");
        
            // Element to display feedback messages during the quiz
            var feedbackElement = document.getElementById("feedback");
            // Rest of the code for event handling, logic, and functionality goes here
        });
    