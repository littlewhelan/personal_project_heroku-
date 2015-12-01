var vars = require('./vars');
var dFin = require('./dealerHitTo17');
//var double = require('./canDoubleDown2');

var handBust = {

    player:function() {
        if (vars.playerScore > 21  && vars.split1Array.length > 0 ) {
                vars.playerBust = true;
                vars.playerHandActive = false;
                vars.playersBank -= vars.playerBet;
                vars.split1ArrayActive = true;
                vars.allHandsDone = false;
                vars.playerCanHit = false;
                vars.playerCanStand = false;
                vars.playerCanDouble = false;
                //check if player can double on the split
                //double.split1Array();
                //check if player can split again --- do this after have one round of splits working

        } else if (vars.playerScore > 21) {
                vars.playerBust = true;
                vars.playersBank -= vars.playerBet;
                vars.allHandsDone = true;
                vars.split1CanHit = false;
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
            vars.split1CanHit = false;
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