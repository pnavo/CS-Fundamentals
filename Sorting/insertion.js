var arraySize = 10;

var array = [];
for (var index = 0; index < arraySize; index++) {
	var randomNumber = Math.round(Math.random() * arraySize);

	array.push(randomNumber);
}

function insertionSort(items) {
	var len = items.length;

	for (var i = 0; i < len; i++) {
		var temp = items[i];
		for (var j = i - 1; j >= 0 && (items[j] > temp); j--) {
			items[j + 1] = items[j]
		}
		items[j + 1] = temp;
	}
}

// console.log("Pre-sort");
// console.log(array.join(" "));
// console.log("--------------------------");
// console.log("Post-sort");
// console.log(insertionSort(array).join(" "));

insertionSort(array);
console.log(array);