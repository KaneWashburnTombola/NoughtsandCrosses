(function () {
    'use strict';
   angular.module('Tombola.SetupService')
       .service('ApiProxy',['$http','$q',function($http,$q) {
           var me = this;
           me.newGame=function(player1Type, player2Type){
               var defered= $q.defer();
               $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame', {"player1": player1Type, "player2": player2Type},{"withCredentials":"true"})
                   .then(function (response) {
                       defered.resolve(response);
                   },
                   function (response) {
                       defered.reject(response.data);
                   });
               return defered.promise;
           };
            me.newTurn=function(playerNumber,chosenSquare){
                var defered= $q.defer();
                $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove',{"playerNumber":playerNumber,"chosenSquare":chosenSquare},{"withCredentials":"true"})
                    .then(function(response){
                        defered.resolve(response.data);
                    },
                    function(response){
                        defered.reject(response.data);
                    });
                return defered.promise;
            };
        }]);
})();