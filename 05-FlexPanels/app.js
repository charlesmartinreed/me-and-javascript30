// grab all the panels

const panels = document.querySelectorAll('.panel');
panels.forEach( (panel) => {
	panel.addEventListener('click', toggleOpen)
})

panels.forEach( (panel) => {
	panel.addEventListener('transitionend', toggleActive)
})


function toggleOpen() {
	this.classList.toggle('open');
}

function toggleActive(e) {
	console.log(e.propertyName);
	// using .includes here to prevent browser issues with differently named properties - 'flex-grow' is the transition we're really needing
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
	// this.classList.toggle('open-active');
}
