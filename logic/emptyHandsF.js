var vars = require('./vars');

var emptyHands =  {

    moveToDiscard: function(element) {
        vars.discardArray.push(element); },

    dealerEmpty: function () {
        vars.dealerArray.forEach(this.moveToDiscard);
        vars.dealerArray=[];
    },

    playerEmpty: function () {
        vars.playerArray.forEach(this.moveToDiscard);
        vars.playerArray = [];
    },

    split1Empty: function () {
        vars.split1Array.forEach(this.moveToDiscard);
        vars.split1Array = [];
    }



};

module.exports = emptyHands;