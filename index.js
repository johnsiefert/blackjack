const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');
const startBtn = document.querySelector('.start-btn');
const cardBtn = document.querySelector('.card-btn');
const firstCard = 10;
const secondCard = 4;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let  isAlive = true;
let message = '';

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards: ' + cards[0] + ' ' + cards[1];
  sumEl.textContent = 'Sum: ' + sum;
  if (sum <= 20) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}


function newCard() {
let card = 3;
sum += card
renderGame();
}





startBtn.addEventListener('click', renderGame);
cardBtn.addEventListener('click', newCard);
