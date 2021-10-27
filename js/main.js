var scroll = 0;
var inHarbor = true;
var inFinalHarbor = false;

var height;
var width;

var setup = true;

$(document).ready(function(){
    $('html, body').scrollTop(0);

    $(window).on('load', function() {
        setTimeout(function(){
            $('html, body').scrollTop(0);
        }, 0);
    });    
    $(window).scrollTop = 0;
    height = $(window).height();
    width = $(window).width();
    boatHeight = $("#boat").height();
    console.log($("main").height());
    console.log(height);
    console.log(boatHeight);
    console.log($("main").height() - (height/2 + boatHeight/2));
    console.log(height/2 - boatHeight/2)

    // var posChecker = window.setInterval(harbor, 1000);
    $(window).scroll(harbor)
    


    
});


function checkPos() {
    scroll = $(window).scrollTop();
}

function harbor() {

    if (setup) {
        setup = !setup;
    } else {
        scroll = $(window).scrollTop(); 
    }
    
    $("#odometer").text(scroll);
    if (scroll > height/2 - boatHeight/2) { // not in harbor
        if (inHarbor) { // if get out of harbor
            inHarbor = !inHarbor;
            $("main").css("position", "static");
            $("main").css("margin-top", `${height/2 - boatHeight/2}px`); 
            $("#section").text('Open Ocean');
        }
    }

    // else if (scroll >= $("main").height() - (height/2 - boatHeight/2)) {
    //     $("#section").text('End Harbor');
    // }

    else { // in harbor
        if (!inHarbor) { // if get in harbor
            inHarbor = !inHarbor;
            $("main").css("margin-top", `0px`);
            $("main").css("position", "fixed");
            $("#section").text('Harbor');
        }
        $("#boat").css("top", `${scroll}px`);
        $("main").css("top", `0px`);  
    }
}