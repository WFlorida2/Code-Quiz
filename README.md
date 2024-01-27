    # Code-Quiz

    ## pseudocode

    1. Declare variables:
    - timer , score , highscore

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