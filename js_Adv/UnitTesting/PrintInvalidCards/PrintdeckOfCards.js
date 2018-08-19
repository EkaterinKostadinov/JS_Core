function printDeckOfCards(arr) {
    function createCard(card, suit) {
        let validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (validCards.indexOf(card) < 0 || !suits.hasOwnProperty(suit)) {
            throw new Error('Invalid input data!');
        }

        return {
            card,
            suit,
            toString: function () {
                return card + suits[suit];
            }
        };
    }

    for (let i = 0; i < arr.length; i++) {
        let card = arr[i].substring(0, arr[i].length - 1);
        let suit = arr[i].substr(arr[i].length - 1, 1);

        try {
            arr[i] = createCard(card, suit);
        } catch (error) {
            console.log('Invalid card: ' + arr[i]);
            return;
        }
    }
    console.log(arr.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);