(function () {
    'use strict';
    angular.module('Tombola.SetupService',[]);
    angular.module('Tombola.WinDecider',[]);
    angular.module('Tombola.Setup',[]);
    angular.module('Tombola.PlayerSwitcher',[]);
    angular.module('Tombola.SquareDirective',[]);
    angular.module('Tombola.Gameboard',[]);
    angular.module('Tombola.Win',[]);
    angular.module('Tombola.MainApp',['Tombola.SetupService','Tombola.PlayerSwitcher','Tombola.WinDecider','Tombola.Setup','Tombola.SquareDirective','Tombola.Gameboard','Tombola.Win','ui.router']);
    angular.module('Tombola.MainApp')
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/lobby");
            $stateProvider
                .state('lobby',{
                    url:"/lobby",
                    templateUrl:"html/SetupScreen.html"
                })
                .state('playing',{
                    url:"/playing",
                    templateUrl:"html/Gameboard.html"
                })
                .state('win',{
                    url:'/win',
                    templateUrl:'html/Win.html'
                })
                .state('player1Win',{
                    url:'/player1win',
                    templateUrl:'html/player1Win.html'
                })
                .state('player2Win',{
                    url:'/player2win',
                    templateUrl:'html/player2Win.html'
                });
        });
})();