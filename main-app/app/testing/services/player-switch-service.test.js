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
    it('sets previous 3 constants',function(){
        playerSwitcher.playerSwitch('human','human','000000000');
        playerSwitcher.playerOne.should.equal('human');
        playerSwitcher.playerTwo.should.equal('human');
        playerSwitcher.gameBoard.should.equal('000000000');
    });
    it('sets currentPlayer',function(){
        playerSwitcher.playerSwitch('anything','human','000000000');
        if(playerSwitcher.playerOne !== 'human' && playerSwitcher.playerTwo === 'human'){
            playerSwitcher.currentPlayer.should.equal(2);
        }
        else{
            playerSwitcher.currentPlayer.should.equal(1);
        }
    });
    it('changes currentPlayer',function(){
        playerSwitcher.playerOne='human';
        playerSwitcher.playerTwo='human';
        playerSwitcher.currentPlayer=1;
        playerSwitcher.playerSwap();
        if(playerSwitcher.playerOne === 'human' && playerSwitcher.playerTwo=== 'human') {
            playerSwitcher.currentPlayer.should.equal(2);
        }
        else{
            playerSwitcher.currentPlayer.should.equal(1);
        }
    });
});