$(document).ready(function () {
    $("#button").on("click", function () {
        
        $.ajax({
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // The URL to the API. You can get this in the API page of the API you intend to consume
            type: 'POST', // The HTTP Method, can be GET POST PUT DELETE etc
            data: {}, // Additional parameters here
            dataType: 'json',
            success: function success(data) {
                $(".message").html(JSON.stringify(data["quote"]));
                $(".author").html("-"+JSON.parse(JSON.stringify(data["author"])));
            },
                    error: function (err) { alert(err); },
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("X-Mashape-Authorization", "kgcDkkWmqYmshtcT7dE8KygPLlPLp1KKXmDjsnlTcwXeYQgCv2"); // Enter here your Mashape key
                    }
                });
      
            });
   $(".twitter-share-button").on("click", function(){
     $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text="+$("#text").text()
   )})
  
});
