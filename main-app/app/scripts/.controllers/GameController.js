(function () {
    'use strict';
    angular.module('Tombola.Gameboard')
        .controller('GameController',['$scope','HttpMakeMove',function($scope,httpMakeMove){
            $scope.makeTurn=function(number){
                $scope.gameBoard='000000000';
                var currentPlayer='1';
                if($scope.playerOne === 'human' && $scope.playerTwo !== 'human'){
                    currentPlayer='1';
                }
                else if($scope.playerOne !== 'human' && $scope.playerTwo === 'human'){
                    currentPlayer='2';
                }
                if($scope.gameBoard[number]!=='0'){
                    return;
                }
                httpMakeMove.newTurn(currentPlayer,number).then(
                    function(data){
                        $scope.gameBoard=data.gameboard;
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