# Code-Quiz
HUGE credit to W3C school, classes recording AND ChatGPT for many and different examples of codes

## pseudocode

1. Declare variables:
   - timeRemaining ,timeInterval, score , highscore, questions

2. Set up event listeners:
   A - When start button is clicked:
     - Start the timer
     - Show questions
     - Load the first question
     - Display 4 choices for the first question

    B - When the chosen answer button is clicked, do the following;
     - Check if the answer is correct
     
     - If correct: (If else code)
       - Increase score
     - else If incorrect:
       - Subtract time of 'n number' of seconds from the timer
     
    C - If no answer provided and time runs out then terminate 'Go to step G' to (End Quiz ());
    D - else, move to the next question
    F - Display choices for the next question

    G - When the timer reaches 0 or all questions are answered:
        - Stop the timer
        - Hide questions screen
        - Show end screen
        - Display final score
        - Allow user to enter and submit their initials

    H  - When submit button is clicked on the end screen:
        - Save the user initials and their score
        - Display score above two buttons of 'Go Back' & ' Clear Highscroes'

    I - When hignscores button is clicked:
      - Display the highscores
    
    J  - When clear button is clicked:
       - Clear the high scores

3.  Create functions to run codes for:
  - Function starting the quiz, 🙌
  - Function for starting the timer that will decrement the time and display the countdown of seconds in the 'timerElement' 🙌
  - Function that will end the quiz and claer timer if any time left 🙌
  - Function to display the questions 
  - Function to validate the answer 
  - Function to end the quiz
  - Function for localStorage  

