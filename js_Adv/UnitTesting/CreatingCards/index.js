function createCard(face, suit) {
    let validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'P', 'A'];
    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    if (validCards.indexOf(face) < 0 || !suits.hasOwnProperty(suit)) {
        throw new Error('error');
    }

    return {
        face,
        suit,
        toString:function () {
            return face + suits[suit];
        }
    }
}

console.log('' + createCard('A', 'S'));
console.log('' + createCard('14', 'C'));