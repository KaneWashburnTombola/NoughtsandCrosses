(function () {
    'use strict';
    angular.module('Tombola.SetupService',[]);
    angular.module('Tombola.WinDecider',[]);
    angular.module('Tombola.PlayerSwitcher',[]);
    angular.module('Tombola.Setup',[]);
    angular.module('Tombola.SquareDirective',[]);
    angular.module('Tombola.Gameboard',[]);
    angular.module('Tombola.Win',[]);
    angular.module('Tombola.MainApp',['Tombola.SetupService','Tombola.PlayerSwitcher','Tombola.WinDecider','Tombola.SquareDirective','Tombola.Setup','Tombola.Gameboard','Tombola.Win','ui.router']);
    angular.module('Tombola.MainApp')
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/lobby");
            $stateProvider
                .state('lobby',{
                    url:"/lobby",
                    templateUrl:"../html/setup-screen.html",
                    templateProvider:function($templateCache){
                        return $templateCache.get('setup-screen.html');
                    }
                })
                .state('playing',{
                    url:"/playing",
                    templateUrl:"../html/gameboard.html",
                    templateProvider:function($templateCache){
                        return $templateCache.get('gameboard.html');
                    }
                })
                .state('win',{
                    url:'/win',
                    templateUrl:'../html/win.html',
                    templateProvider:function($templateCache){
                        return $templateCache.get('win.html');
                    }
                })
                .state('player1Win',{
                    url:'/player1win',
                    templateUrl:'../html/player1-win.html',
                    templateProvider:function($templateCache){
                        return $templateCache.get('player1-win.html');
                    }
                })
                .state('player2Win',{
                    url:'/player2win',
                    templateUrl:'../html/player2-win.html',
                    templateProvider:function($templateCache){
                        return $templateCache.get('player2-win.html');
                    }
                })
                .state('draw',{
                    url:'/draw',
                    templateUrl:'../html/draw.html',
                    templateProvider:function($templateCache){
                        return $templateCache.get('draw.html');
                    }
                });
        });
})();

 /* ,-------,
    |   /\_/\
   ~|__( ^ .^)
    ""    ""   */