describe('Does the win service direct to the correct state',function(){
    var winDecider;
    beforeEach(function(){
        module('Tombola.WinDecider');
        inject(['WinDecider',function(_winDecider_){
            winDecider=_winDecider_;
        }]);
    });
    it('initialises winner to 0',function(){
        winDecider.winner.should.equal(0);
    });
    it('changes winner according to number received',function(){
        winDecider.theWinner('1');
        winDecider.winner.should.equal(1);
    });
});