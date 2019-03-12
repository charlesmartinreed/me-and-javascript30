const hourHand = document.querySelector('.hour-hand');
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	// adding 90 to offset the default 90 degree rotate that we did to start the hands at 12
	const secondsToDegrees = ((seconds / 60) * 360) + 90;
	const minutesToDegrees = ((minutes / 60 * 360)) + 90;
	const hoursToDegrees = ((hours / 12 * 360)) + 90;

	secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minutesToDegrees}deg)`;
	hourHand.style.transform = `rotate(${hoursToDegrees}deg)`;

	console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(setDate, 1000);
