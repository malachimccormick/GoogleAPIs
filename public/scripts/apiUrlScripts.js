
$("#urlButton").click(function(){
userInput = $("input").val();
const toShortUrl = "https://api.rebrandly.com/v1/links"
const longUrl= {"longDynamicLink":userInput}

$.ajax({
    url: toShortUrl,
    type: "POST",
    data: JSON.stringify({
        "destination": userInput,
        "domain": { "fullName": "rebrand.ly" }}),
    dataType: 'json',
    headers: {
        "Content-Type": "application/json",
        "apikey": rebrandKey,
    },
    encode: true,
        success: function (result){
            
        console.log(result)
    }
})
})