describe('PharmFinderController', function() {
  beforeEach(module('PharmFinder'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('PharmFinderController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});