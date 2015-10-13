describe('Api Proxy Calls',function(){
    var $http;
    var apiProxy;
   beforeEach(function(){
       module('Tombola.SetupService');
       inject(function($injector){
           $http = $injector.get('$httpBackend');
           apiProxy=$injector.get('ApiProxy');
           startCall =$http.when('POST','http://eutaveg-01.tombola.emea:35000/api/v1.0/newGame')
               .respond({'outcome':'Continue','gameboard':'000000000','winner':0});
       });
   });
    it('should make call to api',function(){
        $http.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/newGame',{"player1": player1Type,"player2": player2Type},{"withCredentials":"true"});
    });
});