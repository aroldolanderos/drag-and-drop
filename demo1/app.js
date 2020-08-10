

const container = document.getElementById('container');
const tarea = document.getElementById('tarea');
	// console.log(tarea.scrollHeight);
	// console.log(tarea.scrollWidth);


const corrdsContainer = {
	'x0': container.offsetLeft,
	'y0': container.offsetTop,
	'xn': container.clientWidth,
	'yn': container.clientHeight,
}

var CURRENT_COORDS = [0, 0];



function onDragStart(event) {
	console.log("start dragg de tarea..");
}

function onDragEnd(event) {
	
	let tarea = document.getElementById("tarea")
	let newTarea = tarea.cloneNode(true);

	

	newTarea.textContent = 'Nueva tarea';
	newTarea.setAttribute('id', 123);

	newTarea.style.position = 'absolute';
	newTarea.style.left = ( CURRENT_COORDS[0] - tarea.scrollWidth/2) +'px';
	newTarea.style.top = ( CURRENT_COORDS[1] - tarea.scrollHeight/2 )+'px';
	newTarea.classList.remove('droping');
  	container.appendChild(newTarea);

  	newTarea.addEventListener('dragstart', handleDragStartTareaInstance, false);
  	newTarea.addEventListener('dragend', handleDragEndTareaInstance, false);
}


function setMappCoords() {
	let event = window.event;
    let posX = event.clientX;
    let posY = event.clientY;

    return [posX - corrdsContainer.x0, posY - corrdsContainer.y0];
}

function handleOnDragEnterContainer(event) {
	console.log("entré al container");
	
}

function handleOnDragOverContainer(event) {
	CURRENT_COORDS = setMappCoords();
	console.log("calculando coords");
}

function handleOnDrpo(event) {
	console.log("solté");
}



tarea.addEventListener('dragstart', onDragStart, false);
tarea.addEventListener('dragend', onDragEnd, false);

// container.addEventListener('dragenter', handleOnDragEnterContainer, false);
container.addEventListener('dragover', handleOnDragOverContainer, false);
// tarea.addEventListener('drop', handleOnDrpo, false);



function handleDragStartTareaInstance(event) {
	console.log("tarea moviendose");
}

function handleDragEndTareaInstance(event) {
	let coords = setMappCoords();
	event.currentTarget.style.left = ( CURRENT_COORDS[0] - tarea.scrollWidth/2) +'px';
	event.currentTarget.style.top = ( CURRENT_COORDS[1] - tarea.scrollHeight/2 )+'px';
}




const container2 = document.getElementById('container2');
diagram = new Diagram(container2);
console.log(diagram);
