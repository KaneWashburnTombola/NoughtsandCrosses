(function () {
    'use strict';
    angular.module('Tombola.PlayerSwitcher')
        .service('PlayerSwitcher',function(){
        var me = this;
            me.playerOne = '';
            me.playerTwo = '';
            me.gameBoard = '';
            me.playerSwitch=function(player1Type,player2Type,gameBoard){
                me.playerOne = player1Type;
                me.playerTwo = player2Type;
                me.gameBoard = gameBoard;
                if(player1Type !== 'human' && player2Type === 'human'){
                    me.currentPlayer = 2;
                }
                else{
                    me.currentPlayer = 1;
                }
            };
            me.playerSwap=function(){
                if(me.playerOne === 'human' && me.playerTwo=== 'human'){
                    me.currentPlayer = me.currentPlayer === 1 ? 2 : 1;
                }
            };
    });
})();
