'use strict';
var mocks={
    ApiProxy:{
        apiCall:function(){},
        newGame:function(){},
        newTurn:function(){}
    },
    PlayerSwitcher:{
        playerOne:'',
        playerTwo:'',
        gameBoard:'',
        currentPlayer:0,
        playerSwitch:function(){},
        playerSwap:function(){}
    },
    WinDecider:{
        winner:0,
        theWinner:function(){}
    }
};