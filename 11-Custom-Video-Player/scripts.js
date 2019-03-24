// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const fullscreen = player.querySelector('#fullscreen__button');


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

function handleRangeUpdate() {
	// console.log(this.value);
	// console.log(this.name);
	// switch (this.name) {
	// 	case 'volume':
	// 	video.volume = parseFloat(this.value);
	// 	break;
	// 	case 'playbackRate':
	// 	video.playbackRate = parseFloat(this.value);
	// }

	// alternate, ternary method
	video[this.name] = this.value;
}

function handleProgress() {
	// basically, we'll just be updating the flex-basis of the progress bar to indicate how far along in the video we are
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	// listen for a click on the progress, divide the click location (offsetX) from the total width of progress bar (offsetWidth), use that to set the current time of the video

	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;

	// console.log(e);
}

function handleFullscreen() {
	//if not already fullscreen...
	if (video.requestFullscreen) {
		//no need to do anything special with the returned promise
		video.requestFullscreen().then({}).catch(err => {
			console.log("Error attempting to enable fullscreen mode", err.message, err.name);
		});
	} else {
		// leave fullscreen when user taps button and full screen was already enabled
		document.exitFullScreen();
	}
}

// Connect event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
// alternatively, the 'progress' event emitter allows the same functionality. either way, each time the video fires off the "timeudpate event", we change the flex basis for our progress bar
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('input', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', () => {
// 	if(mousedown) {
// 		scrub();
// 	}
// });
// if mousedown is true, scrub. Else, return false, which will do nothing.
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));

progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

toggle.addEventListener('click', togglePlay);

fullscreen.addEventListener('click', handleFullscreen);
