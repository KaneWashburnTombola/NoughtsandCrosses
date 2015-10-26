(function () {
    'use strict';
    describe('Testing Game State Machine',function(){
        var state,
            stateSpy,
            sandbox,
            scope,
            templateCache;
        beforeEach(function(){
            module('Tombola.MainApp');
            sandbox=sinon.sandbox.create();
            inject(function($state,$templateCache,$rootScope){
                scope=$rootScope.$new();
                state=$state;
                templateCache=$templateCache;
            });
            templateCache.put('setup-screen.html','setup-screen.html');
            stateSpy=sinon.sandbox.spy(mocks.$state,'go');
            scope.$digest();
        });
        afterEach(function(){
           sandbox.restore();
        });
        it('Make sure the lobby state exists', function(){
            var lobbyState= state.get('lobby');
            should.exist(lobbyState);
            lobbyState.url.should.equal('/lobby');
            lobbyState.templateProvider(templateCache).should.equal(templateCache.get('setup-screen.html'));
        });
        it('Make sure the gameboard state exists', function(){
            var gameBoardState= state.get('playing');
            should.exist(gameBoardState);
            gameBoardState.url.should.equal('/playing');
            gameBoardState.templateProvider(templateCache).should.equal(templateCache.get('gameboard.html'));
        });
        it('Make sure the win state exists', function(){
            var winState= state.get('win');
            should.exist(winState);
            winState.url.should.equal('/win');
            winState.templateProvider(templateCache).should.equal(templateCache.get('win.html'));
        });
        it('Make sure the player1win state exists', function(){
            var player1winState= state.get('player1Win');
            should.exist(player1winState);
            player1winState.url.should.equal('/player1win');
            player1winState.templateProvider(templateCache).should.equal(templateCache.get('player1-win.html'));
        });
        it('Make sure the player2win state exists', function(){
            var player2winState= state.get('player2Win');
            should.exist(player2winState);
            player2winState.url.should.equal('/player2win');
            player2winState.templateProvider(templateCache).should.equal(templateCache.get('player2-win.html'));
        });
        it('Make sure the draw state exists', function(){
            var drawState= state.get('draw');
            should.exist(drawState);
            drawState.url.should.equal('/draw');
            drawState.templateProvider(templateCache).should.equal(templateCache.get('draw.html'));
        });
    });
})();