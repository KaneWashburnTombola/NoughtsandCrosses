describe('Does the win service direct to the correct state',function(){
    var winService;
    beforeEach(function(){
        module('Tombola.WinDecider');
        inject(function($injector){
            winService=$injector.get('WinDecider');
        });
    });
    it('initialises winner to 0',function(){
        winService.winner.should.equal(0);
    });
    it('changes winner according to number received',function(){
        winService.theWinner('1');
        winService.winner.should.equal(1);
    });
});
