describe('Api Proxy Calls',function(){
    var $http;
    var apiProxy;
   beforeEach(function(){
       module('Tombola.SetupService');
       inject(function($injector){
           $http = $injector.get('$httpBackend');
           apiProxy=$injector.get('ApiProxy');
       });
   });
    afterEach(function() {
        $http.verifyNoOutstandingExpectation();
        $http.verifyNoOutstandingRequest();
    });
    it('newGame should respond with correct json object',function(){
        var responseItem ={'outcome':'Continue','gameboard':'000000000','winner':0};
        $http.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/newGame',{"player1": 'human',"player2": 'human'})
            .respond(responseItem);
        var returnedPromise = apiProxy.newGame('human','human');
        var result;
        returnedPromise.then(function(response){
            result=response.data;
        });
        $http.flush();
        result.should.be.deep.equal(responseItem);
    });
    //it('makeMove should update gameboard appropriately',function(){
    //    var responseItem ={'outcome':'Continue','gameboard':'100000000','winner':0};
    //    $http.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/makeMove',{"playerNumber": '1',"chosenSquare": '0'})
    //        .respond(responseItem);
    //    var returnedPromise = apiProxy.newGame('1','0');
    //    var result;
    //    returnedPromise.then(function(response){
    //        result=response.data;
    //    });
    //    $http.flush();
    //    result.should.be.deep.equal(responseItem);
    //});
});
