describe('PharmFinderController', function() {
  beforeEach(module('PharmFinder'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('PharmFinderController');
  }));

  xit('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a pharmacy', function() {

  var items = [
    {
      "name": "boots",
      "postcode": "SW1Y5DG",
      "telephone": "123545398"
    },
    {
      "name": "superdrug",
      "postcode": "SW1Y5DG",
      "telephone": "123545398"
    }
  ];

  it('displays search results', function() {
    expect(ctrl.searchResult.items).toEqual(items);
  });
});


});