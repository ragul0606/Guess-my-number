"use strict";

const guessEl = document.getElementById("guess");
const btnGuess = document.getElementById("btn-guess");
const resultEl = document.getElementById("results");
const randomNumberEl = document.getElementById("random-number");
// const guessesEl = document.getElementById("guesses");
const extraEl = document.getElementById("extra-content");

// global variables
let guesses;
let randomNumber;

const init = () => {
  guesses = 0;
  randomNumber = getRandomNumber();
};

const getRandomNumber = () => {
  const randomNumber = Math.trunc(Math.random() * 100) + 1;
  return randomNumber;
};

// event listeners

btnGuess.addEventListener("click", () => {
  const userGuess = Number(guessEl.value);

  if (userGuess) {
    if (userGuess > randomNumber) {
      guesses += 1;
      resultEl.innerHTML = `Your guess is higher`;
    } else if (userGuess < randomNumber) {
      guesses += 1;
      resultEl.innerHTML = `Your guess is Lower`;
    } else if (userGuess === randomNumber) {
      guesses += 1;
      resultEl.innerHTML = `Your guess is Correct and the Number is ${randomNumber}`;
      extraEl.innerHTML = `You have found the right answer in ${guesses} chances`;
    }
  } else {
    // validation technique
    alert(`Guess some number!`);
  }
});

init();
