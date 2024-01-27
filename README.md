# Code-Quiz

## pseudocode

1. Declare variables:
   - timer
   - currentQuestionIndex
   - score
   - initials

2. Set up event listeners:
   - When start button is clicked:
     - Start the timer
     - Hide start screen
     - Show questions screen
     - Load the first question
     - Display choices for the first question

   - When an answer button is clicked:
     - Check if the answer is correct
     
     - If correct: (If else code)
       - Increase score
     - else If incorrect:
       - Subtract time from the timer
     
     - Move to the next question
     - Display choices for the next question

   - When the timer reaches 0 or all questions are answered:
     - Stop the timer
     - Hide questions screen
     - Show end screen
     - Display final score
     - Allow user to enter initials

   - When submit button is clicked on the end screen:
     - Save the initials and score
     - Display high scores

   - When clear button is clicked on the high scores screen:
     - Clear the high scores

3. Define Functions:
   - function startQuiz()
   - function endQuiz()
   - function startTimer()
   - function displayQuestion()
   - function checkAnswer(selectedAnswer)

4. Main Logic:
   - Initialize variables
   - Set up event listeners
   - Define functions
   - Load initial screen
