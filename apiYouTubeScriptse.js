$(document).ready(function () {
    $(".vids").hide()
    $("#youtubeSubmit").click(function () {
        const videos = $("#youtubeInput").val()
        const url = `https://www.googleapis.com/youtube/v3/search?&part=snippet&maxResults=10&q=` + videos + `&type=video&key=${googleKey}`
        console.log(url)

        $.ajax({
            url: url,
            success: function (data) {
                console.log(data)
                $(".vids").show()

                const video = data.items
                for (arr = 0; arr < video.length; arr++) {
                    const videoUrl = "https://www.youtube.com/watch?v=" + video[arr].id.videoId
                    console.log(videoUrl)
                     for (i = 0; i < video.length; i++) {
                         goToVideo = "https://www.youtube.com/watch?v=" + video[i].id.videoId
                         console.log(goToVideo)
                         $("#video" + i).attr("href", goToVideo)
                         $(".card-img-top" + i).attr("src", video[i].snippet.thumbnails.high.url)

                         $('.videoContainer').slideDown(1000)
                     }

                    //   I TRIED ADDING AN IF STATEMENT TO THE FOR LOOP: if (arr < video.length) {
                    //     console.log('hi')
                    //     $("#videoFields").attr('href', videoUrl[arr].id.videoId)
                    //     } else {
                    //         console.log('done')
                    //     } 
                    //     arr++ 
                    // let printToPage = $('#videoFields').attr('id',val).html('click ');
                    // if (arr < video.length) {
                    //     printToPage
                    // } else {
                    //     alert('done')
                    // }
                    // I TRIED A WHILE LOOP: while (video.length < 10) {
                    //     const videoUrl = "https://www.youtube.com/watch?v=" + video[i].id.videoId
                    //     $("#videoFields").attr('href', videoUrl).html('view vid)
                    // }

                    // const video0 = videoUrl
                    // console.log(video0)
                    // $('#vid0').attr('href', video0).html('click')
                    //manually printing items to html
                    const video0Url = "https://www.youtube.com/watch?v=" + video[0].id.videoId
                    $("#vid0").attr('href', video0Url).html('view vid')
                    const video0Title = data.items[0].snippet.title
                    $("#vid0Title").html(video0Title)
                    // const video0Pic = data.items[0].snippet.thumbnails.default.url
                    // $("#vidPic0").attr('src', video0Pic)
                    const image0 = document.createElement("IMG")
                    video0Pic = data.items[0].snippet.thumbnails.default.url
                    image0.src = video0Pic
                    $("#vidPic0").html(image0);
                    //manually printing items to html
                    const video1Url = "https://www.youtube.com/watch?v=" + video[1].id.videoId
                    $("#vid1").attr('href', video1Url).html('view vid')
                    const video1Title = data.items[1].snippet.title
                    $("#vid1Title").html(video1Title)
                    // const video0Pic = data.items[0].snippet.thumbnails.default.url
                    // $("#vidPic0").attr('src', video0Pic)

                    const image1 = document.createElement("IMG")
                    video1Pic = data.items[1].snippet.thumbnails.default.url
                    image1.src = video1Pic
                    $("#vidPic1").html(image1);
                    const video2Url = "https://www.youtube.com/watch?v=" + video[2].id.videoId
                    $("#vid2").attr('href', video2Url).html('view vid')
                    const video3Url = "https://www.youtube.com/watch?v=" + video[3].id.videoId
                    $("#vid3").attr('href', video3Url)
                    const video4Url = "https://www.youtube.com/watch?v=" + video[4].id.videoId
                    $("#vid4").attr('href', video4Url)
                    const video5Url = "https://www.youtube.com/watch?v=" + video[5].id.videoId
                    $("#vid5").attr('href', video5Url)
                    const video6Url = "https://www.youtube.com/watch?v=" + video[6].id.videoId
                    $("#vid6").attr('href', video6Url)

                }
                //    const url - 
                //     let vid0 = videoUrl[arr].id.videoId
                //     $('#vid0').attr('href', vid0).html('view')

            },
            error: function (request, error) {
                console.log(error)
                console.log(request)
            }
        });
    })
})