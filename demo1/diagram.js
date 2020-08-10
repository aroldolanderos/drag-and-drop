class Diagram {

	constructor(container, items) {
		this.items = items || [],
		this.container = container,
		this.containerCoords = {
			originX: container.offsetLeft,
			originY: container.offsetTop,
			endX: container.clientWidth,
			endY: container.clientHeight,
		}
	}

	build() {

	}

	getCurrentCursorCoords() {
	    let posX = window.event.clientX;
	    let posY = window.event.clientY;
    	return [posX - this.containerCoords.originX, posY - this.containerCoords.originY];
	}
}