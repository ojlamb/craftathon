pharmFinder.controller('PharmFinderController', ['$resource', 'pharmSearchFactory', function($resource, pharmSearchFactory){

  var self = this;

  var searchResource = $resource('http://www.serket.uk/pharmacies/pharmacylist-format');

  self.searchResult = searchResource.get();

  // self.hash = {}

  // data = self.searchResult.data;

  // for(var i = 0; i < data.length; i++){
  //   self.hash[i][name] = data[0][0]
  // }

  self.doSearch = function() {
    console.log(self.searchResult);
  };

}]);