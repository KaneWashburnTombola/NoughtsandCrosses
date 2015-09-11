(function () {
    'use strict';
    angular.module('Tombola.setup',[]);

    angular.module('Tombola.setup')
        .controller('TextContoller',function($scope){
            $scope.titleMessage = "Welcome to Noughts and Crosses";
            $scope.player1 = "";
            $scope.player2 = "";
            $scope.gameboard='000000000';
            var currentTurn = 'player 1';
            $scope.makeTurn=function(number){
                var chr;
                if(currentTurn === 'player 1'){
                   chr =1;
                    //add X
                    currentTurn = 'player 2';
                }
                else{
                    //add O
                    chr=2;
                    currentTurn='player 1';
                }
                $scope.gameboard=$scope.gameboard.substr(0,number) + chr + $scope.gameboard.substr(number+1);
            };
        });
})();
