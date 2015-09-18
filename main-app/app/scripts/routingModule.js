(function () {
    'use strict';
    angular.module('Tombola.Routing')
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/lobby");
            $stateProvider
                .state('lobby',{
                    url:"/lobby",
                    templateUrl:"html/SetupScreen.html",
                    controller:'TextController'
                })
                .state('playing',{
                    url:"/playing",
                    templateUrl:"html/Gameboard.html",
                    controller:'GameController'
                });
        });
})();