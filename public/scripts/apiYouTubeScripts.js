



    // See full sample for buildApiRequest() code, which is not 
    // specific to a particular API or API method.
let input= $('#input').val()
let ytURL= `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${userinput}?type=video&key=${googlekey}`
$('#submit').click(function(){

    
    // buildApiRequest('GET',
    //     '/youtube/v3/search', {
    //         'maxResults': '10',
    //         'part': 'snippet',
    //         'q': input,
    //         'type': 'video'
    //     });
    console.log(googlekey)

    $.ajax({
        url: ytURL,
        success:function (data){
            console.log(data)
        }
    })
})