(function () {
    'use strict';
    angular.module('Tombola.SquareDirective')
        .directive('Square',function(){
            return {
                restrict: 'E',
                scope: {
                    squareNumber: '@squareNumber'
                },
                templateUrl: function(element){
                    return '<div ng-click="makeTurn('+element.squareNumber+')" class= "cell player{{gameBoard['+element.squareNumber+']}}"></div>';
                }
            };
        });
})();
