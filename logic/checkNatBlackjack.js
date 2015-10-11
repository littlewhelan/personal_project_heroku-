var vars = require('./vars');
var dFin = require('../logic/dealerHitTo17');

var naturalBlackjack = function () {
    if(vars.dealerScore == 21 && vars.dealerArray.length == 2) {
        vars.allHandsDone = true;
        vars.playerCanHit = false;
        vars.naturalBlackjackDealer =true;
    };

    if(vars.playerScore == 21 && vars.playerArray.length == 2) {
        vars.naturalBlackjackPlayer = true;
        vars.playerCanHit = false;
        vars.allHandsDone = true;
    };

    if(vars.naturalBlackjackPlayer == true && vars.naturalBlackjackDealer == true && vars.dealersFirstCardIsAce == true) {
        vars.playersBank += vars.playerBet;
        vars.allHandsDone = true;
    } else if(vars.naturalBlackjackPlayer == true && vars.naturalBlackjackDealer == false){
        vars.playersBank += ((vars.playerBet*3)/2);
        vars.allHandsDone = true;
    } else if (vars.naturalBlackjackPlayer == false && vars.naturalBlackjackDealer == true){
        vars.playersBank -= vars.playerBet;
        vars.allHandsDone = true;
    };

    if(vars.naturalBlackjackPlayer == true && vars.naturalBlackjackDealer == false) {
        dFin()
    }

};






module.exports = naturalBlackjack;