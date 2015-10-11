var vars = require('./vars');

var compare = {

      player: function() {
          if (vars.dealerBust == false && vars.playerBust == false && vars.playerScore > vars.dealerScore) {
              vars.playersBank += vars.playerBet;
          } else if (vars.dealerBust == false && vars.playerBust == false && vars.playerScore < vars.dealerScore) {
              vars.playersBank -= vars.playerBet;
          }
      }
};

module.exports = compare;

