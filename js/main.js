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

    $("body").css("height", $("main").height() + height/2 + boatHeight/2);

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
    if (scroll > height/2 - boatHeight/2 && scroll < 11000 - height/2 - boatHeight/2) { // not in harbor
        if (inHarbor || inFinalHarbor) { // if get out of harbor
            inHarbor = false;
            inFinalHarbor = false;
            $("main").css("position", "static");
            $("main").css("margin-top", `${height/2 - boatHeight/2}px`); 
            $("#section").text('Open Ocean');
        }
    }

    else if (scroll >= 11000 - height/2 - boatHeight/2) {
        if (!inFinalHarbor) {
            inFinalHarbor = true;
            
            $("main").css("position", "fixed");
            $("#section").text('Final Harbor');
            $("main").css("top", `${-(height/2 - boatHeight/2) - $("main").height() + height}px` );
            
        }
        $("#boat").css("top", `${scroll - 11000 + height}px`);
         
    }

    else { // in harbor
        if (!inHarbor) { // if get in harbor
            inHarbor = true;
            $("main").css("margin-top", `0px`);
            $("main").css("position", "fixed");
            $("main").css("top", `0px`);
            $("#section").text('Harbor');
        }
        $("#boat").css("top", `${scroll}px`);
          
    }
}