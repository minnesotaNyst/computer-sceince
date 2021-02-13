function counter() {
	let count = 0;
	return function () {
		return count++;
	};
}

const increment = counter();
increment(); //=> 0
