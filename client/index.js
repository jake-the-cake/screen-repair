import loadingScreen from "./scripts/loadScreen.js";

/* console note */
console.log('js active...');

/* get root div */
const rootContainer = document.getElementById('root');

/* build the page view */
const buildPage = () => {
	return (`
		<div class="container">
			<div class="navbar-wrapper">
				Navbar
			</div>
			<div class="content-wrapper">
				GO TO BED FOR REAL!
			</div>
		</div>
	`);
}

/* display the screen data */
const displayData = async () => {
	const html =  buildPage();
	return html;
}

/* load the screen data */
const loadContent = () => {
	loadingScreen();
	setTimeout(async () => {
		const html = await displayData();
		rootContainer.innerHTML = html;
		return;
	},2500);
};
// trigger program to run
loadContent();