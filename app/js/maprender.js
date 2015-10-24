var startTime = new Date();

var coords = new google.maps.LatLng(38,-100);
var mapOptions =  {
  zoom: 4,
  center: coords
}; 
var SF = new google.maps.LatLng(38, -122);
var NY = new google.maps.LatLng(40, -74);
var steps;

map = new google.maps.Map(document.getElementById('mappy'), mapOptions); //, mapOptions);
google.maps.event.trigger(map, 'resize')
directionsService = new google.maps.DirectionsService();
var request = {
    origin: NY,
    destination: SF,
    travelMode: google.maps.TravelMode.DRIVING
}

directionsDisplay = new google.maps.DirectionsRenderer();
directionsDisplay.setMap(map); 
directionsService.route(request, function(response, status){
    if(status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
        steps = response["routes"][0]["legs"][0]["steps"];
    }
});


var desire;
var desiredTime;

$("button.btn.btn-default").click(function(e) {
    desire =  $("select.selectpicker").val();
    desiredTime = $("input#time").val();
    $("input#time").val("");

    var tempHours = desiredTime.substr(0,2);
    var tempMins = desiredTime.substr(2,3);

    var desiredHours = parseInt(tempHours);
    var desiredMins = parseInt(tempMins);

fixedTime = new Date(startTime.getFullYear(),
                     startTime.getMonth(),
                     startTime.getDate(), 
                     desiredHours,
                     desiredMins,
                     0,
                     0
                     );
diff = Math.abs(fixedTime - startTime);
diff = diff / 60000;

var total = 0;
var rat = 0;
var point;
var Timmy = 0;

steps.forEach(function(step) {
    var string = step['duration']['text'];
    if(string.indexOf('hours') > -1) {
        var list = string.split(' ');
        Timmy = parseInt(list[0]) * 60 + parseInt(list[2]);
        if (total + Timmy >= diff  && (diff - total)/ Timmy < 1
                                   && (diff - total)/ Timmy > 0) {
            point = step;
            rat = (diff - total) / Timmy;
        }
    } else {
        var list = string.split(' ');
        Timmy = parseInt(list[0]);
        if (total + Timmy >= diff && (diff - total)/ Timmy < 1
                                  && (diff - total)/Timmy > 0) {
            point = step;
            rat = (diff - total) / Timmy;
            total = total + Timmy;
        }
    }

    total = total + Timmy;

});

endLat = point['end_location'].lat();
endLng = point['end_location'].lng();
startLat = point['start_location'].lat();
startLng = point['start_location'].lng();


var pinLat = startLat + (endLat - startLat) * rat;
var pinLng = startLng + (endLng - startLng) * rat;
var myLatLng = {
    lat: pinLat,
    lng: pinLng
};



var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });


});

