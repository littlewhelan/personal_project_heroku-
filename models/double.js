var cards = require('../logic/cards');
var vars = require('../logic/vars');
var calcScore = require('../logic/calcScores');
var bust = require('../logic/handBust');
var dFin = require('../logic/dealerHitTo17');
var comp = require('../logic/compareScores');

var double = function() {
    //the player can no longer double
    vars.playerCanDouble = false;
    //The player can not hit if they choose to double
    vars.playerCanHit = false;
    //set hand to done so that the dealers cards can be shown
    vars.allHandsDone = true;
    // double the current bet that the player made
    vars.playerBet = (vars.playerBet*2);
    //add one card to the players hand
    vars.playerArray.push(cards.drawCard());
    // recheck the value of the hand will check for ace as well
    calcScore.playerScoreF();
    //check to see if the player busts if the player busts take money from the account
    bust.player();
    //will deal cards to the dealer until he scores 17
    dFin();
    //compare the score if neither the dealer or the player bust
    comp.player();

};



module.exports = double;