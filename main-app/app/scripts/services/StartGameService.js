(function () {
    'use strict';
   angular.module('Tombola.SetupService')
       .service('ApiProxy',['$http','$q',function($http,$q) {
           var me = this,
           apiCall = function(call,data){
               var defered= $q.defer();
               $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/'+call,(data),{"withCredentials":"true"})
                   .then(function (response) {
                       defered.resolve(response);
                   },
                   function (response) {
                       defered.reject(response.data);
                   });
               return defered.promise;
           };
           me.newGame=function(player1Type, player2Type){
               var data= {"player1": player1Type,"player2": player2Type};
               return apiCall('newGame',data);
           };
            me.newTurn=function(playerNumber,chosenSquare){
                var data={"playerNumber":playerNumber,"chosenSquare":chosenSquare};
                return apiCall('makeMove',data);

            };
        }]);
})();

