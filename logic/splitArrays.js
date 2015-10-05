var vars = require ('../logic/vars');
var calc = require('../logic/calcScores');

var separate = {

    player: function () {
        //need to move one card to split array it also needs to move to the first empty array
        if (vars.playerCanSplit == true && vars.split1Array.length == 0) {
            vars.split1Array.push(vars.playerArray.shift());
            calc.playerScoreF();
            vars.playerCanSplit = false;
        }
        // else if (vars.playerCanSplit == true && vars.split2Array.length == 0) {
        //    vars.split2Array.push(vars.playerArray.shift());
        //    calc.playerScoreF();
        //    vars.playerCanSplit = false;
        //} else if (vars.playerCanSplit == true && vars.split3Array.length == 0) {
        //    vars.split3Array.push(vars.playerArray.shift());
        //    calc.playerScoreF();
        //    vars.playerCanSplit = false;
        //}
        //}
    }
};

module.exports = separate;