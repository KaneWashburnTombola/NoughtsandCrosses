describe('Unit testing squares',function(){
    var compile;
    var scope;
    var element;
    var squareNumber = 4;
    var sandbox;
    var ApiProxySpy;
      beforeEach(function(){
        module('Tombola.SquareDirective');
          module(function($provide){
              $provide.service('ApiProxy',mocks.ApiProxy);
          });
        inject(function($compile,$rootScope){
            element = angular.element('<div ng-click="makeTurn('+squareNumber+')" class= "cell player{{gameBoard['+squareNumber+']}}"></div>');
            compile = $compile;
            scope = $rootScope.$new();
        });
          compile(element)(scope);
          scope.$digest();
          sandbox = sinon.sandbox.create();
          ApiProxySpy = sinon.sandbox.spy(mocks.ApiProxy,'newTurn');
    });
    it('checks it sets up element', function() {
        element.attr('ng-click').should.equal('makeTurn(4)');
        ApiProxySpy.newTurn('1','4');
        element.attr('class').should.equal('cell player1');
    });
    afterEach(function(){
       ApiProxySpy.verify();
        sandbox.restore();
    });
});