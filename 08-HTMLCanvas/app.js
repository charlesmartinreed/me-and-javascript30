// DOM VARIABLES
// canvas is a block of pixels, basically
// you draw on the context, which is either 2D or 3D
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// our canvas needs to be the exact height/width of our window
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

// configuring our drawing tools
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round'; /* corner shape for stroke paths */
ctx.lineCap = 'round'; /* shape used at the end of open subpaths, when stroked. Think of this as the brush shape */
ctx.lineWidth = 100;

// think of this as as Photoshop style blend mode
ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
	// moved when mouse is moved atop the canvas
	// our event gives us information on the mouse location
	if(!isDrawing) return;
	console.log(e);

	// user mouse is down, let's draw!

	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(e.offsetX, e.offsetY);
	ctx.stroke();

	// we'll need to update our lastX and lastY to reflect our new position
	[lastX, lastY] = [e.offsetX, e.offsetY];
	// lastX = e.offsetX;
	// lastY = e.offsetY;
	hue++; /* since we're using hsl, we can control the hue programmatically */
	if (hue >= 360) { hue = 0 };

	// flip the direction, which decides whether lineWidth is growing or shirnking
	if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
		direction = !direction;
	}
	if (direction) {
		ctx.lineWidth++;
	} else {
		ctx.lineWidth--;
	}
}

// only draw when cursor is pressed down
canvas.addEventListener('mousedown', (e) => {
	isDrawing = true;
	// update lastX and lastY
	[lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
