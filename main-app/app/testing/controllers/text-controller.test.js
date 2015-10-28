(function () {
    'use strict';
    describe('TextController',function(){
        var sandbox,
            controller,
            scope,
            q,
            deferred,
            stateSpy,
            playerSwitchSpy,
            apiProxyStub;
        beforeEach(function(){
            module('Tombola.Setup');
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
            playerSwitchSpy=sinon.sandbox.spy(mocks.PlayerSwitcher,'playerSwitch');
            stateSpy=sinon.sandbox.spy(mocks.$state,'go');
        });
        afterEach(function() {
            sandbox.restore();
        });
        it('see if values are initialised',function(){
            scope.playerOne.should.equal('human');
            scope.playerTwo.should.equal('human');
        });
        it('should make newGame call to API and then initialise game state',function(){
            apiProxyStub=sinon.sandbox.stub(mocks.ApiProxy,'newGame',function(){
                return deferred.promise;
            });
            scope.startGame();
            deferred.resolve({data:{gameboard:'000000000'}});
            scope.$digest();
            playerSwitchSpy.should.have.been.calledOnce.calledWithExactly(scope.playerOne,scope.playerTwo,'000000000');
            stateSpy.should.have.been.calledOnce.calledWithExactly('playing');
        });
        it('should return to lobby state',function(){
            scope.lobbyReturn();
           stateSpy.should.have.been.calledOnce.calledWithExactly('lobby');
        });
    });
})();