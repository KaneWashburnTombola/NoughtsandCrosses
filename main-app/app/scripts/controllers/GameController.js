(function () {
    'use strict';
    angular.module('Tombola.Gameboard')
        .controller('GameController',['$scope','ApiProxy','PlayerSwitcher','WinDecider',function($scope,apiProxy,playerSwitcher,winDecider){
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
                            winDecider.theWinner(data.winner);
                            $state.go('win');
                        }
                    },
                    function(data){
                    });
                playerSwitcher.playerSwap();
                currentPlayer = playerSwitcher.currentPlayer;
            };
        }]);
})();