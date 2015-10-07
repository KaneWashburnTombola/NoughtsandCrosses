(function () {
    'use strict';
    describe('GameController',function(){
       beforeEach(module('Tombola.Gameboard')) ;
        var $controller;
        beforeEach(inject(function(_$controller_){
            $controller=_$controller_;
        }));

        describe('$scope.gameboard',function(){
            //it('sets the gameboard to 000000000',function{
            //   var $scope = {};
            //    var controller = $controller('GameController',{$scope:$scope});
            //    $scope.gameBoard =  playerSwitcher.gameBoard;
            //
            //});
        });
    });
})();