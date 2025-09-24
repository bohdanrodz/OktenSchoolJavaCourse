cardValuesArray = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
cardSuitsArray = ['spade','diamond', 'clubs', 'heart'];
cardColorsArray = ['black', 'red'];
cardDeck = [];
for (const cardValue of cardValuesArray) {
    for (let i = 0; i < 4; i++) {
        cardDeck.push({
            cardSuit: cardSuitsArray[i],
            value: cardValue,
            color: cardColorsArray[i%2]
        });
    }
}
console.log(cardDeck);

cardDeckPacked = cardDeck.reduce( (acc, card) => {
    if (card.cardSuit === 'spade') {
        acc.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        acc.diamonds.push(card);
    } else if (card.cardSuit === 'clubs') {
        acc.clubs.push(card);
    } else {
        acc.hearts.push(card);
    }
    return acc;
}, {spades: [], diamonds: [], clubs: [], hearts: []});
console.log(cardDeckPacked);