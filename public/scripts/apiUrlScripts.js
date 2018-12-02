
$("#urlButton").click(function(){

    inputUrl = $("#urlInput").val();
    console.log(inputUrl)
    googleUrl = 'https://www.googleapis.com/urlshortener/v1/?key=' + googleKey
    console.log(googleUrl)
             $.post((googleUrl), function (data) {
                         console.log(data)
                         
                        longUrl= {"longUrl": "http://www.google.com/"}
                         console.log(longUrl)
             })
})




















    // $.get('https://www.googleapis.com/urlshortener/v1/'+inputUrl+'?key=' + googleKey, function (data) {
    //     console.log(data)
        // $.post (googleUrl)
    //  app.get('/URLshortner', (req, res) => {
    //     req.POST (googleUrlhttps: //www.googleapis.com/urlshortener/v1/url
    //         Content - Type: application / json

    //     {
    //         "longUrl": "http://www.google.com/"
    //     }
   
    

// var request = gapi.client.urlshortener.url.insert({
//       'resource': {
//           'longUrl': 'http://copaseticflows.appspot.com'
//       }
//   });
//   request.execute(function(response) {      
//       if((response.id != null)){
//        //do something with the shortened url contained in the response.id field
//       }
//   });