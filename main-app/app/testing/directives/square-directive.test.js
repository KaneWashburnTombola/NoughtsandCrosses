describe('Unit testing squares',function(){
    var $compile,
        $rootScope;
    beforeEach(module('Tombola.SquareDirective'));
    beforeEach(inject(function($compile, $rootScope){
        compile = $compile;
        scope = $rootScope.$new();
    }));
    it('Replaces the element with the appropriate content', function() {
        var element = $compile('<square></square>')($rootScope);
        expect(element.html()).toContain('ng-click="makeTurn('+element.squareNumber+')" class= "cell player{{gameBoard['+element.squareNumber+']}}"');
        $rootScope.$digest();
    });
});