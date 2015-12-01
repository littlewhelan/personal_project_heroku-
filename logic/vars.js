var score = {
    //is the hand complete or what hand is active
    playerHandActive:true,
    split1Active:false,
    //what is the score of the hand
    dealerScore:'',
    playerScore:'',
    split1Score:'',
    //did the hand bust
    dealerBust:false,
    playerBust:false,
    split1Bust:false,

    //was the hand a natural blackjack
    naturalBlackjackPlayer:false,
    naturalBlackjackDealer:false,
    //is the dealers first card an ace
    dealersFirstCardIsAce:false,
    //tracking the deck of cards
    startDeckArray: [],
    dealerArray: [],
    playerArray: [],
    discardArray: [],
    split1Array: [],
    //bet that the player makes and the total amount the player has to bet with
    playersBank: '',
    playerBet: ''|| 2, //or the input Value some set value from the index page

    //checking if it is possible to double
    playerCanDouble:false,
    //the player can still hit the hand
    playerCanHit:true,
    //checking if player can split hand
    playerCanSplit:false,
    //player can stay
    playerCanStand: true,
    //checking if all hands are done
    allHandsDone:false,


};


module.exports= score;