(function () {
    'use strict';
    angular.module('Tombola.Routing')
        .config(['$StateProvider','$UrlRouterProvider',function($stateProvider,$urlRouterProvider){
            $urlRouterProvider.otherwise("/lobby");
            $stateProvider
                .state('lobby',{
                    url:"/lobby",
                    views:{
                        "lobby":{
                            templateUrl:"../html/SetupScreen.html",
                            controller:'TextController'
                        }
                    }
                })
                .state('playing',{
                    url:"/playing",
                    views:{
                        "gameboard":{
                            templateUrl:"../html/Gameboard.html",
                            controller:'GameController'
                        }
                    }
                });
        }]);
})();