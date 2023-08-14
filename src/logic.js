function randomCardOrder(cards) {
  let randomCardArray = [];
  while (cards.length > 0) {
    let randomNumber = Math.floor(Math.random() * cards.length);
    let randomCard = cards.splice(randomNumber, 1);
    randomCardArray.push(randomCard[0]);
  }
  return randomCardArray;
}

export { randomCardOrder };
