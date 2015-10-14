describe('Does the win service direct to the correct state',function(){
    var winDecider;
    beforeEach(function(){
        module('Tombola.WinDecider');
        inject(function($injector){
            winDecider=$injector.get('WinDecider');
        });
    });
    it('initialises winner to 0',function(){
        winDecider.winner.should.equal(0);
    });
    it('changes winner according to number received',function(){
        winDecider.theWinner('1');
        winDecider.winner.should.equal(1);
    });
});