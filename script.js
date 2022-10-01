var x = document.getElementById("myvideo");

function plays(){
    x.play();
}
function pauses(){
    x.pause();
    x.currentTime = 0;
}

var y = document.getElementById("btn1");

function subs(){
    y.innerText = "Unsubscribe";
}

var z = document.getElementById("btn");

function Logout(){
    z.innerText = "Logout";
}
