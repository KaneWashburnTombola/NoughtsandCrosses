(function () {
    'use strict';
    angular.module('Tombola.setup')
        .controller('TextContoller',['$scope','HttpCall',function($scope,httpCall){
            $scope.titleMessage = "Welcome to Noughts and Crosses";
            $scope.playerOne = "human";
            $scope.playerTwo = "human";
            $scope.gameReady=false;
            var currentPlayer='1';
            $scope.startGame=function(){
                httpCall.newGame($scope.playerOne,$scope.playerTwo).then(
                    function(response){
                        $scope.gameReady=true;
                        $scope.gameBoard=response.data.gameboard;
                    },
                    function(){
                    });
            };
            $scope.makeTurn=function(number){

                if($scope.playerOne === 'human' && $scope.playerTwo !== 'human'){
                    currentPlayer='1';
                }
                else if($scope.playerOne !== 'human' && $scope.playerTwo === 'human'){
                        currentPlayer='2';
                    }
                if($scope.gameBoard[number]!=='0'){
                    return;
                }
                httpCall.newTurn(currentPlayer,number).then(
                    function(data){
                        $scope.gameBoard=data.gameboard;
                        console.log(currentPlayer);
                        if(data.outcome==='Win'){
                          //TODO win animation thingy
                        }
                        if($scope.playerOne === 'human' && $scope.playerTwo === 'human') {
                            currentPlayer = currentPlayer === '1' ? '2' : '1';
                        }
                    },
                    function(data){
                        console.log("makeMove failed"+data);
                    });
            };


        }]);
})();