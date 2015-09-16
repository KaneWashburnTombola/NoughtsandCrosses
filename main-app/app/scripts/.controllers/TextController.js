(function () {
    'use strict';
    angular.module('Tombola.setup')
        .controller('TextContoller',['$scope','HttpCall',function($scope,httpCall){
            $scope.titleMessage = "Welcome to Noughts and Crosses";
            $scope.playerOne = "";
            $scope.playerTwo = "";
            $scope.gameReady=false;
            var currentPlayer;
            $scope.startGame=function(){
                httpCall.newGame($scope.playerOne,$scope.playerTwo,$scope.gameBoard).then(
                    function(response){
                        $scope.gameReady=true;
                        $scope.gameBoard=response.data.gameboard;
                        currentPlayer='1';
                    },
                    function(){
                    });
            };
            $scope.makeTurn=function(number){
                if($scope.gameBoard[number]!=='0'){
                    return;
                }
                httpCall.newTurn(currentPlayer,number,$scope.gameBoard).then(
                    function(data){
                        $scope.gameBoard=data.gameboard;
                        $scope.gameBoard=$scope.gameBoard.substr(0,number) + currentPlayer + $scope.gameBoard.substr(number+1);
                        if(data.outcome==='Win'){
                          //TODO win animation thingy
                        }
                    },
                    function(){
                    });
                if($scope.playerOne==='human'&& $scope.playerTwo==='human'){
                    currentPlayer=currentPlayer==='1'? '2':'1';
                }
                else if($scope.playerOne==='human'&& $scope.playerTwo!=='human'){
                    currentPlayer='1';
                }
                else if($scope.playerOne!=='human'&& $scope.playerTwo==='human'){
                        console.log("currentplayer changing to 2");
                    currentPlayer='2';
                }
            };
        }]);
})();