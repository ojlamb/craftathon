pharmFinder.factory('pharmSearchFactory', ['$http', function($http) {

  return {
    searchEngine: function() {
      return $.getJSON("http://www.serket.uk/pharmacies/pharmacylist-format", function(success) {
        return success.data;
      })
    }
  }

}])