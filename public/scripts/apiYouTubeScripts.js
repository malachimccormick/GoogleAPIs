//YouTube API that returns 10 results upon button click, you can also press enter after user input
$('#yTsubmit').click(function(buildApiRequest){
    
let input = $('#userInput').val();
let ytURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+input+`&type=video&key=${googleKey}`
    $.ajax({
        url: ytURL,
        success:function (data){
            console.log(data)
                video = data.items
                //if you use a while loop
                i= 0
                while(i<video.length){
                    console.log(i)
                    
                
            // for (i=0;i<video.length;i++){
                goToVideo="https://www.youtube.com/embed/" + video[i].id.videoId 
                console.log(goToVideo)

                $("#video"+i).attr("src", goToVideo)
                //$(".card-img-top"+i).attr("src",video[i].snippet.thumbnails.high.url )
            i++
            $('.videoContainer').slideDown(1000)
            }
        }
    })
    })
    $('#userInput').keyup(function (e) {
        let key = e.which;
        if (key == 13) // the enter key code
        {console.log("You pressed return/enter")
            $('#yTsubmit').click();
            return false;
        }
    });