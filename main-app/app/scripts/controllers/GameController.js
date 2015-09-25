(function () {
    'use strict';
    angular.module('Tombola.Gameboard')
        .controller('GameController',['$scope','HttpMakeMove','PlayerSwitcher',function($scope,httpMakeMove,playerSwitcher){
            $scope.gameBoard= playerSwitcher.gameBoard;
            var currentPlayer = playerSwitcher.currentPlayer;
            $scope.makeTurn=function(number){
                if($scope.gameBoard[number]!=='0'){
                    return;
                }
                httpMakeMove.newTurn(currentPlayer,number).then(
                    function(data){
                        $scope.gameBoard=data.gameboard;
                        if(data.outcome==='Win'){
                            console.log('everyday im winning!');
                            //TODO win animation thingy
                        }
                    },
                    function(data){
                        console.log("makeMove failed"+data);
                    });
                playerSwitcher.playerSwap();
                currentPlayer = playerSwitcher.currentPlayer;
            };
        }]);
})();