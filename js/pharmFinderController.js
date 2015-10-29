pharmFinder.controller('PharmFinderController', [function(){

var self = this;

self.doSearch = function() {
  self.searchResult = {
    "items": [
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
    ]
  };
};




}]);