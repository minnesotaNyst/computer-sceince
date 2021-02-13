const buttonEl = document.getElementById('my-button');

const clickHandler = function () {
	let count = 0;

	return function () {
		count++;
		this.textContent = `Clicks: ${count}`;
	};
};

buttonEl.addEventListener('click', clickHandler());
