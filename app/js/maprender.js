
var coords = new google.maps.LatLng(43,43);
var mapOptions =  {
  zoom : 14,
  center: coords
}; 

map = new google.maps.Map(document.getElementById('mappy'), mapOptions); //, mapOptions);
google.maps.event.trigger(map, 'resize')
console.log('here');
directionsService = new google.maps.DirectionsService({
  origin: "New York City",
  destination: "San Francisco", 
  waypoints: [],
  provideAlternatives: false,
  travelMode: google.maps.TravelMode.DRIVING,
  unitSystem: google.maps.UnitSystem.IMPERIAL
});


console.log('hereagain');
directionsDisplay = new google.maps.DirectionsRenderer();
directionsDisplay.setMap(map); 

document.getElementById("mappy").style.overflow="scroll";




