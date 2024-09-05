let firstCard = getRandomCard();
let secondCard = getRandomCard();

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let sumEl = document.getElementById("sum-el");

let messageEl = document.getElementById("message-el");

let cardEl = document.getElementById("card-el");

let cards = [firstCard, secondCard];

function startGame() {
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card😊";
  } else if (sum === 21) {
    message = "you've got Blackjack😎";
    hasBlackJack = true;
  } else {
    message = "You are out of the game😭";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    let newCardNumber = getRandomCard();
    cards.push(newCardNumber);
    sum += newCardNumber;
    renderGame();
    console.log("Drawing a new card from the deck");
  }
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 11);
  return randomNumber;
}
