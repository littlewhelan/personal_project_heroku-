var vars = require('../logic/vars');
var cards = require('../logic/cards');
var calc = require('../logic/calcScores');
var bust = require('../logic/handBust');
var canDouble = require('../logic/canDoubleDown2');
var canSplit = require('../logic/canSplit');


var hitOriginalHand = function() {

    //draw one more card
    vars.playerArray.push(cards.drawCard());
    //check the new score
    calc.playerScoreF();
    //Check to see if the player bust if true subtract the bet
    bust.player();
    canDouble.player();
    canSplit.player(vars.playerArray);




};

module.exports = hitOriginalHand;