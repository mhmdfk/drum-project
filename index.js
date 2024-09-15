
arr=document.querySelectorAll(".drum");

for(var i=0;i<arr.length;i++){
    arr[i].addEventListener("click",function(){
        var key=this.getAttribute("class").substr(0,1);
        make_sound(key);
        make_animation(key);
    });
}

document.addEventListener("keydown",function(event){
    make_sound(event.key);
    make_animation(event.key);
});

function make_sound(key){
    var aud;
    console.log(key);
    switch (key) {
        case "a":
            aud=new Audio("./sounds/tom-2.mp3");
       
            break;
        case "s":
            aud=new Audio("./sounds/tom-3.mp3");
       
            break;
        case "d":
            aud=new Audio("./sounds/tom-4.mp3");
       
            break;
        case "j":
            aud=new Audio("./sounds/snare.mp3");
       
            break;
        case "k":
            aud=new Audio("./sounds/kick-bass.mp3");
       
            break;
        case "l":
            aud=new Audio("./sounds/crash.mp3");
       
            break;                
        case "w":
            aud=new Audio("./sounds/tom-1.mp3");
       
            break;
    }
    aud.play();
}

function make_animation(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");   
    },100)
}

