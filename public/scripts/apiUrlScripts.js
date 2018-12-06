
$("button").click(function(){
userInput = $("input").val();
const googleUrl = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${firebaseKey}`
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