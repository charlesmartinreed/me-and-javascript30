// Using the Fetch API

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
// fetch returns a probise that we need to dig into
// we use the built in .json method to get another promise which contains our data
	.then(blob => blob.json())
	// buy using the spread operation, ..., we can add each city from the returned data as an individual element
	// comparable to using blah.push(a, b, c, d);
	.then(data => cities.push(...data))

// when someone types into the box, we filter the array into a subset of items that contain those characters
function findMatches(wordToMatch, cities) {
	return cities.filter(place => {
		// new RegExp is a constructor that lets us pass a variable as a regex match case
		// 'g' means look through entire string, 'i' means case-insensitive
		const regex = new RegExp(wordToMatch, 'gi');

		// here we figure out if the city or state matches what was searched
		return place.city.match(regex) || place.state.match(regex);
	});
}

// EVENT LISTENERS
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

// displaying matches in the DOM
function displayMatches() {
	// 'this' refers to the value entered in the search input field
	if (this.value !== '') {
		const matchArray = findMatches(this.value, cities);

		// Add the results to the DOM
		const html = matchArray.map(place => {
			// this reg ex matches the word that was entered and replaces it with a span that has a class of h1 which provides our highlight styling
			const regex = new RegExp(this.value, 'gi');
			const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`)
			const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`)

			return `
				<li>
					<span class="name">${cityName}, ${stateName}</span>
					<span class="population">${numberWithCommas(place.population)}</span>
				</li>
			`;
		}).join(''); /* turning the returned array and into a string */
		suggestions.innerHTML = html;
	} else {
		suggestions.innerHTML = `
		<li>Filter for a city</li>
		<li>or a state</li>
		`
	}

}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
