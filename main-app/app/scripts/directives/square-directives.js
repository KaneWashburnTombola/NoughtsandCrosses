(function () {
    'use strict';
    angular.module('Tombola.SquareDirective')
        .directive('square',function(){
            return {
                restrict: 'E',
                template: function(attr,element){
                    return '<div ng-click="makeTurn('+element.squareNumber+')" class= "cell player{{gameBoard['+element.squareNumber+']}}"></div>';
                }
            };
        });
})();
