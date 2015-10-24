var emptyHands = require('./emptyHandsF');
var vars = require('./vars');

var reset = function() {
    //move all cards to discard pile
    emptyHands.dealerEmpty();
    emptyHands.playerEmpty();
    emptyHands.split1Empty();


    //reset initial values for next round
    vars.dealerBust = false;
    vars.playerBust = false;
    vars.split1Bust = false;

    vars.dealersFirstCardIsAce = false;
    vars.naturalBlackjackDealer = false;
    vars.naturalBlackjackPlayer = false;

    vars.playerBust = false;

    //reset values for button control
    vars.playerCanDouble = false;
    vars.playerCanSplit = false;
    vars.playerCanHit = true;
    vars.playerCanStand = true;

    vars.allHandsDone = false;
    vars.playerBet = 2;

    //reset active hand
    vars.playerHandActive = true;
    vars.split1Active = false;


};


module.exports = reset;