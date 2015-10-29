pharmFinder.controller('PharmFinderController', ['$resource', 'pharmSearchFactory', function($resource, pharmSearchFactory){

  var self = this;

  function searchEngine() {
    pharmSearchFactory.searchEngine().then(function(res) {
      return res.data[0];
    });
  }

  var searchResource = $resource('http://www.serket.uk/pharmacies/pharmacylist-format');

  self.doSearch = function() {
    // self.searchResult = searchResource.get(
    //   { q: self.searchTerm }
    // );
    pharmSearchFactory.searchEngine()
      .then(function(response) {
        self.searchResult = response.data[0];
        console.log(self.searchResult);
      })
    console.log(self.searchResult);
  };

}]);