pharmFinder.factory('pharmSearchFactory', ['$http', function($http, $scope) {

  return {
    searchEngine: function() {
      return $.getJSON("http://www.serket.uk/pharmacies/pharmacylist-format", function(data) {
        return data;
      })
    }
  }

}])