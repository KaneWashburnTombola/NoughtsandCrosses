(function () {
    'use strict';
    angular.module('Tombola.SetupService',[]);
    angular.module('Tombola.MoveService',[]);
    angular.module('Tombola.Setup',[]);
    angular.module('Tombola.PlayerSwitcher',[]);
    angular.module('Tombola.SquareDirective',[]);
    angular.module('Tombola.Gameboard',[]);
    angular.module('Tombola.MainApp',["Tombola.SetupService","Tombola.PlayerSwitcher","Tombola.MoveService","Tombola.Setup","Tombola.Gameboard","Tombola.SquareDirective","ui.router"]);
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
                });
        });
})();