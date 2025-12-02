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

let aceSpade:Card = cardDeck.find(value => value.value === 'ace' && value.cardSuit === 'spade')!;
console.log(aceSpade);
let valueSixCards:Card[] = cardDeck.filter(value => value.value === '6');
console.log(valueSixCards);
let redCards:Card[] = cardDeck.filter(value => value.color === 'red');
console.log(redCards);
let diamondCards:Card[] = cardDeck.filter(value => value.cardSuit === 'diamond');
console.log(diamondCards);
let overNineClubCards:Card[] = cardDeck.filter((value, index) => index > 11 && value.cardSuit === 'clubs');
console.log(overNineClubCards);