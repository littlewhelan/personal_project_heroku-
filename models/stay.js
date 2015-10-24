var calcScore = require('../logic/calcScores');
var vars = require('../logic/vars');
var bust = require('../logic/handBust');
var dFin = require('../logic/dealerHitTo17');
var comp = require('../logic/compareScores');
var hiLow = require('../logic/hiLowCount');
var dbl = require('../logic/canDoubleDown2');

var stand = function () {

            if(vars.split1Array.length == 1) {
                vars.playerHandActive = false;
                vars.split1Active = true;
                vars.playerCanHit = true;
                vars.playerCanStay = false;
                //check if player can double on split1
                dbl.split1Array();
                //check if player can split again -- this will be after getting one split working

        } else {
                vars.playerCanSplit = false;
                vars.playerCanStand = false;
                //check the score of the dealer will account for any aces as well
                calcScore.dealerScoreF();
                //dealer hits until he has 17
                dFin();
                // checks if the dealer has bust if yes pays out
                vars.allHandsDone = true;
                vars.playerCanHit = false;
                vars.playerCanDouble = false;
                bust.dealer();
                //if neither the player or the dealer bust compares the scores and pays out
                comp.player();
                //hiLow();
                }



};

module.exports = stand;