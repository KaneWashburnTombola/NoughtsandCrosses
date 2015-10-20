describe('TextController',function(){
    var sandbox;
    var ApiProxy;
    var PlayerSwitcher;
    var controller;
    var scope;
    beforeEach(function() {
        module('Tombola.Setup');
        module(function($provide){
            $provide.service('ApiProxy',mocks.ApiProxy);
            $provide.service('PlayerSwitcher',mocks.PlayerSwitcher);
        });
        inject(function($rootScope,$controller){
            scope=$rootScope.$new();
            controller= $controller('TextController',{
                $scope:scope,
                $state:mocks.$state,
                ApiProxy:mocks.ApiProxy,
                PlayerSwitcher:mocks.PlayerSwitcher
            });
        });
        sandbox = sinon.sandbox.create();
    });
    afterEach(function() {
    });
        it('see if values are initialised',function(){
            scope.titleMessage.should.equal('Welcome to Noughts and Crosses');
            scope.playerOne.should.equal('human');
            scope.playerTwo.should.equal('human');
        });
    it('should make newGame call to API and then initialise game state',function(){
        scope.playerOne='human';
        scope.playerTwo='human';
        ApiProxy=sinon.sandbox.stub().returns({'outcome':'Continue','gameboard':'000000000','winner':0});
        scope.startGame(ApiProxy);
    });
});