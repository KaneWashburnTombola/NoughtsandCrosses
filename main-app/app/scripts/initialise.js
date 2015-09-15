(function () {
    'use strict';
    angular.module('Tombola.setup',[]);

    angular.module('Tombola.setup')
        .service('HttpCall',function($http) {
            var me = this;
            me.newGame=function(player1Type, player2Type){
                $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/newgame', {"player1": player1Type, "player2": player2Type},{"withCredentials":"true"})
                    .then(function (response) {
                    },
                    function (response) {
                    });
            };
            me.newTurn=function(playerNumber,chosenSquare,gameboard){
                $http.post('http://eutaveg-01.tombola.emea:35000/api/v1.0/makemove',{"playerNumber":playerNumber,"chosenSquare":chosenSquare},{"withCredentials":"true"})
                    .then(function(response){
                        console.log('made Move!');
                    },
                    function(response){
                        console.log('No Move!');
                    });
            };
        })
        .controller('TextContoller',['$scope','HttpCall',function($scope,httpCall){
            $scope.titleMessage = "Welcome to Noughts and Crosses";
            $scope.playerOne = "";
            $scope.playerTwo = "";
            $scope.gameBoard='000000000';
            var currentTurn = 'player 1';
            $scope.startGame=function(){
                httpCall.newGame($scope.playerOne,$scope.playerTwo,$scope.gameBoard);
            };
            $scope.makeTurn=function(number){
                var chr;
                if($scope.gameBoard[number]!=='0'){
                    alert("Cannot move there");
                    return;
                }
                if(currentTurn === 'player 1'){
                    chr =1;
                    httpCall.newTurn(1,number,$scope.gameBoard);
                    currentTurn = 'player 2';
                }
                else{
                    chr=2;
                    httpCall.newTurn(2,number,$scope.gameBoard);
                    currentTurn='player 1';
                }
                $scope.gameBoard=$scope.gameBoard.substr(0,number) + chr + $scope.gameBoard.substr(number+1);
            };
        }]);
})();

