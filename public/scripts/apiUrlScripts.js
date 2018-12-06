
$("button").click(function(){
userInput = $("input").val();
const googleUrl = `https://api.rebrandly.com/v1/links&${rebrandKey}`
const longUrl= {"longDynamicLink":userInput}

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
})