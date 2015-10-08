(function () {
    'use strict';

    angular.module('Tombola.WinDecider')
        .service('WinDecider',function(){
            var me = this;
            me.winner=0;
            me.theWinner=function(number){
                if(number==='1'){
                    me.winner=1;
                }
                else{
                    me.winner=2;
                }
            };
        });
})();