
$("button").click(function(){
inputUrl = $("input").val();
const Http = new XMLHttpRequest();
const googleUrl = 'https://www.googleapis.com/urlshortener/v1/url?shortUrl=http://goo.gl/fbsS&key=' +googleKey
const longUrl= {longUrl:inputUrl}

$.ajax({
    url: googleUrl,
    type: "POST",
    contentType: "application/json",
    data: longUrl,
    dataType: 'json',
    encode: true,
        success: function (result){
            
        console.log(result)
    }
})



// Http.open("get", googleUrl,);
// Http.send(inputUrl);
// Http.onreadystatechange = (e) => {
//     console.log(e)
//     console.log(Http.responseText)
// }

    // inputUrl = $("input").val();
    // console.log(inputUrl)
    // googleUrl = 'https://www.googleapis.com/urlshortener/v1/url?key=' + googleKey
    // console.log(googleUrl)
    //          $.post((googleUrl), {shortUrl: inputUrl}
             
    //         //  function(data) {
                 
    //         //      Content-Type; application/json
    //         //      {longUrl; inputUrl}
    //         //              document.write(data)
                         
                        
                         
    //          )
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