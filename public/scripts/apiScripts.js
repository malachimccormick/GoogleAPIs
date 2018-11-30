

// function locate(){
//     console.log("this works")
//     const googleURL = 'https://www.googleapis.com/geolocation/v1/geolocate?key=' + googleKey;
//         function getLocation(data){
//             console.log (data)
//             pos = data.location
//             initMap(pos)
//         }
//     $.ajax({
//         url: googleURL,
//         success: function(data){
//             getLocation(data)
//             console.log(data)
//         }
//     })
// }


function locate(pos) {

    $.post('https://www.googleapis.com/geolocation/v1/geolocate?key=' + googleKey , function (data) {
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
        infowindow = new google.maps.InfoWindow();
            map.setTilt(45);
    // Create a marker and set its position.
        marker = new google.maps.Marker({
            map: map,
                position: pos,
            mapTypeId:"satellite",
        title: 'Hello World!'
    });
        google.maps.event.addListener(marker, 'click', function (data) {
            console.log(data)
                infowindow.setContent("Here you are!!");
                    infowindow.open(map, this);
    });
}
locate()