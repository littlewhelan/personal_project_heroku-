var score = {
    //is the hand complete
    playerDone:false,
    //what is the score of the hand
    dealerScore:'',
    playerScore:'',
    //did the hand bust
    dealerBust:false,
    playerBust:false,
    //was the hand a natural blackjack
    naturalBlackjackPlayer:false,
    naturalBlackjackDealer:false,
    //is the dealers first card an ace
    dealersFirstCardIsAce:false,
    //tracking the deck of cards
    startDeckArray:[],
    dealerArray: [],
    playerArray: [],
    discardArray: [],
    split1Array:[],
    split2Array:[],
    split3Array:[],
    //bet that the player makes and the total amount the player has to bet with
    playersBank: '',
    playerBet: ''|| 2, //or the input Value some set value from the index page
    //checking if it is possible to double
    playerCanDouble:false,
    //the player can still hit the hand
    playerCanHit:true,
    //checking if player can split hand
    playerCanSplit:false,
    //checking if all hands are done
    allHandsDone:false,
    hiLowCount:0


};


module.exports= score;