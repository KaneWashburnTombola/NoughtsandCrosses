describe('Testing if the win controller sends player to correct state',function(){
    beforeEach(function(){
       module('Tombola.Win');
        module(function($provide){
            $provide.service('WinDecider',mocks.WinDecider);
        });
    });
});