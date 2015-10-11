var calcScore = require('../logic/calcScores');
var vars = require('../logic/vars');
var bust = require('../logic/handBust');
var dFin = require('../logic/dealerHitTo17');
var comp = require('../logic/compareScores');

var stand = function () {
    //allows the face down card of the dealer to be flipped
    vars.allHandsDone = true;
    //the player has finished  their hands, they can no longer hit
    vars.playerCanHit = false;
    //The player can no longer double
    vars.playerCanDouble = false;
    //check the score of the dealer will account for any aces as well
    calcScore.dealerScoreF();
    //dealer hits until he has 17
    dFin();
    // checks if the dealer has bust if yes pays out
    bust.dealer();
    //if neither the player or the dealer bust compares the scores and pays out
    comp.player();
};

module.exports = stand;