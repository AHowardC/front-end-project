  var map;
  var infowindow;
  var restArray = [];
<<<<<<< .merge_file_TP0ccx
  var sortedResturants =[]
=======
  var sortedArray = [];


>>>>>>> .merge_file_GXWuvp
function getWhere(){
  var where = navigator.geolocation.getCurrentPosition(function(position) {
      console.log(`lat: ${position.coords.latitude} lng: ${position.coords.longitude}`);  
      console.log(position);
      initMap({ lat: position.coords.latitude, lng: position.coords.longitude })
      // run();
  },
  // function(error) {
  //   console.log(error);
  //   if error.code == 1 {

  //   }

  );
}

// }
function sortRating(){
  // var ratingVal = restArray[i].rating

  for (var i = 0; i < restArray.length; i++) {
    var firstrating = restArray[i].rating
    for (var j = i + 1; j < restArray.length; j++) {
      var secondrating = restArray[j].rating
      if (firstrating < secondrating) {
        var temp = restArray[i]
        restArray[i] = restArray[j]
        restArray[j] = temp
        
      }
    }
  }
  console.log(restArray)
}


function initMap(location) {
          // var location = {where};   
          // lat: 33.8485720, lng: -84.3735560

  map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 11
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: location,
    radius: 50000,
    type: ['restaurant'],
  }, callback);


}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      if (results[i].rating >= 4){
          // sortedArray.push(results[i]);
        createMarker(results[i]);
        restArray.push(results[i]);
      }
    }
<<<<<<< .merge_file_TP0ccx
    console.log(restArray)
    sortRating()
=======
    var sorted = restArray.sort(function(a, b){
    return(a.rating-b.rating)
})
    console.log(sorted.reverse())
    // console.log(sortedArray)
>>>>>>> .merge_file_GXWuvp
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}








  