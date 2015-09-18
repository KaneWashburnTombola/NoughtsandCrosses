(function () {
    'use strict';
    angular.module('Tombola.Routing',['ui.router']);
    angular.module('Tombola.SetupService',[]);
    angular.module('Tombola.MoveService',[]);
    angular.module('Tombola.Setup',[]);
    angular.module('Tombola.Gameboard',[]);
    angular.module('Tombola.MainApp',["Tombola.SetupService","Tombola.MoveService","Tombola.Setup","Tombola.Gameboard","Tombola.Routing"]);
})();