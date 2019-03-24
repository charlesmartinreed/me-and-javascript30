// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// Build our functions
function togglePlay() {
	// either .play() or .pause(), no play property on the video, only paused
	if(video.paused) {
		video.play();
	} else {
		video.pause();
	}

	// alternate, ternary syntax
	// const method = video.paused ? 'play' : 'pause';
	// video[method]();
}

function updateButton() {
	toggle.textContent = this.paused ? '►' : '❚ ❚';
	// console.log('update button');
}

function skip() {
	// DOM elements have a custom data attribute, data-skip, that specifies the duration by which we skip forward
	// console.log(this.dataset);
	video.currentTime += parseFloat(this.dataset.skip);
}

// Connect event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

skipButtons.forEach(button => button.addEventListener('click', skip));


toggle.addEventListener('click', togglePlay);
