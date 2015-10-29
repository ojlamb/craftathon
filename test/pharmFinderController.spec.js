describe('PharmFinderController', function() {
  beforeEach(module('PharmFinder'));

  var ctrl;


  var data = [
   ["LloydsPharmacy","FJJ79","Wells Close Square","","","Berwick-Upon-Tweed","Northumberland","TD15 1LL","01289 307387"]
  ];

  beforeEach(inject(function($controller) {
    ctrl = $controller('PharmFinderController');
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend
    httpBackend
      .when("GET", "http://www.serket.uk/pharmacies/pharmacylist-format")
      .respond(
        {data : data}
      );
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('when searching for a pharmacy', function() {


  it('displays search results', function() {
    ctrl.searchTerm = 'boots';
    ctrl.doSearch();
    expect(ctrl.searchResult.data).toEqual(data);
  });
});


});