describe('Player Switch Service',function(){
    var playerSwitcher;
    beforeEach(function() {
        module('Tombola.PlayerSwitcher');
        inject(function($injector){
            playerSwitcher=$injector.get('PlayerSwitcher');
        });
    });

    it('initialise playerOne',function(){
        playerSwitcher.playerOne.should.equal('');
    });
    it('initialise playerTwo',function(){
        playerSwitcher.playerTwo.should.equal('');
    });
    it('initialise gameboard',function(){
        playerSwitcher.gameBoard.should.equal('');
    });
    //it('sets previous 3 constants',function(){
    //    playerSwitcher.playerSwitch();
    //    playerSwitcher.playerOne.should.equal();
    //    playerSwitcher.playerTwo.should.equal();
    //    playerSwitcher.gameBoard.should.equal('000000000');
    //});
    //it('sets currentPlayer',function(){
    //    playerSwitcher.playerOne = 'super computer';
    //    playerSwitcher.playerTwo ='human';
    //    if(playerSwitcher.playerOne !== 'human' && playerSwitcher.playerTwo === 'human'){
    //        playerSwitcher.currentPlayer.should.equal(2);
    //    }
    //    else{
    //        playerSwitcher.currentPlayer.should.equal(1);
    //    }
    //});
    //it('changes currentPlayer',function(){
    //    //if(playerSwitcher.playerOne ===  && playerSwitcher.playerTwo=== ){
    //        if(playerSwitcher.currentPlayer ===1){
    //            playerSwitcher.currentPlayer.shoud.equal(2);
    //        }
    //        else{
    //            playerSwitcher.currentPlayer.shoud.equal(1);
    //        }
    //    }
    //});
});