var areas = document.querySelectorAll(".area");	


var dragStart = function(e){
	e.target.style.backgroundColor = "blue";
	e.target.style.width  = "80%";
	e.target.style.height = "80%";
}
var dragEnd = function(e){
	for(var area of areas){
		if((e.clientX > area.getBoundingClientRect().x &&
				e.clientX < area.getBoundingClientRect().x +area.clientWidth ) &&
					(e.clientY > area.getBoundingClientRect().y &&
					e.clientY  < area.getBoundingClientRect().y +area.clientHeight)){

				if(area.childElementCount == 0){
					area.appendChild(document.getElementById(e.target.id));
				}
				if(area.childElementCount == 1){
					aux = area.firstElementChild;
					e.target.parentElement.appendChild(document.getElementById(aux.id));
					area.appendChild(document.getElementById(e.target.id));
				}


		}
	}

	e.target.style.width  = "100%";
	e.target.style.height = "100%";
	e.target.style.backgroundColor = "red";

}

document.addEventListener("dragstart" , dragStart);
document.addEventListener("dragend" ,   dragEnd);