const dealerContainer = document.getElementById('dealer-card-container');
const playerContainer = document.getElementById('player-card-container');

dealCard('player');
dealCard('dealer')

/**
 * Deals a random card on to the table.
 * This card will be assigned to the player or the house during playRound()
 */
function dealCard(dealtFor) {

let suitArray = ['hearts', 'clubs', 'spades', 'diamonds'];
let valueArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

let randomSuit = Math.floor(Math.random() * 4);
let randomValue = Math.floor(Math.random() * 13);

let suit = suitArray[randomSuit];
let value = valueArray[randomValue];

// Create <img> with attributes to visually represent the value of the card in the DOM 
let card = document.createElement('img');
card.src = `assets/images/${suit}/${value}.svg`;
card.className = 'card';
card.alt = `${value} of ${suit}`;

//Assigns the card image to the appropriate hand according to the parameter passed.
if (dealtFor === 'player') {
    playerContainer.appendChild(card);
} else if (dealtFor === 'dealer') {
    dealerContainer.appendChild(card)
}
// Returns picture cards as numerical values
if (value === 'jack' || value === 'queen' || value === 'king') {
    return value = 10;
   console.log(value)
} else if (value === 'ace') {
    return value = 11;
    console.log(value)
} else {
    return value;
    console.log(value) 
}

}

/**
 * Checks the hand value for blackjack and then loops through array to total score
 * if Ace found user will be prompted to decide if they want ace to = 1 or 11. 11(default)
 */
function checkHandValue(hand){

}

/**
 * Flips the houses hidden card face up once the players turn is over
 */
function houseReveal(){

}

/**
 * Compares final hands once both the house and the player have drawn all their desired cards
 */
function compareHands(playerHand, houseHand) {

}


