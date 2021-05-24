import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData, fetchDailyData, fetchedCountryData } from "./api/";
import "./scss/App.scss";
import covid19Img from "./images/covid19.png";

function App() {
	const [data, setData] = useState(0);
	const [dailyData, setDailyData] = useState(0);
	const [countryData, setCountryData] = useState(0);
	const [selectedCountry, setSelectedCountry] = useState("Global");

	useEffect(() => {
		const getData = async () => {
			setData(await fetchData(selectedCountry));
			setDailyData(await fetchDailyData());
			setCountryData(await fetchedCountryData());
			//All data call
			// const fetchedData = await fetchData();
			// setData(cards => cards = fetchedData)
			//Daily data call
			// const fetchedDailyData = await fetchDailyData();
			// await setDailyData(cards => cards = fetchedDailyData)
		};
		getData();
		// Self calling function
		// (async () => {
		//   const fetchedData = await fetchData();
		//   setData(cards => cards = fetchedData)
		// })();
		return () => {
			// cleanup
		};
	}, [selectedCountry]);

	return (
		<div className="App">
			<img src={covid19Img} alt="Covid 19" />

			<Cards {...data} />

			<CountryPicker
				countryData={countryData}
				selectedCountry={selectedCountry}
				setSelectedCountry={setSelectedCountry}
			/>

			<Chart
				dailyData={dailyData.data}
				data={data}
				selectedCountry={selectedCountry}
			/>

			<div clas></div>
		</div>
	);
}

export default App;
