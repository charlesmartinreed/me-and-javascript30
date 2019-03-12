// since all we need is a forEach, we don't need to conver node list to an array

const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
	// dataset is obj that contains all data attributes for an item
	// || '' means fallback to empty/nothing value instead of undefined
	const suffix = this.dataset.sizing || '';

	// how do we select variables?
	// by grabbing reference to a document element with the same name as the input that we're interacting with, we can take hold of the CSS variables represented by that name in our style.css
	document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

//watch for changes on the inputs
inputs.forEach((input) => {
	input.addEventListener('change', handleUpdate);
	// this needs a fix/flags - currently this is triggered when you move mouse in bounding box of inputs, not just when moving the actual sliders
	input.addEventListener('mousemove', handleUpdate);
})
