// scores.js

// This code is designed to handle the display and clearing of highscores

//This event listener is triggered when the DOM (Document Object Model) has been fully loaded.
document.addEventListener("DOMContentLoaded", function () {
    // Represents the button with the id "clear" on the HTML page.
    const clearButton = document.getElementById("clear");
    // Represents the element with the id "highscores"
    const highscoresList = document.getElementById("highscores");

    // Function to remove the "highscores" item from the local storage and clears the content of the element with the id "highscores."
    function clearHighscores() {
        localStorage.removeItem("highscores");
        highscoresList.innerHTML = ""; // Clear the displayed highscores
    }

    // This sets up an event listener for the "Clear Highscores" button. When the button is clicked, it calls the clearHighscores function.
    clearButton.addEventListener("click", clearHighscores);

    // Retrieve highscores from local storage. If there are no highscores, it defaults to an empty array.
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    // Sort highscores by score in descending order
    highscores.sort((a, b) => b.score - a.score);

    
    // For each highscore in the sorted array, it creates a list item (<li>) element.
    // The list item's text content is set to display the rank, initials, and score of each highscore.
    // The list item is appended to the "highscores" list.
    highscores.forEach((score, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${score.initials}: ${score.score}`;
        highscoresList.appendChild(listItem);
    });
});


