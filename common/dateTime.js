const months = [
	{
		full: 'january',
		abrev: 'jan',
		num: 1
	}, {
		full: 'february',
		abrev: 'feb',
		num: 2
	}, {
		full: 'march',
		abrev: 'mar',
		num: 3
	}, {
		full: 'april',
		abrev: 'apr',
		num: 4
	}, {
		full: 'may',
		abrev: 'may',
		num: 5
	}, {
		full: 'june',
		abrev: 'jun',
		num: 6
	}, {
		full: 'july',
		abrev: 'jul',
		num: 7
	}, {
		full: 'august',
		abrev: 'aug',
		num: 8
	}, {
		full: 'september',
		abrev: 'sep',
		num: 9
	}, {
		full: 'october',
		abrev: 'oct',
		num: 10
	}, {
		full: 'november',
		abrev: 'nov',
		num: 11
	}, {
		full: 'december',
		abrev: 'dec',
		num: 12
	}
];

const convertMonth = (monthInput, returnType) => {
	let currentMonth;
	months.forEach((month) => {
		if (month.num === monthInput + 1) {
			currentMonth = month;
		}
	});
	return currentMonth[returnType];
};

const convertMinutes = (minutes) => {
	if (Number(minutes) < 10) {
		minutes = `0${minutes}`;
	}
	return minutes;
};

const capitalizeFirstLetter = (word) => {
	if (Number(word) * 0 !== 0) {
		word = word[0].toUpperCase() + word.slice(1);
	}
	return word;
};

const getTimeStamp = (data) => {
	console.log(timestamp);
	let month = capitalizeFirstLetter(convertMonth(timestamp.getMonth(), data.month));
	let minutes = convertMinutes(timestamp.getMinutes());
	const date = `${month} ${timestamp.getDate()}, ${timestamp.getFullYear()}`;
	const time = `${timestamp.getHours()}:${minutes}`;
	return {time:time,date:date};
}

export {
	getTimeStamp
};