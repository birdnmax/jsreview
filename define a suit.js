// You get any card as an argument. Your task is to return a suit of this card.

// Our deck (is preloaded):

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

const suitor = (card) => {
    if (card.includes('♣')){
        return 'clubs'
    } else if (card.includes('♦')){
        return 'diamonds'
    } else if (card.includes('♥')){
        return 'hearts'
    } else if (card.includes('♠')){
        return 'spades'
    } else {
        return 'the joker'
    }
}

console.log(suitor('3♣'))
console.log(suitor('4♦'))
console.log(suitor('5♥'))
console.log(suitor('6♠'))