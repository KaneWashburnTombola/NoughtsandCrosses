(function () {
    'use strict';
   angular.module('Tombola.setup')
       .service('HttpCall',['$http',function($http) {
           var me = this;
           me.newGame=function(player1Type, player2Type){
               $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame', {"player1": player1Type, "player2": player2Type},{"withCredentials":"true"})
                   .then(function (response) {
                   },
                   function (response) {
                   });
           };
           me.newTurn=function(playerNumber,chosenSquare){
               $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove',{"playerNumber":playerNumber,"chosenSquare":chosenSquare},{"withCredentials":"true"})
                   .then(function(response){
                       console.log("returning the response"+response);

                   },
                   function(response){

                   });
           };
       }]);
})();