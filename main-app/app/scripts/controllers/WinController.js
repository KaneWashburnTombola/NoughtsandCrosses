(function () {
    'use strict';
    angular.module('Tombola.Win')
        .controller('WinController',['$state','WinDecider','$scope',function($scope,$state,winDecider){
            $scope.showWinner=function(){
                console.log(winDecider.winner);
                if(winDecider.winner===1){
                    console.log(winDecider.winner);
                    $state.go('player1Win');
                }
                else{
                    console.log(winDecider.winner);
                    $state.go('player2Win');
                }
            };
    }]);
})();