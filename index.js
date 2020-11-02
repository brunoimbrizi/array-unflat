const unflat = (arr, size = 2) => {
	if (!arr) return null;

	const newArr = [];
	const newLen = arr.length / size;

	for (var i = 0; i < newLen; i++) {
		const group = [];
		for (let j = 0; j < size; j++) {
			group.push(arr[i * size + j]);
		}
		newArr.push(group);
	}
	return newArr;
};

module.exports = unflat;
