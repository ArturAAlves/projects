import { FormControl, NativeSelect } from "@material-ui/core";
import React from "react";
import styles from "./CountryPicker.module.scss";

const CountryPicker = ({
	countryData,
	setSelectedCountry,
	selectedCountry,
}) => {
	// { countryData }
	if (countryData) {
		// console.log(setSelectedCountry)
	}

	return countryData ? (
		<FormControl className={styles.container}>
			<NativeSelect onChange={(e) => setSelectedCountry(e.target.value)}>
				<option value="Global">Global</option>
				<div className></div>
				{countryData.map((data, i) => (
					<option key={i} value={data}>
						{data}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	) : (
		"Loading"
	);
};

export default CountryPicker;
