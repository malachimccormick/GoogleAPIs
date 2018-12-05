//YouTube API that returns 10 results upon button click
$('#submit').click(function(buildApiRequest){
    
let input = $('#userInput').val();
let ytURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q="+input+`&type=video&key=${googleKey}`
    $.ajax({
        url: ytURL,
        success:function (data){
            console.log(data)
            topic = data.items
            
            for (i=0;i<topic.length;i++){
                go="https://www.youtube.com/watch?v=" + topic[i].id.videoId 
                console.log(go)
                $("#video"+i).attr("href", go)
                $(".card-img-top"+i).attr("src",topic[i].snippet.thumbnails.high.url )
            
            $('.videoContainer').slideDown(1000)
            }
        }
    })


    
    })