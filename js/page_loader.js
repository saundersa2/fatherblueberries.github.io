$(document).ready(function () {
    var center = $("#center");
    center.load("meet_the_band.html", function() {
        var indexLink = $("#main-home-link"); 
        var musicLink = $("#music-link");
        var mediaLink = $("#media-link");
        var newsLink = $("#news-link");
        var eventsLink = $("#events-link");
        var shopLink = $("#shop-link");

        //$("#center").css("background-image", 'url(images/FBB_Main.jpg)');
        //$("#center").css("background-size", "cover");
        $("#burt").flip();
        $("#josiah").flip();
        $("#chuck").flip();
        $("#cj").flip();
        $("#nick").flip();
       
        indexLink.click(function() {
            center.innerHTML = "";
            center.load("meet_the_band.html", function() {
                //$("#center").css("background-image", 'url(images/FBB_Main.jpg)');
                //$("#center").css("background-size", "cover");
                $("#burt").flip();
                $("#josiah").flip();
                $("#chuck").flip();
                $("#cj").flip();
                $("#nick").flip();
            });
        });

        musicLink.click(function() {
            center.innerHTML = "";
            center.load("music.html");
        });

        mediaLink.click(function() {
            center.innerHTML = "";
            center.load("media.html");
        });
        
        newsLink.click(function() {
            center.innerHTML = "";
            center.load("news.html");
        });
        
        eventsLink.click(function() {
            center.innerHTML = "";
            center.load("events.html");
        });
        
        shopLink.click(function() {
            center.innerHTML = "";
            center.load("shop.html");
        });
    });
    
});
