describe('Unit testing squares',function(){
    var compile;
    var scope;
    var element;
    var squareNumber = 4;
    beforeEach(function(){
        provide(function($provide){

        });
    });
      beforeEach(function(){
        module('Tombola.SquareDirective');
        inject(function($injector){
            element = angular.element('<div ng-click="makeTurn('+squareNumber+')" class= "cell player{{gameBoard['+squareNumber+']}}"></div>');
            compile = $injector.get('$compile');
            scope = $injector.get('$rootScope').$new();
        });
          compile(element)(scope);
          scope.$digest();
    });

    it('checks it sets up element', function() {
        element.attr('ng-click').should.equal('makeTurn(4)');
        //element.attr('class').should.equal('cell player');
    });
});