(function () {
    'use strict';
    angular.module('Tombola.Setup')
        .controller('TextController',['$scope','$state','ApiProxy','PlayerSwitcher',function($scope,$state,apiProxy,playerSwitcher){
            $scope.playerOne = "human";
            $scope.playerTwo = "human";
            $scope.startGame=function(){
                var gameboard ='';
                apiProxy.newGame($scope.playerOne,$scope.playerTwo).then(
                    function(response){
                        gameboard = response.data.gameboard;
                        playerSwitcher.playerSwitch($scope.playerOne,$scope.playerTwo,gameboard);
                        $state.go('playing');
                    },
                    function(){
                    });
            };
            $scope.lobbyReturn=function(){
                $state.go('lobby');
            };
        }]);
})();