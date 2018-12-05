function locate() {

    $.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${googleKey}` , function (data) {
        console.log(data)
            pos = data.location
                console.log(pos)
                    initMap(pos)
})
}

function initMap(pos) {
    //Create the map
        map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
                zoom: 18,
                    mapTypeId: "satellite"
    });
    //everything below this line except for locate() is not needed for a map
    //it is there for the marker, tilting the map when viewed closely and when 
    //you click on the marker it says here you are.
        infowindow = new google.maps.InfoWindow();
            map.setTilt(45);
    // Create a marker and set its position.
        marker = new google.maps.Marker({
            map: map,
                position: pos,
            mapTypeId:"satellite",
    });
        google.maps.event.addListener(marker, 'click', function (data) {
            console.log(data)
                infowindow.setContent("Here you are!!");
                    infowindow.open(map, this);
    });
}
// initMap()
locate()