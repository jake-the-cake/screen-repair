let dotCounter = 0;
const loadingContainer = document.getElementById('loading');
let loadingText = false;

const addLoadingDots = () => {
	if (!loadingText) {
		loadingContainer.innerHTML = '<span>Loading</span>';
		loadingContainer.style.opacity = '100%';
	}
	loadingText = loadingContainer.innerHTML;
	if (dotCounter === 3) {
		loadingContainer.innerHTML = loadingText.replaceAll('.', '');
		loadingContainer.firstElementChild.style.paddingLeft = '0px';
		dotCounter = 0;
	}
	else {
		let position = loadingContainer.firstElementChild.style.paddingLeft || '0px';
		let newPosition = parseInt(position);
		loadingContainer.innerHTML = loadingText + '.';
		loadingContainer.firstElementChild.style.paddingLeft = newPosition + 10 + 'px';
		dotCounter++;
	}
}

export default () => {
	setInterval(addLoadingDots, 400);
}