var area = document.querySelectorAll(".area");
console.log("area")

var dragStart = function(e){
    console.log("to aqui DragStart");
} 


var dragEnd = function(e){
    for(var area of areas){
        if((e.clientX > area.getBoundLingClientRect().x &&
            e.clientX < area.getBoundLingClientRect().x + area.clientWidth) &&

            (e.clientY > area.getBoundLingClientRect().y &&
             e.clientY < area.getBoundLingClientRect().y + area.clientHeight)
        ){
            console.log("to aqui");
        }
    }
   // console.log("to aqui DragEnd");
} 

document.addEventListener("dragStart", dragStart);
document.addEventListener("dragEnd", dragEnd);