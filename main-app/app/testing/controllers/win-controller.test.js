describe('Testing if the win controller sends player to correct state',function(){
    var scope;
    var sandbox;
    var controller;
    var WinDecider;
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
    it('sends player to appropriate state',function(){
        //WinDecider.winner=1;
        var stateStub=sinon.sandbox.stub(mocks.$state,'go');
        scope.showWinner();

    });
});