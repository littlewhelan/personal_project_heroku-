var app = angular.module('blackJack', []);

app.controller('gameCtrl',['$scope','$http', function($scope, $http) {

    $scope.getInfo = function () {
        $http({
            method: 'GET',
            url: '/activeHands'
        }).then(function (response) {
            $scope.playerHand = response.data.playerArray;
            $scope.dealerHand = response.data.dealerArray;
            $scope.split1Hand = response.data.split1Array;
            $scope.dealerScore = response.data.dealerScore;
            $scope.split1Score = response.data.split1Score;
            $scope.playerScore = response.data.playerScore;
            $scope.playersBank = response.data.playersBank;
            $scope.playerBet = response.data.playerBet;
            $scope.hiLowCount = response.data.hiLowCount;
            $scope.hideHitBtn = response.data.playerCanHit;
            $scope.showStayBtn = response.data.playerCanStand;
            $scope.hideDealBtn = response.data.playerCanHit;
            $scope.showSplitBtn = response.data.playerCanSplit;
            $scope.showDoubleBtn = response.data.playerCanDouble;
            $scope.allHandsDone = response.data.allHandsDone;
            $scope.playerHandActive = response.data.playerHandActive;
            $scope.split1Active = response.data.split1Active;

        });
    };

    //this will make a call to deal the hand for both the house and the player
    $scope.dealBtn = function () {
        this.getInfo();
        $http({
            method: 'GET',
            url: '/deal'
        }).then(function (response) {
        });
        this.getInfo();
    };

    //will cycle through the action of taking another card
    $scope.hitBtn = function () {
        this.getInfo();
        $http({
            method: 'GET',
            url: '/hit'
        }).then(function (response) {
        });
        this.getInfo();
    };

    //this will make a call to complete the dealers hand
    $scope.stayBtn = function () {
        this.getInfo();
        $http({
            method: 'GET',
            url: '/stay'
        }).then(function (response) {
        });
        this.getInfo();
    };

    //this will make a call to get the double function
    $scope.doubleBtn = function () {
        this.getInfo();
        $http({
            method: 'GET',
            url: '/double'
        }).then(function (response) {
        });
        this.getInfo()
    };

    // this is the route if the player chooses to split
    $scope.splitBtn = function () {
        this.getInfo();
        $http({
            method: 'GET',
            url: '/split'
        }).then(function (response) {
        });
        this.getInfo()
    };

}

]);

