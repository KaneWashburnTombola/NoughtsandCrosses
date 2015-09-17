(function () {
    'use strict';
    angular.module('Tombola.setup')
        .service('HttpMakeMove',['$http','$q',function($http,$q){
            var me= this;
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