(function () {
    'use strict';
    angular.module('Tombola.setup',[]);

    angular.module('Tombola.setup')
        .controller('TextContoller',function($scope){
            $scope.titleMessage = "Welcome to Noughts and Crosses";
            $scope.player1 = "";
            $scope.player2 = "";
            $scope.gameboard='000000000';
            $scope.makeTurn=function(number){
                for(var char in gameboard){
                    
                }
            };
        });
})();