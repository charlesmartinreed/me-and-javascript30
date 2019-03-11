function playSound(e) {
		// what key code was pressed - e.keycode?
		// is there an audio element on the page that has this keycode
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

		// grab reference to the key that was actually tapped
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

		// rewind to start of element to allow rapid retrigger
		audio.currentTime = 0;
		audio.play();

		// add our "pressed button" styling
		key.classList.add('playing');
}

	function removeTransition(e) {
		if(e.propertyName !== 'transform') return;
		// class is removed when transitionend occurs, which, OK, we're playing with spacetime here
		this.classList.remove('playing');
	}

	// transition complete? reverse to original state by listening for transition
		const keys = document.querySelectorAll('.key');
		keys.forEach((key) => {
			key.addEventListener('transitionend', removeTransition);
		})

	// // no audio associated with the keyCode? return out of the function
	// if(!audio) { return };

window.addEventListener('keydown', playSound);
