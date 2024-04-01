let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let startBtn = document.querySelector('.start-btn');
let cardBtn = document.querySelector('.card-btn');

function startGame() {
  cardsEl.textContent = 'Cards: ' + firstCard + ' ' + secondCard;
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


startBtn.addEventListener('click', startGame);
cardBtn.addEventListener('click', newCard)
// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    
}