const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');
const startBtn = document.querySelector('.start-btn');
const cardBtn = document.querySelector('.card-btn');
const playerEl = document.querySelector("#player")

let cards = []
let sum = 0
let hasBlackJack = false;
let  isAlive = false;
let message = '';
let player = {
    name: "Timmy",
    chips: 200
}

playerEl.textContent = `${player.name}: $${player.chips}`


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
      return 10;
    } else if (randomNumber ===  1) {
      return 11;
    }else {
        return randomNumber
    }
}

function startGame() {
       isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard ;
  renderGame();
}

function renderGame() {
    cardsEl.textContent = 'Cards: ';
  for(let i = 0; i < cards.length; i++){
    cardsEl.textContent = 'Cards: ' + cards[i] + " "
  }
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
    if(isAlive === true && hasBlackJack === false){
      let card = getRandomCard();
      sum += card;
      cards.push(card);
      renderGame();
    }
}





startBtn.addEventListener('click', startGame);
cardBtn.addEventListener('click', newCard);
