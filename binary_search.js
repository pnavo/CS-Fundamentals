var result = binarySeach([2,5,88,91,105,200,723,888,910,1003,1200,1505,1708], 888);

console.log(result)

function binarySearch(stuff, searchElement) {
	var currentElement;
	var currentIndex;
	var maxIndex = stuff.length - 1;
	var minIndex = 0;

	while(minIndex <= maxIndex) {
		currentIndex = Math.floor((minIndex + maxIndex) / 2);

		currentElement = stuff[currentIndex];
		console.log('Start Index: ', minIndex)
		console.log('End Index: ', maxIndex)
		console.log('Current Element: ', currentElement)

		if(currentElement < searchElement){
			minIndex = currentIndex + 1;
		} else if (currentElement > searchElement){
			maxIndex = currentIndex - 1;
		} else {
			console.log('Current Index: ', currentIndex)
			console.log('Current Element: ')
		}
	}
}