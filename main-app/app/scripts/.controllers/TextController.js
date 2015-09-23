(function () {
    'use strict';
    angular.module('Tombola.Setup')
        .controller('TextContoller',['$scope','$state','HttpStartGame','PlayerSwitcher',function($scope,$state,httpStartGame,playerSwitcher){
            $scope.titleMessage = "Welcome to Noughts and Crosses";
            $scope.playerOne = "human";
            $scope.playerTwo = "human";
            $scope.startGame=function(){
                var gameboard ='';
                httpStartGame.newGame($scope.playerOne,$scope.playerTwo).then(
                    function(response){
                        gameboard = response.data.gameboard;
                        playerSwitcher.playerSwitch($scope.playerOne,$scope.playerTwo,gameboard);
                        $state.go('playing');
                    },
                    function(){
                    });
            };
        }]);
})();