let scroll = 0;
let inHarbor = true;
let inFinalHarbor = false;

let height;
let width;

let setup = true;
let main;
let boatHeight;

$(document).ready(function(){

    main = $("main");
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

    $("body").css("height", main.height() + (height - boatHeight));

    $(window).scroll(harbor);
    
    window.addEventListener('resize', updateSize);

    
});

function harbor() {

    if (setup) { //Skips
        setup = !setup;
    } else {
        scroll = $(window).scrollTop(); 
    }
    
    $("#odometer").text(scroll);

    if (scroll > height/2 - boatHeight/2 && scroll < 11000 - height/2 - boatHeight/2) { // not in harbor
        if (inHarbor || inFinalHarbor) { // if get out of harbor
            inHarbor = false;
            inFinalHarbor = false;
            main.css("position", "static");
            main.css("margin-top", `${height/2 - boatHeight/2}px`);
            $("#section").text('Open Ocean');
        }
    }

    else if (scroll >= 11000 - height/2 - boatHeight/2) { // in final harbor
        if (!inFinalHarbor) {
            inFinalHarbor = true;

            main.css("position", "fixed");
            $("#section").text('Final Harbor');
            main.css("top", `${-(height/2 - boatHeight/2) - main.height() + height}px` );
            
        }
        $("#boat").css("top", `${scroll - 11000 + height}px`);
         
    }

    else { // in harbor
        if (!inHarbor) { // if get in harbor
            inHarbor = true;
            main.css("margin-top", `0px`);
            main.css("position", "fixed");
            main.css("top", `0px`);
            $("#section").text('Harbor');
        }
        $("#boat").css("top", `${scroll}px`);
          
    }
}

function updateSize() {
    height = $(window).height();
    width = $(window).width();
    $("body").css("height", main.height() + (height - boatHeight));
}