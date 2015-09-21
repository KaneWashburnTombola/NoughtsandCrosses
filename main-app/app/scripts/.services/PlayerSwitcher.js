(function () {
    'use strict';
    angular.module('Tombola.PlayerSwitcher')
        .service('PlayerSwitcher',function(){
        var me = this;
            me.playerSwitch=function(player1Type,player2Type){
                if(player1Type !== 'human' && player2Type === 'human'){
                    me.currentPlayer = 2;
                }
                else{
                    me.currentPlayer = 1;
                }
            };
            me.playerSwap=function(){
                    me.currentPlayer = me.currentPlayer === 1 ? 2 : 1;
            };
    });
})();