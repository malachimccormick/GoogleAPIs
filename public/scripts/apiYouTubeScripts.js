//YouTube API that returns 10 results upon button click
$('#submit').click(function(buildApiRequest){
    
let input = $('#userInput').val();
let ytURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${input}?maxResults=10&key=${googleKey}`
    $.ajax({
        url: ytURL,
        success:function (data){
            console.log(data)
            //getting the images to variables
            c0 = data.items[0].snippet.thumbnails.high.url
            c1 = data.items[1].snippet.thumbnails.high.url
            c2 = data.items[2].snippet.thumbnails.high.url
            c3 = data.items[3].snippet.thumbnails.high.url
            c4 = data.items[4].snippet.thumbnails.high.url
            c5 = data.items[5].snippet.thumbnails.high.url
            c6 = data.items[6].snippet.thumbnails.high.url
            c7 = data.items[7].snippet.thumbnails.high.url
            c8 = data.items[8].snippet.thumbnails.high.url
            c9 = data.items[9].snippet.thumbnails.high.url
           //pushing the source to the pug side
            $('.card-img-top0').attr("src", c0)
            $('.card-img-top1').attr("src", c1)
            $('.card-img-top2').attr("src", c2)
            $('.card-img-top3').attr("src", c3)
            $('.card-img-top4').attr("src", c4)
            $('.card-img-top5').attr("src", c5)
            $('.card-img-top6').attr("src", c6)
            $('.card-img-top7').attr("src", c7)
            $('.card-img-top8').attr("src", c8)
            $('.card-img-top9').attr("src", c9)
            $('.videoContainer').slideDown(1000)
        }
    })


    
    })