let mivideo = document.querySelector("#mivideo");
/*addEventListener("visibilitychange" , () => {
    if(document.visibilityState === "visible"){
        mivideo.play();
    }else{
        mivideo.pause();
    }
});*/

addEventListener("visibilitychange", () => document.visibilityState === "visible" ? mivideo.play() : mivideo.pause())