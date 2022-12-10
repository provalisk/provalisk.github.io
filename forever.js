const cards = document.querySelectorAll('.memory-card');

let cardFlipped = false;
let lockBoard = false;
let cardA, cardB;

function flipCard() {
  if (lockBoard) return;
  if (this === cardA) return;

  this.classList.add('flip');

  if (!cardFlipped) {
    /* The First Click */
    cardFlipped = true;
    cardA = this;

    return;
  }

  /* The Second Click */
  cardB = this;

  checkMatch();
}

function checkMatch() {
  let isMatch = cardA.dataset.framework === cardB.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  cardA.removeEventListener('click', flipCard);
  cardB.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    cardA.classList.remove('flip');
    cardB.classList.remove('flip');

    resetBoard();
  }, 800);
}

function resetBoard() {
  [cardFlipped, lockBoard] = [false, false];
  [cardA, cardB] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));