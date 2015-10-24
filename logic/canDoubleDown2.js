var vars = require('./vars');

var doubleDown = {

    player: function () {
        var sum = vars.playerScore;
        if (sum == 9 && vars.playerArray.length == 2 && vars.naturalBlackjackDealer == false) {
            vars.playerCanDouble = true;
        } else if (sum == 10 && vars.playerArray.length == 2 && vars.naturalBlackjackDealer == false) {
            vars.playerCanDouble = true;
        } else if (sum == 11 && vars.playerArray.length == 2 && vars.naturalBlackjackDealer == false) {
            vars.playerCanDouble = true;
        }
        else vars.playerCanDouble = false;
    },

     split1Array: function () {
            var sum = vars.split1Score;
            if (sum == 9 && vars.split1Array.length == 2 && vars.naturalBlackjackDealer == false) {
                vars.playerCanDouble = true;
            } else if (sum == 10 && vars.split1Array.length == 2 && vars.naturalBlackjackDealer == false) {
                vars.playerCanDouble = true;
            } else if (sum == 11 && vars.splitArray.length == 2 && vars.naturalBlackjackDealer == false) {
                vars.playerDouble = true;
            }
            else vars.playerCanDouble = false;
        }




};


module.exports = doubleDown;

