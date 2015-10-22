(function () {
    'use strict';
    describe('GameController',function() {
        var sandbox,
            controller,
            scope,
            q,
            deferred,
            stateSpy,
            playerSwitchStub,
            winDeciderSpy,
            apiProxyStub;
        beforeEach(function () {
            module('Tombola.Gameboard');
            inject(function ($rootScope, $controller, $q) {
                scope = $rootScope.$new();
                q = $q;
                deferred = $q.defer();
                controller = $controller('GameController', {
                    $scope: scope,
                    $state: mocks.$state,
                    ApiProxy: mocks.ApiProxy,
                    PlayerSwitcher: mocks.PlayerSwitcher,
                    WinDecider:mocks.WinDecider
                });
            });
            sandbox = sinon.sandbox.create();
            playerSwitchStub = sinon.sandbox.stub(mocks.PlayerSwitcher, 'playerSwap',function(){
                if(controller.currentPlayer===1){
                    return 2;
                }
                else{
                    return 1;
                }
            });
            stateSpy = sinon.sandbox.spy(mocks.$state, 'go');
            apiProxyStub=sinon.sandbox.stub(mocks.ApiProxy,'newTurn',function(){
                return deferred.promise;
            });
            winDeciderSpy = sinon.sandbox.spy(mocks.WinDecider,'theWinner');
        });
        afterEach(function () {
            sandbox.restore();
        });
        it('initialises gameboard and currentplayer',function(){
            mocks.PlayerSwitcher.gameBoard='000000000';
            mocks.PlayerSwitcher.currentPlayer=1;
            scope.gameBoard.should.equal('000000000');
            controller.currentPlayer.should.equal(1);
        });
        it('checks if turn is valid',function(){
            scope.gameBoard='0000100000';
            scope.makeTurn(4);
            if(scope.gameBoard !== '0'){
                apiProxyStub.should.have.been.notCalled;
            }
            else{
                apiProxyStub.should.have.been.calledOnce;
            }
        });
        it('should make turn then send player to appropriate state',function(){
            controller.currentPlayer =1;
            scope.makeTurn(4);
            var myData={
                data: {
                    gameboard: '0000100000',
                    outcome: 'continue',
                    winner: 0
                }};
            deferred.resolve(myData);
            scope.$digest();
            scope.gameBoard.should.equal('0000100000');
            if(myData.data.outcome ==='Win'){
                winDeciderSpy.should.have.been.calledOnce.calledWithExactly(myData.data.winner);
                stateSpy.should.have.been.calledOnce.calledWithExactly('win');
            }
            if(myData.data.outcome ==='Draw'){
                stateSpy.should.have.been.calledOnce.calledWithExactly('draw');
            }
        });
        it('should change currentplayer',function(){
           scope.makeTurn(5);
            playerSwitchStub.should.have.been.calledOnce;
            controller.currentPlayer.should.equal(2);
        });
    });
})();