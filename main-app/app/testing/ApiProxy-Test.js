describe('Api Proxy Calls',function(){
    var $http;
    var apiProxy;
   beforeEach(function(){
       module('Tombola.SetupService');
       inject(function($injector){
           $http = $injector.get('$httpBackend');
           apiProxy=$injector.get('ApiProxy');
           startCall =$http.when('POST','http://eutaveg-01.tombola.emea:35000/api/v1.0/newGame')
               .respond({})
       });
   });

});
