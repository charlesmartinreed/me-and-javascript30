// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
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


// Connect event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
