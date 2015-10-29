pharmFinder.controller('PharmFinderController', ['$resource', 'pharmSearchFactory', function($resource, pharmSearchFactory){

  var self = this;

  var searchResource = $resource('http://www.serket.uk/pharmacies/pharmacylist-format');

  self.doSearch = function() {
    self.searchResult = searchResource.get();
    console.log(self.searchResult);
  };

}]);