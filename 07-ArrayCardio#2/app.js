// ## Array Cardio Day 2

const people = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 }
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 }
];

// .some() checks if at least one item in your array matches a given case

// const isAdult = people.some(person => {
// 	const currentYear = (new Date()).getFullYear();
// 	return currentYear - person.year >= 19;
// })

// EVEN MORE PARED DOWN VERSION
const isAdult = people.some(person => (new Date().getFullYear() - person.year >= 19))

console.log(isAdult); //since at least person in [people] is older than 19, this is true

// .every() is true if EVERY item in the array matches the given case
const allAdults = people.every(person => (new Date().getFullYear() - person.year >= 19))
console.log(allAdults); //false, since Lux is only 4

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for rather than a subset of the array

// const comment = comments.find(function(comment) {
// 	if(comment.id === 823423) {
// 		return comment
// 	}
// })

// EVEN MORE PARED DOWN VERSION
const comment = comments.find(comment => comment.id === 823423)
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

//one method
comments.splice(index, 1);

//another method, seem more often in frameworks like Redux
const newComments = [
	// make a new array of the items in the old array, excluding the element to be removed (whose position is captured by index)
	// we spread the items into the array in order to utilize them as individual elements
	...comments.slice(0, index),
	...comments.slice(index + 1)
]
