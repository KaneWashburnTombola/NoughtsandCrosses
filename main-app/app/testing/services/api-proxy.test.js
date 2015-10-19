describe('Api Proxy Calls',function(){
    var $http;
    var apiProxy;
    var $q;
   beforeEach(function(){
       module('Tombola.SetupService');
       inject(['$httpBackend','ApiProxy',function($httpBackend,_apiProxy_){
           $http = $httpBackend;
           apiProxy=_apiProxy_;
       }]);
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
    it('makeMove should update gameboard appropriately',function(){
        var responseItem ={'outcome':'Continue','gameboard':'100000000','winner':0};
        $http.expectPOST('http://eutaveg-01.tombola.emea:35000/api/v1.0/makeMove',{"playerNumber": '1',"chosenSquare": '5'})
            .respond(responseItem);
        var returnedPromise = apiProxy.newTurn('1','5');
        var result;
        returnedPromise.then(function(response){
            result=response.data;
        });
        $http.flush();
        result.should.be.deep.equal(responseItem);
    });
    afterEach(function() {
        $http.verifyNoOutstandingExpectation();
        $http.verifyNoOutstandingRequest();
    });
});
