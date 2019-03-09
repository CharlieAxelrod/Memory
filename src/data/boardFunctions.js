import deck from './deck.js';

function deal() {
  let cards = deck.slice();
  for (let i = (cards.length - 1); i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
  }
  return cards;
}

export default { deal };