var vars = require('../logic/vars');
var cards = require('../logic/cards');
var calc = require('../logic/calcScores');
var bust = require('../logic/handBust');
var canDouble = require('../logic/canDoubleDown2');
var canSplit = require('../logic/canSplit');
//var hiLow = require('../logic/hiLowCount');


var hitOriginalHand = function() {

    if (vars.playerHandActive == true) {
            vars.playerCanSplit = false;
            //draw one more card
            vars.playerArray.push(cards.drawCard());
            //check the new score
            calc.playerScoreF();
            //Check to see if the player bust if true subtract the bet
            bust.player();
            canDouble.player();
            canSplit.player(vars.playerArray);
            //hiLow();
    } else if (vars.split1Active == true) {
        //draw one more card
        vars.split1Array.push(cards.drawCard());
        //check the new score
        calc.split1ScoreF();
        //Check to see if the player bust if true subtract the bet
        bust.split1Array();
        canDouble.split1Array();
        //Not sure if this needs to be here....
        //canSplit.player(vars.playerArray);
        //hiLow();

        }





};

module.exports = hitOriginalHand;