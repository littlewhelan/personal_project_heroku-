var vars = require('./vars');

var hiLow = function() {
    vars.hiLowCount = 0;

    //need to add an if statement that checks if dealer hands is complete, if yes total all cards if no total all cards less dealer down
if(vars.allHandsDone == true) {

            vars.dealerArray.forEach(function (element) {
                //increase count if value of card is 2 to 6
                if (element.value > 1 && element.value < 7) {
                    vars.hiLowCount += 1;
                    //decrease count value if value of card is 10 or ace
                } else if (element.value == 10 || 1) {
                    vars.hiLowCount -= 1
                }
            });

            vars.playerArray.forEach(function (element) {
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

            vars.split2Array.forEach(function (element) {
                //increase count if value of card is 2 to 6
                if (element.value > 1 && element.value < 7) {
                    vars.hiLowCount += 1;
                    //decrease count value if value of card is 10 or ace
                } else if (element.value == 10 || 1) {
                    vars.hiLowCount -= 1
                }
            });
            vars.split3Array.forEach(function (element) {
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

} else if (vars.allHandsDone ==false) {

    for(var i = 1; vars.dealerArray.length >= i; i++)
            {
                //increase count if value of card is 2 to 6
                if (vars.dealerArray[i].value > 1 && vars.dealerArray[i].value < 7) {
                    vars.hiLowCount += 1;
                    //decrease count value if value of card is 10 or ace
                } else if (vars.dealerArray[i].value == 10 || 1) {
                    vars.hiLowCount -= 1
                }
            };

            vars.playerArray.forEach(function (element) {
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

            vars.split2Array.forEach(function (element) {
                //increase count if value of card is 2 to 6
                if (element.value > 1 && element.value < 7) {
                    vars.hiLowCount += 1;
                    //decrease count value if value of card is 10 or ace
                } else if (element.value == 10 || 1) {
                    vars.hiLowCount -= 1
                }
            });
            vars.split3Array.forEach(function (element) {
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

        }

};
module.exports = hiLow;

