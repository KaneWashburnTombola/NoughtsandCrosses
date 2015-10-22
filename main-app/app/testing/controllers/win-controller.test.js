(function () {
    'use strict';
    describe('Testing if the win controller sends player to correct state',function(){
        var scope,
            sandbox,
            controller,
            stateSpy;
    beforeEach(function(){
        module('Tombola.Win');
            inject(function($rootScope, $controller){
                scope = $rootScope.$new();
                controller = $controller('WinController',{
                    $scope:scope,
                    $state:mocks.$state,
                    WinDecider:mocks.WinDecider
                });
            });
            sandbox=sinon.sandbox.create();
            stateSpy = sinon.sandbox.spy(mocks.$state,'go');
        });

        it('sends player to appropriate state',function() {
            scope.showWinner();
            if (mocks.WinDecider.winner === 1) {
                stateSpy.should.have.been.calledOnce
                    .calledWithExactly('player1Win');
            }
            else {
                stateSpy.should.have.been.calledOnce
                    .calledWithExactly('player2Win');
            }
        });
        afterEach(function(){
            sandbox.restore();
        });
    });
})();