// Function to show the game information
function displayGameInfo(tag, text) {
    let camp = document.querySelector(tag);
    camp.innerHTML = text;
}

// Storage the information about user wants voice or not
function askVoicePreference() {
    const wantsVoice = confirm("Do you want to enable voice assistance for the game?");
    localStorage.setItem("voiceEnabled", wantsVoice ? "true" : "false");
    startGame();
}

// Redirect to the number guessing game page
function startGame() {
    window.location.href = "http://localhost:63342/guessing-number-game/find-out-the-number/src/web/number-guess.html";
}

// Game information
displayGameInfo('#question-text', 'Find out the Number');
displayGameInfo('#question-subtext', 'I thought of a number between 0 and 10. Can you guess it?');
