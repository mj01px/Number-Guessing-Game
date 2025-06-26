// Main JavaScript file for the Find Out the Number game
function displayGameInfo(tag, text) {
    let camp = document.querySelector(tag);
    camp.innerHTML = text;
}

// Display game information
displayGameInfo('#question-text', 'Find out the Number');
displayGameInfo('#question-subtext', 'I thought of a number between 0 and 10. Can you guess it?');

// Function to speak the initial game instructions
function speakText() {
    responsiveVoice.speak("Find out the Number. I thought of a number between 0 and 10. Can you guess it");
}
speakText()

// Redirect to the number guessing game page
function startGame() {
    window.location.href = "http://localhost:63342/guessing-number-game/find-out-the-number/src/web/number-guess.html";
}