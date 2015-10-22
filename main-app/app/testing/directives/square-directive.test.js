describe('Unit testing squares',function(){
    var compile,
        scope,
        element;
      beforeEach(function(){
        module('Tombola.SquareDirective');
        inject(function($compile,$rootScope){
            compile = $compile;
            scope = $rootScope.$new();
        });
          scope.gameBoard='000010000';
          element=compile('<square square-number="4"></square>')(scope);
          scope.$digest();
    });
    it('checks it sets up element', function() {
        element.attr('ng-click').should.equal('makeTurn(4)');
        element.attr('class').should.equal('cell player1');
    });
});
