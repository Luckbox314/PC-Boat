|function play() {
    let audio = document.getElementById("bells");
    audio.play();
    console.log("playing auido");
    $("#preload").css("display", "none");
    enableScroll();   
}


var muted = false;

function mute() {
    muted = !muted
    document.getElementById('bells').muted = muted;
    document.getElementById("backgroundAudio").muted = muted;
    if (muted) {
        $("#mute").text("Unmute");    
    } else {
        $("#mute").text("Mute");    
    }
    
}