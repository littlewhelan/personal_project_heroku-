var vars = require('../logic/vars');
var cards = require('../logic/cards');
var calc = require('../logic/calcScores');
var bust = require('../logic/handBust');

var hitOriginalHand = function() {
    //draw one more card for the players hand
    vars.playerArray.push(cards.drawCard());
    //check the new score
    calc.playerScoreF();
    //Check to see if the player bust if true subtract the bet
    bust.player();
    //player can no longer double
    vars.playerCanDouble = false;
};

module.exports = hitOriginalHand;