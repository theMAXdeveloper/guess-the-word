const guessedLetters = document.querySelector(".guessed-letters");
//ul element displaying player's guessed letters
const guessButton = document.querySelector(".guess");
// "Guess!" button
const textInput = document.querySelector(".letter");
// Text input area for guessing a letter
const wordInProgress = document.querySelector(".word-in-progress");
// p element displaying hidden word & guess in progress
const remaining = document.querySelector(".remaining");
// p element displaying remaining number of guesses sentence
const remainingNumber = document.querySelector(".remaining span");
// Actual number of remaining guesses remaining
const guessMessage = document.querySelector(".message");
// Message displaying if text input was valid or if guess was right
const playAgainButton = document.querySelector(".play-again");
// Hidden "play again" button 
const word = "magnolia";
const guessedLettersArray = [];


const placeholder = function (word) {
	const placeholderArray = [];
	const splitWord = word.split("")
	for (let letter of splitWord) {
		placeholderArray.push("●")
	}
	wordInProgress.innerText = placeholderArray.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
	e.preventDefault();
	const letterInput = textInput.value;
	//console.log(letterInput);
	textInput.value = "";
	guessMessage.innerText = "";

	const validateMessage = validateInput(letterInput);
	//console.log(validateMessage);
	makeGuess(validateMessage);
	
	console.log(guessedLettersArray);
});


const validateInput = function (letterInput) {
	const acceptedLetter = /[a-zA-Z]/;
	if (letterInput === "") {
		guessMessage.innerText = "Please input one letter."
	} else if (letterInput.length > 1) {
		guessMessage.innerText = "Please input a SINGLE letter."
	} else if (!letterInput.match(acceptedLetter)) {
		guessMessage.innerText = "That's not a letter, please try again..."
	} else {
		return letterInput;
	}
};


const makeGuess = function (letter) {
	const letterUppercase = letter.toUpperCase();
	if (guessedLettersArray.includes(letterUppercase)) {
		guessMessage.innerHTML = `You have already guessed the letter ${letterUppercase}, please try again`
	} else {
		guessedLettersArray.push(letterUppercase);
	}
};


