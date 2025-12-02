interface Card{
    cardSuit: CardSuit;
    value: CardValue;
    color: CardColor;
}
type CardValue = '6' | '7' | '8' | '9' | '10' | 'jack' | 'queen' | 'king' | 'ace';
type CardColor = 'black' | 'red';
type CardSuit = 'spade' |'diamond' | 'clubs' | 'heart'

let cardValuesArray:CardValue[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let cardSuitsArray:CardSuit[] = ['spade','diamond', 'clubs', 'heart'];
let cardColorsArray:CardColor[] = ['black', 'red'];
let cardDeck:Card[] = [];
for (const cardValue of cardValuesArray) {
    for (let i = 0; i < 4; i++) {
        cardDeck.push({
            cardSuit: cardSuitsArray[i]!,
            value: cardValue,
            color: cardColorsArray[i%2]!
        });
    }
}
console.log(cardDeck);

interface CardDeck{
    spades: Card[];
    diamonds: Card[];
    clubs: Card[];
    hearts: Card[];
}
let cardDeckPacked = cardDeck.reduce( (acc:CardDeck, card) => {
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