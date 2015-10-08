(function () {
    'use strict';
    angular.module('Tombola.Win')
        .controller('WinController',['$scope','$state','WinDecider',function($scope,$state,winDecider){
            $scope.showWinner=function(){
                if(winDecider.winner===1){
                    $state.go('player1Win');
                }
                else{
                    $state.go('player2Win');
                }
            };
    }]);
})();