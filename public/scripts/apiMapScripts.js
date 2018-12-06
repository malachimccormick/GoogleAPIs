let map, infoWindow;

      function initMap(pos) {
          
     
       
        infoWindow = new google.maps.InfoWindow;
        
        
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position)
            let pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
           map = new google.maps.Map(document.getElementById('map'), {
               center: pos,
               zoom: 18,
               mapTypeId: "satellite"


           });
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
        initMap(pos)
        locateOnFail()
      }
    
       function locateOnFail() {

           $.post(('https://www.googleapis.com/geolocation/v1/geolocate?key=' + googleKey), function (data) {
               console.log(data)
               pos = data.location
               console.log(pos)
               initMap(pos)
           })

       }
        