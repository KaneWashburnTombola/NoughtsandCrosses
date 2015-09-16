(function () {
    'use strict';
    angular.module('Tombola.setup')
        .controller('TextContoller',['$scope','HttpCall',function($scope,httpCall){
            $scope.titleMessage = "Welcome to Noughts and Crosses";
            $scope.playerOne = "";
            $scope.playerTwo = "";
            $scope.gameBoard='000000000';
            var currentPlayer = '1';
            $scope.startGame=function(){
                httpCall.newGame($scope.playerOne,$scope.playerTwo,$scope.gameBoard);
            };
            $scope.makeTurn=function(number){
                if($scope.gameBoard[number]!=='0'){
                    return;
                }
                httpCall.newTurn(currentPlayer,number,$scope.gameBoard);
                $scope.gameBoard=$scope.gameBoard.substr(0,number) + currentPlayer + $scope.gameBoard.substr(number+1);
                currentPlayer=currentPlayer==='1'? '2':'1';
            };
            var winControl=function(response){
                console.log("collecting response"+response);
                if(response.data.winner==="1"){
                    alert("Player 1 wins!");
                }
                else{
                    alert("Player 2 wins!");
                }
            };
        }]);
})();