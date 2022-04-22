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
// p element displaying message if text input was valid or if guess was right
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

	const validatedLetter = validateInput(letterInput);
	//console.log(validatedLetter);
	makeGuess(validatedLetter);
	
	//console.log(guessedLettersArray);
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
		showGuessed();
		updateWord(guessedLettersArray);
	}
};

const showGuessed = function () {
	guessedLetters.innerHTML = "";
	for (let letter of guessedLettersArray) {
		const guessedLi = document.createElement("li");
		guessedLi.innerText = letter;
		guessedLetters.append(guessedLi);
	}
};

const updateWord = function (guessedLettersArray) {
	const wordUpper = word.toUpperCase();
	const wordArray = wordUpper.split("")
	//console.log(wordArray);
	const updatedGuess = [];
	for (let letter of wordArray) {
		if (guessedLettersArray.includes(letter)) {
			updatedGuess.push(letter)
		} else {
			updatedGuess.push("●")
		}
	}
	wordInProgress.innerText = updatedGuess.join("");
	winMessage();
};

const winMessage = function () {
	if (word.toUpperCase() === wordInProgress.innerText) {
		guessMessage.classList.add("win");
		guessMessage.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`
	}
};




