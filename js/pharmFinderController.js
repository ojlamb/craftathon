pharmFinder.controller('PharmFinderController', ['$resource', 'pharmSearchFactory', function($resource, pharmSearchFactory){

  var self = this;

  var searchResource = $resource('http://www.serket.uk/pharmacies/pharmacylist-format');

  self.doSearch = function() {
    // self.searchResult = searchResource.get(
    //   { q: self.searchTerm }
    // );
    pharmSearchFactory.searchEngine()
      .then(function(response) {
        pharmacyData = response.data[0];
        var resultsArray = [];
        for(var i = 0; i < pharmacyData.length; i++) {
          resultsArray.push(pharmacyData[i])
        }
        self.searchResult = pharmacyData
        console.log(self.searchResult);
      })
      console.log(self.searchResult);
  };

}]);