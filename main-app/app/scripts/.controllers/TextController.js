(function () {
    'use strict';
    angular.module('Tombola.Setup')
        .controller('TextContoller',['$scope','HttpStartGame','PlayerSwitcher',function($scope,httpStartGame,playerSwitcher){
            $scope.titleMessage = "Welcome to Noughts and Crosses";
            $scope.playerOne = "human";
            $scope.playerTwo = "human";
            $scope.startGame=function(){
                playerSwitcher.playerSwitch($scope.playerOne,$scope.playerTwo);
                httpStartGame.newGame($scope.playerOne,$scope.playerTwo).then(
                    function(response){
                    },
                    function(){
                    });
            };
        }]);
})();