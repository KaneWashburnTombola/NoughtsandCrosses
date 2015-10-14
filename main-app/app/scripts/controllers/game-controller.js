(function () {
    'use strict';
    angular.module('Tombola.Gameboard')
        .controller('GameController',['$scope','$state','ApiProxy','PlayerSwitcher','WinDecider',function($scope,$state,apiProxy,playerSwitcher,winDecider){
            $scope.gameBoard= playerSwitcher.gameBoard;
            var currentPlayer = playerSwitcher.currentPlayer;
            $scope.makeTurn=function(number){
                if($scope.gameBoard[number]!=='0'){
                    return;
                }
                apiProxy.newTurn(currentPlayer,number).then(
                    function(response){
                        $scope.gameBoard=response.data.gameboard;
                        if(response.data.outcome==='Win'){
                            winDecider.theWinner(response.data.winner);
                            $state.go('win');
                        }
                        if(response.data.outcome==='Draw'){
                            $state.go('draw');
                        }
                    },
                    function(response){
                    });
                playerSwitcher.playerSwap();
                currentPlayer = playerSwitcher.currentPlayer;
            };
        }]);
})();