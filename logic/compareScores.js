var vars = require('./vars');

var compare = {

      player: function() {
          if (vars.dealerBust == false && vars.playerBust == false && vars.playerScore > vars.dealerScore) {
              vars.playersBank += vars.playerBet;
          } else if (vars.dealerBust == false && vars.playerBust == false && vars.playerScore < vars.dealerScore) {
              vars.playersBank -= vars.playerBet;
          }

      },

    split1: function() {
        if (vars.dealerBust == false && vars.split1Bust == false && vars.split1Score > vars.dealerScore) {
            vars.playersBank += vars.playerBet;
        } else if (vars.dealerBust == false && vars.split1Bust == false && vars.split1Score < vars.dealerScore) {
            vars.playersBank -= vars.playerBet;
        }

    }
};

module.exports = compare;

