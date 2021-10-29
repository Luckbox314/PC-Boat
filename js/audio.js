function play() {
    let audio = document.getElementById("bells");
    audio.play();
    console.log("playing auido");
    $("#preload").css("display", "none");
    
}