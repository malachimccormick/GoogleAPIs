let map, infoWindow, marker;

function initMap() {
  infoWindow = new google.maps.InfoWindow;
  // Here we are getting the users HTML5 location to pass along to the map.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position)
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
                  };
                  ;
      getMap(pos)
    }, 
function () {
  handleLocationError(true, infoWindow);
    console.log("hello")
      locateOnFail()
            });
  } 
}
//Error handling function
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  
    infoWindow.open(map);
}

//The actual function for the map starts here
function getMap(pos) {
  infoWindow.setContent('You are here.');
    infoWindow.open(map);
  map = new google.maps.Map(document.getElementById('map'), {
    center: pos,
      zoom: 18,
      mapTypeId: "satellite"
  });
  //Adding  marker to the page.
  marker = new google.maps.Marker({
    map: map,
      position: pos,
        mapTypeId: "satellite",
  });
  //This is for the dialog box over the mrker when you click on it.
  google.maps.event.addListener(marker, 'click', function (data) {
    console.log(data)
      //infoWindow.setContent("Here you are!!");
      infoWindow.open(map, this);
  });
}
//In the case of a HTML5 geolocation faliure then the positioning is found with cell towers and wi-fi nodes
function locateOnFail() {

  $.post(('https://www.googleapis.com/geolocation/v1/geolocate?key=' + googleKey), function (data) {
    console.log(data)
    pos = data.location
    console.log(pos)
    getMap(pos)
    infoWindow.setContent("You are close to this location!!");
})}