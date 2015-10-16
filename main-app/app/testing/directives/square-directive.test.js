describe('Unit testing squares',function(){
    var compile;
    var scope;
    var element;
    var squareNumber = 4;
    var sandbox;
    var ApiProxy;
      beforeEach(function(){
        module('Tombola.SquareDirective');
          module(function($provide){
              $provide.service('ApiProxy',mocks.ApiProxy);
          });
        inject(function($injector){
            element = angular.element('<div ng-click="makeTurn('+squareNumber+')" class= "cell player{{gameBoard['+squareNumber+']}}"></div>');
            compile = $injector.get('$compile');
            scope = $injector.get('$rootScope').$new();
        });
          compile(element)(scope);
          scope.$digest();
          sandbox = sinon.sandbox.create();
          ApiProxy = sinon.mock(mocks.ApiProxy);
    });

    it('checks it sets up element', function() {
        element.attr('ng-click').should.equal('makeTurn(4)');
        ApiProxy.newTurn('1','4');
        element.attr('class').should.equal('cell player1');
    });
    afterEach(function(){
       ApiProxy.verify();
        sandbox.restore();
    });
});