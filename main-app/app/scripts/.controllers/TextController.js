(function () {
    'use strict';
    angular.module('Tombola.Setup')
        .controller('TextContoller',['$scope','HttpStartGame',function($scope,httpStartGame){
            $scope.titleMessage = "Welcome to Noughts and Crosses";
            $scope.playerOne = "human";
            $scope.playerTwo = "human";
            $scope.gameReady=false;

            $scope.startGame=function(){
                httpStartGame.newGame($scope.playerOne,$scope.playerTwo).then(
                    function(response){
                        $scope.gameReady=true;
                        $scope.gameBoard=response.data.gameboard;
                    },
                    function(){
                    });
            };
        }]);
})();