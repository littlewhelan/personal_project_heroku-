var vars = require('./vars');
var dFin = require('./dealerHitTo17');
var double = require('./canDoubleDown2');

var handBust = {

    player:function() {
        if (vars.playerScore > 21  && vars.split1Array.length > 0 ) {
                vars.playerBust = true;
                vars.playerHandActive = false;
                vars.split1Active = true;
                vars.playersBank -= vars.playerBet;
                vars.allHandsDone = false;
                vars.playerCanHit = true;
                vars.playerCanStand = true;
                vars.playerCanDouble = false;
                //check if player can double on the split
                double.split1Array();

        } else if (vars.playerScore > 21) {
                vars.playerBust = true;
                vars.playersBank -= vars.playerBet;
                vars.allHandsDone = true;
                vars.playerCanStand = false;
                vars.allHandsDone = true;
                vars.playerCanHit = false;
                dFin();
                }
    },

    split1Array:function() {
        if (vars.split1Score > 21) {
            vars.allHandsDone = true;
            vars.split1Bust = true;
            vars.playerCanHit = false;
            vars.playerCanStand = false;
            vars.playersBank -= vars.playerBet;
            dFin();
        }
    },

    dealer:function() {
        if(vars.dealerScore > 21) {
           vars.allHandsDone = true;
           vars.dealerBust = true;
           vars.playersBank += vars.playerBet;
        }
    }
};

module.exports = handBust;