var vars = require('./vars');

var hiLow = function() {
    vars.hiLowCount = 0;

    vars.playerArray.forEach(function (element) {
        //increase count if value of card is 2 to 6
        if (element.value > 1 && element.value < 7) {
            vars.hiLowCount += 1;
            //decrease count value if value of card is 10 or ace
        } else if (element.value == 10 || 1) {
            vars.hiLowCount -= 1
        }
    });

    vars.dealerArray.forEach(function (element) {
        //increase count if value of card is 2 to 6
        if (element.value > 1 && element.value < 7) {
            vars.hiLowCount += 1;
            //decrease count value if value of card is 10 or ace
        } else if (element.value == 10 || 1) {
            vars.hiLowCount -= 1
        }
    });

    vars.split1Array.forEach(function (element) {
        //increase count if value of card is 2 to 6
        if (element.value > 1 && element.value < 7) {
            vars.hiLowCount += 1;
            //decrease count value if value of card is 10 or ace
        } else if (element.value == 10 || 1) {
            vars.hiLowCount -= 1
        }
    });

    vars.discardArray.forEach(function (element) {
        //increase count if value of card is 2 to 6
        if (element.value > 1 && element.value < 7) {
            vars.hiLowCount += 1;
            //decrease count value if value of card is 10 or ace
        } else if (element.value == 10 || 1) {
            vars.hiLowCount -= 1
        }

    });

};
module.exports = hiLow;

