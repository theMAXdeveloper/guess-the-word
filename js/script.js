//Unordered list of already "guessed" letters
const guessed = document.querySelector(".guessed-letters");
//Guess button
const guessButton = document.querySelector(".guess");
//Text input for guessing a letter
const letterInput = document.querySelector(".letter");
//Word in progress paragraph
const inProgress = document.querySelector(".word-in-progress");
//Remaining number of guesses paragraph
const remaining = document.querySelector(".remaining");
//Remaing number of guesses paragraph <span>
const remainingNumber = document.querySelector(".remaining span");
//Message paragraph after a letter is guessed
const message = document.querySelector(".message");
//Hidden "play again" button
const playAgain = document.querySelector(".play-again")
const word = "magnolia";


const placeholder = function (word) {
	const placeholderLetters = [];
	for (const letter of word) {
		console.log(letter);
		placeholderLetters.push("●")
	}
	inProgress.innerText = placeholderLetters.join("")
};

placeholder(word);


guessButton.addEventListener("click", function (e) {
	e.preventDefault();
	const inputValue = letterInput.value;
	console.log(inputValue);
	letterInput.value = "";
});