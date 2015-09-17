(function () {
    'use strict';
    angular.module('Tombola.Routing',['ui.routing']);
    angular.module('Tombola.SetupService',[]);
    angular.module('Tombola.MoveService',[]);
    angular.module('Tombola.Setup',[]);
    angular.module('Tombola.Gameboard',[]);
    angular.module('Tombola.MainApp',["Tombola.Routing","Tombola.SetupService","Tombola.MoveService","Tombola.Setup","Tombola.Gameboard"]);
})();