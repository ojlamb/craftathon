pharmFinder.controller('PharmFinderController', ['$http', 'pharmSearchFactory','$scope', function($http, pharmSearchFactory, $scope){

  var self = this;

  var searchResource = $http.get('https://www.serket.uk/pharmacies/pharmacylist-format').then(function(response) {
    self.searchResult = response.data.data.map(function(pharmacy) {
      var pharmacyAddress = [pharmacy[2], pharmacy[5], pharmacy[6], pharmacy[7]].join(', ');
      return { name: pharmacy[0], NACS: pharmacy[1], address: pharmacyAddress, telephone: pharmacy[8]}
    });
  });

  $scope.selectedIndex = 0;
  $scope.itemClicked = function ($index) {
     $scope.selectedIndex = $index;
   }
}]);
