(function () {
    'use strict';
    angular.module('Tombola.Gameboard')
        .controller('GameController',['$scope','$state','HttpMakeMove','PlayerSwitcher','WinDecider',function($scope,$state,httpMakeMove,playerSwitcher,winDecider){
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
                            winDecider.theWinner(data.winner);
                            $state.go('win');
                        }
                        if(data.outcome==='Draw'){
                            $state.go('draw');
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