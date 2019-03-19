const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

// listen for click or change
checkboxes.forEach(box => {
	// apparently the keyboard fires click events as well, so we don't necessarily need to listen for change events
	box.addEventListener('click', handleCheck);
})

// captures a reference to the most recently checked box
let lastChecked;

function handleCheck(e) {
	// check if the shift key was held down
	// make sure that the user is CHECKING the box, not unchecking it
	let inBetween = false;
	if(e.shiftKey && this.checked) {
		// now we can go ahead and handle the bidness
		// loop through each checkbox, find the first check, check each one after that, stop at the last checked
		checkboxes.forEach(checkbox => {
			console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
				console.log('starting to check inbetween');
			}

			if(inBetween) {
				checkbox.checked = true;
			}
		});
	}

	lastChecked = this;
}
