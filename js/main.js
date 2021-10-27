var scroll = 0;
var inHarbor = true;
var inFinalHarbor = false;

var height;
var width;

$(document).ready(function(){
    height = $(window).height();
    width = $(window).width();
    boatHeight = $("#boat").height();

    var posChecker = window.setInterval(checkPos, 50);
    $(window).scroll(harbor)
    


    
});


function checkPos() {
    scroll = $(window).scrollTop();
    
}

function harbor() {
    scroll = $(window).scrollTop();
    $("#odometer").text(scroll);
    if (scroll > height/2 - boatHeight/2) { // not in harbor
        if (inHarbor) { // if get out of harbor
            inHarbor = !inHarbor;
            $("main").css("position", "static");
        }
        $("main").css("top", `${-scroll}px`);  
    }
    else { // in harbor
        if (!inHarbor) { // if get in harbor
            inHarbor = !inHarbor;
            $("main").css("position", "fixed");
        }
        $("#boat").css("top", `${scroll}px`);
    }
}