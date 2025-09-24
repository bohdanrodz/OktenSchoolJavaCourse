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

let aceSpade = cardDeck.find(value => value.value === 'ace' && value.cardSuit === 'spade');
console.log(aceSpade);
let valueSixCards = cardDeck.filter(value => value.value === '6');
console.log(valueSixCards);
let redCards = cardDeck.filter(value => value.color === 'red');
console.log(redCards);
let diamondCards = cardDeck.filter(value => value.cardSuit === 'diamond');
console.log(diamondCards);
let overNineClubCards = cardDeck.filter((value, index) => index > 11 && value.cardSuit === 'clubs');
console.log(overNineClubCards);