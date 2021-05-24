const GetDate = () => {
	let getData = new Date();
	let year = getData.getFullYear();
	let day = getData.getDate();
	let hours = getData.getHours();
	let month = getData.getMonth();
	let minutes = getData.getMinutes();
	let theMonths = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	let date = `${day} of ${theMonths[month]} ${year}, at ${hours}:${minutes} `;
	return date;
};

export default GetDate;
