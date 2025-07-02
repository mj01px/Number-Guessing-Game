let randomNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
let attempts = 1;

// Function to show an alert message
function displayGameInfo(tag, text) {
    let camp = document.querySelector(tag);
    camp.innerHTML = text;
}
// Game information
displayGameInfo('#question-text', 'Find out the Number');
displayGameInfo('#question-subtext', 'I thought of a number between 0 and 10. Can you guess it?');

// Speak text function to read out the game instructions
function speakText(text) {
    const voiceEnabled = localStorage.getItem("voiceEnabled");

    if (voiceEnabled === "true") {
        responsiveVoice.speak(text);
    }
}

speakText("Find out the Number. I thought of a number between 0 and 10. Can you guess it?");

// Function of button click
function sendButton() {
    // Get the input value
    let input = document.querySelector('input').value;

    // Check if the input is empty
    if (input === '') {
        showAlert('Please enter a number!');
        return;
    }

    input = Number(input);

    // Check if the input is a valid number
    if (input < 0 || input > 10) {
        showAlert('Please enter a number between 0 and 10!')
        return;
    }

    // Compare the input with the random number
    if (input < randomNumber) {
        showAlert(`The secret number is greater than ${input}. Try again!`);
        attempts++;
        return;
    } else if (input > randomNumber) {
        showAlert(`The secret number is less than ${input}. Try again!`);
        attempts++;
        return;
    }

    // If the input matches the random number, display a success message
    let attemptsText = attempts > 1 ? "attempts" : "attempt";
    showAlert(`Congratulations! You guessed the secret number in ${attempts} ${attemptsText}.`);
}

// Reset the game
function ngButton() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 1;
    showAlert('New game started! Try to guess the new number.');
    //clear the input field
    document.querySelector('input').value = '';
}

// Reload to index page
function ReloadToIndex() {
    if (performance.getEntriesByType("navigation")[0].type == "reload") {
        window.location.href = '../index.html';
    }
}

ReloadToIndex();