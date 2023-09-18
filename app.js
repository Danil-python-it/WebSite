//load container for image and button, next, last
const ctn_images = document.getElementsByClassName("images")[0];
var position = 0;
var width = window.getComputedStyle(ctn_images).width;
var max_position = parseInt(width.charAt(0) + width.charAt(1) + width.charAt(2) + width.charAt(3));
var dist = max_position/5;
var x_start = null;
var x_move = null;




document.getElementById("iii").addEventListener("mousedown", function(event){
    x_start = event.clientX;
    console.log(x_start, "--");
}, true);

document.getElementById("iii").addEventListener("mousemove", function(event){
    x_move = event.clientX;
    console.log(x_end, "//");
}, false);
document.getElementById("iii").addEventListener("mouseup", function(){
    console.log(x_move, x_start);
    if(x_move < x_start){
        console.log("left");
        move_left()
    }
    else if(x_move > x_start){
        console.log("right");
        move_right()
    }
}, false);





function SetIndicator(){
    let indicators = document.querySelectorAll(".container_indicator");
    indicators.forEach((i) =>{i.classList.remove("active")})
    if(position == 0){
        indicators[0].classList.add("active");
    }else{
        indicators[Math.abs(position)/dist].classList.add("active");
    }
    
}
function move_left(){
    if(position >= 0){
        position = (max_position-dist)*-1
    }else{
        position += dist;
    }
    SetIndicator();
    ctn_images
    ctn_images.style.left = position.toString()+"px";
}
function move_right(){
    if(position <= (max_position-dist)*-1){
        position = 0;
    }else{
        position -= dist;
    }
    SetIndicator();
    ctn_images.style.left = position.toString()+"px";
}
let timerID = setInterval(() => move_right(), 10000);
