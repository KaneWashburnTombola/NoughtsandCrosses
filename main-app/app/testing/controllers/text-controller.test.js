describe('TextController',function(){
    beforeEach(function() {
        module('Tombola.Setup');
        inject(function(_$controller_){
        controller= _$controller_;
        });
    });
    it('see if values are initialised',function(){
        var $scope={};
        var $state={};
        var textController = controller('TextController',{$scope:$scope,$state:$state});
        $scope.titleMessage.should.equal('Welcome to Noughts and Crosses');
    });
});
