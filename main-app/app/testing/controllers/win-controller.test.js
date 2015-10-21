describe('Testing if the win controller sends player to correct state',function(){
    var scope;
    var controller;
    var winDecider;
    beforeEach(function(){
       module('Tombola.Win');
        module(function($provide){
            $provide.service('WinDecider',mocks.WinDecider);
        });
        inject(function(){

        });
    });
});