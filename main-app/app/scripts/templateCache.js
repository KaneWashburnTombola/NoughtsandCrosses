(function () {
    'use strict';
    angular.module('Tombola.MainApp')
        .run(['$templateCache', function ($templateCache) {
            $templateCache.put('setup-screen.html','<div ng-controller="TextContoller"><h1>{{titleMessage}}</h1><h2>Player 1 : {{playerOne}}</h2><select ng-model="playerOne"><option value="human">Human</option><option value="random">Easy Computer</option> <option value="pre-trained">Overkill Computer</option></select><h2>Player 2 : {{playerTwo}}</h2><select ng-model="playerTwo"><option value="human">Human</option><option value="random">Easy Computer</option><option value="pre-trained">Overkill Computer</option></select><input type="button" value="Play!"ng-click="startGame()"><div class="rules"><h2>Rules</h2><p>The rules to Noughts and Crosses are very simple and here they are!</p><ul><li>Player 1 uses Xs and Player 2 uses Os</li><li>Each player takes turns and places a mark in any square on the board by clicking it</li><li>The first player to get 3 of their marks in a row going vertically, horizontally or diagonally wins!</li></ul></div></div>');
            $templateCache.put('gameboard.html','<div ng-controller="GameController"><table><tr><td><square square-number="0"></square></td><td class="midColumn"><square square-number="1"></square></td><td><square square-number="2"></square></td></tr><tr><td class="midRow"><square square-number="3"></square></td><td class="midRow midColumn"><square square-number="4"></square></td><td class="midRow"><square square-number="5"></square></td></tr><tr><td><square square-number="6"></square></td><td class="midColumn" ><square square-number="7"></square></td><td><square square-number="8"></square></td></tr></table></div>');
            $templateCache.put('win.html','<div ng-controller="WinController"><img ng-click="showWinner()" class="FMtitle" src="images/finishTitle.gif"><div class="block"><img class="subZero" src="images/subZeroReady.gif"><img class="wolverine" src="images/wolverineReady.gif"></div></div>');
            $templateCache.put('player1-win.html','div ng-controller="TextContoller"><div class="block"><img class="animated fadeInDown" src="images/blood-drip.png"></div><img class="animated pulse infinite" src="images/victoryText.png"><img class="wolverineWin" src="images/wolfman.png"><input type="button" value="Rematch?" ng-click="startGame()"><input type="button" value="Back To Lobby?" ng-click="lobbyReturn()"> </div>');
            $templateCache.put('player2-win.html','<div ng-controller="TextContoller"><div class="block"><img class="animated fadeInDown" src="images/blood-drip.png"></div><img class="animated pulse infinite" src="images/victoryText.png"><img class="wolverineWin" src="images/subZeroWin.png"><input type="button" value="Rematch?" ng-click="startGame()"><input type="button" value="Back To Lobby?" ng-click="lobbyReturn()"></div>');
            $templateCache.put('draw.html','<div ng-controller="TextContoller"><img class="animated pulse infinite" src="images/drawepic.png"><input type="button" value="Rematch?" ng-click="startGame()"><input type="button" value="Back To Lobby?" ng-click="lobbyReturn()"></div>');
        }]);
})();