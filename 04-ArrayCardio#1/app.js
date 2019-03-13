const inventors = [
	{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
	{ first: 'Issac', last: 'Newton', year: 1643, passed: 1727 },
	{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
	{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
	{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
	{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
	{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
	{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
	{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
	{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
	{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
	{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
]

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// EXERCISES BEGIN HERE! //
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const antiquityInventors = inventors.filter((a) => { return a.year >= 1500 && a.year <= 1600});
// console.log(antiquityInventors);
// console.log(inventors.filter((inventor) => { return inventor.year >= 1500 && inventor.year <= 1600 }));

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const names = inventors.map((a) => { return a.first, a.last });
// console.log(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedAges = inventors.sort((a, b) => { return a.year - b.year} );
// console.log(sortedAges);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const reducer = (accumulator, currentValue) => accumulator + currentValue
const combinedAges = inventors.map((a) => {return (a.passed - a.year)} )
const reducedAgesValue = combinedAges.reduce(reducer);
// console.log(combinedAges);
// console.log(reducedAgesValue);

// 5. Sort the inventors by years lived
const sortByLongest = combinedAges.sort((a, b) => { return b - a });
// console.log(sortByLongest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const boulevards = ["Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard du Montparnasse", "Boulevard de Rochechouart", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard de la Zone", "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard du Crime", "Boulevard Haussmann", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard du Temple", "Boulevard Voltaire"];

const filteredFrance = boulevards.filter((blvd) => {
	// return blvd.length < 20
	if (blvd.indexOf('de') != -1) {
		return blvd
	}
})
//console.log(filteredFrance);


// 7. sort Exercise
// Sort the people alphabetically by last name
const lastNames = people.map((person) => {
	let commaIndex = person.indexOf(',');
	let lastName = person.slice(0, commaIndex);
	return lastName
});
// console.log(lastNames.sort());

// 8. Reduce Exercise
// Sum up the instances of each of these
// I assume he meant to sum the lengths
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const dataReducer = (accumulator, currentValue) => accumulator + currentValue;

const letterCounts = data.map((datum) => {
	let wordLength = datum.length;
	return wordLength;
})
const letterCountReduced = letterCounts.reduce(dataReducer);
console.log(letterCountReduced);
