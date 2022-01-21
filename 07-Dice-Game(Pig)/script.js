/* eslint-env browser */

// select the elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

dice.classList.add('hidden');
const scores = [0, 0]; // array to hold the scores
let currentScore = 0; // variable to track the score and hold its state
let activePlayer = 0; // variable to track the active player and switch player state

let playing = true; // Gameplay switch turns off game functionality using boolean values

/* Todo: I want to add logic that applies new emojis one for 
the winner and another for the loser applied after the first 
full game when new game is clicked */

/* reset game elements on btnNew event 
bo0lean param turns gameplay back on after 
verifying winner turns it off */
const newGame = boolean => {
  if (boolean) {
    scores[0] = 0;
    scores[1] = 0;

    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');

    document.getElementById(`name--0`).textContent = 'Player 1 😸';
    document.getElementById(`name--1`).textContent = 'Player 2 😺';
    dice.classList.add('hidden');
  }
};

// function to switch players keeps code DRYish(Dont Repeat Yourself)
const nextPlayer = () => {
  activePlayer = activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  currentScore = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Dice roll button click functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    // Generates a random dice roll
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    // Displays the corresponding dice image
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;

    // Check for Dice roll of 1
    if (diceRoll !== 1) {
      // add dice to the current score
      currentScore += diceRoll;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to the next player
      nextPlayer();
    }
  }
});

// New Game Reset Button Functionality
btnNew.addEventListener('click', () => {
  playing = true;
  newGame(playing);
});

// score keeping hold button functionality and  check for winner update
btnHold.addEventListener('click', () => {
  if (playing) {
    // keep score between rolls and player turns
    scores[activePlayer] += currentScore;

    // set score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check for winner
    if (scores[activePlayer] >= 100) {
      // winner found means game is over and playing now false
      playing = false;
      // notify winner on screen of win
      // todo: add confetti with confetti js it was really late when I did this
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.getELementById(`name--${activePlayer}`).textContent =
        'Winner!🎊';
    } else {
      // switch player and make it DRY😘
      nextPlayer();
    }
  }
});
