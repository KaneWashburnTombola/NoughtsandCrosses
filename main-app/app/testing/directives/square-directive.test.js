describe('Unit testing squares',function(){
    var $compile,
        $rootScope;
    beforeEach(module('Tombola.SquareDirective'));
    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));
    it('Replaces the element with the appropriate content', function() {
        var element = $compile('<square></square>')($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('ng-click="makeTurn('+element.squareNumber+')" class= "cell player{{gameBoard['+element.squareNumber+']}}"')
    });
});