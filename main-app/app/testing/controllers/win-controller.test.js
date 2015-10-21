describe('Testing if the win controller sends player to correct state',function(){
    var scope;
    var sandbox;
    var controller;
    var WinDecider;
    var stateSpy;
    beforeEach(function(){
       module('Tombola.Win');
        module(function($provide){
            $provide.service('WinDecider',mocks.WinDecider);
        });
        inject(function($rootScope,$controller){
            scope=$rootScope.$new();
            controller= $controller('WinController',{
                $scope:scope,
                $state:mocks.$state,
                WinDecider:mocks.WinDecider
            });
        });
        sandbox=sinon.sandbox.create();
    });
    afterEach(function(){
        sandbox.restore();
    });
    it('sends player to appropriate state',function() {
        stateSpy = sandbox.spy(mocks.$state,'go');
        scope.showWinner();
        if (mocks.WinDecider.winner === 1) {
            stateSpy.should.have.been.calledOnce;
            stateSpy.should.have.been.calledWithExactly('player1Win');
        }
        else {
            stateSpy.should.have.been.calledOnce.calledWithExactly('player2Win');
        }
    });
});