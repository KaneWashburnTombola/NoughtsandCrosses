describe('TextController',function(){
    var sandbox;
    var ApiProxy;
    var PlayerSwitcher;
    beforeEach(function() {
        module('Tombola.Setup');
        module(function($provide){
            $provide.service('ApiProxy',mocks.ApiProxy);
            $provide.service('PlayerSwitcher',mocks.PlayerSwitcher);
        });
        inject(function(_$controller_){
        controller= _$controller_;
        });
        sandbox = sinon.sandbox.create();
        ApiProxy = sinon.mock(mocks.PlayerSwitcher);
    });
    afterEach(function() {
        ApiProxy.verify();
        sandbox.restore();
    });
        it('see if values are initialised',function(){
        var textController = controller('TextController');
        $scope.titleMessage.should.equal('Welcome to Noughts and Crosses');
    });
});
