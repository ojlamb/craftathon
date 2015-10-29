pharmFinder.controller('PharmFinderController', ['$resource', 'pharmSearchFactory', function($resource, pharmSearchFactory){

  var self = this;

  var searchResource = $resource('http://www.serket.uk/pharmacies/pharmacylist-format');

  self.searchResult = searchResource.get();

  self.doSearch = function() {
    console.log(self.searchResult);
  };

}]);