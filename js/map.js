$(document).ready(function() {
  L.mapbox.accessToken = 'pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw';
   var map = L.mapbox.map('map', 'mapbox.streets')
        .setView([51.5072, -0.1], 13);


  mapAddress = function() {
    $('.addressLink').click(function() {
      var address = $(this).text();
      $.getJSON("https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw", function(result){

        var result = result.features[0].center;
        console.log(result)
        var marker = L.marker([result[1], result[0]], {
            icon: L.mapbox.marker.icon({
                'marker-color': 'ff8888'
            }),
            draggable: true
        }).addTo(map);
    })
  });

  };
});
