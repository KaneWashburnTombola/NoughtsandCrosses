describe('TextController',function(){
    var sandbox;
    var ApiProxy;
    var PlayerSwitcher;
    var controller;
    var scope;
    var q;
    var deferred;
    beforeEach(function() {
        module('Tombola.Setup');
        module(function($provide){
            $provide.service('ApiProxy',mocks.ApiProxy);
            $provide.service('PlayerSwitcher',mocks.PlayerSwitcher);
        });
        inject(function($rootScope,$controller,$q){
            scope=$rootScope.$new();
            q=$q;
            deferred=$q.defer();
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
        ApiProxy=sinon.sandbox.stub(mocks.ApiProxy,'newGame',function(){
            return deferred.promise;
        });
        PlayerSwitcher=sandbox.spy(mocks.PlayerSwitcher,'playerSwitch');
        $state=sandbox.spy(mocks.$state,'go');
        scope.startGame();
        deferred.resolve({data:{gameboard:'000000000'}});
        scope.$digest();
        PlayerSwitcher.should.have.been.calledOnce.calledWithExactly(scope.playerOne,scope.playerTwo,'000000000');

    });
});