import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import { useStateValue } from "../../StateProvider";
import { Radio, TextField } from "@material-ui/core";
import Paypal from "./img/paypal.png";
import MasterCard from "./img/mastercard.png";
import Visa from "./img/visa.png";
import "./AddressForm.scss";
import InputMask from "react-input-mask";

const AdressForm = (active) => {
	const [loaded, setLoaded] = useState(false);

	const [selectedValue, setSelectedValue] = useState("MasterCard");
	const [orderInfo, setOrderInfo] = useState();
	const [addContact, setAddContact] = useState(false);
	const [{ contacts }, dispatch] = useStateValue(); // eslint-disable-line

	const orderInfoTemp = [
		{
			id: "",
			name: "",
			address: "",
			city: "",
			postal: "",
			phone: "",
			method: "MasterCard",
			cardN: "",
			expiration: "",
			CVC: "",
		},
	];

	const handleChange = (event) => {
		// let value = formValidation(event.target.value, event.target.id);
		let field = event.target.id;
		let value = event.target.value;

		switch (field) {
			case "name":
				let val =
					event.target.id.charAt(0).toUpperCase() + event.target.id.slice(1);
				if (value.match(/\d+/g)) {
					event.target.setCustomValidity(` ${val} can only include letters`);
				} else if (value.length <= 0) {
					event.target.setCustomValidity(`This field cannot be empty`);
				} else {
					event.target.setCustomValidity(``);
				}
				setOrderInfo({ ...orderInfo, name: value });
				break;
			case "address":
				if (value.length <= 0) {
					event.target.setCustomValidity(`This field cannot be empty`);
				} else {
					event.target.setCustomValidity(``);
				}
				setOrderInfo({ ...orderInfo, address: value });
				break;
			case "city":
				if (value.match(/\d+/g)) {
					event.target.setCustomValidity(`This field can only include letters`);
				} else if (value.length <= 0) {
					event.target.setCustomValidity(`This field cannot be empty`);
				} else {
					event.target.setCustomValidity(``);
				}
				setOrderInfo({ ...orderInfo, city: value });
				break;
			case "postal":
				if (value.replace(/ /g, "").length <= 3) {
					event.target.setCustomValidity(`Insert at least 4 digits`);
				} else if (value.match(/^[0-9.,]+$/)) {
					event.target.setCustomValidity(`Insert numbers only`);
				} else if (value.length < 4) {
					event.target.setCustomValidity(`This field cannot be empty`);
				} else {
					event.target.setCustomValidity(``);
				}

				setOrderInfo({ ...orderInfo, postal: value });
				break;
			case "phoneNumber":
				if (value.length !== 16) {
					event.target.setCustomValidity(
						`your phone number should have 9 digits`
					);
				} else {
					event.target.setCustomValidity(``);
				}
				setOrderInfo({ ...orderInfo, phone: value });
				break;
			case "typeA":
				setOrderInfo({ ...orderInfo, method: value });
				break;
			case "typeB":
				setOrderInfo({ ...orderInfo, method: value });
				break;
			case "typeC":
				setOrderInfo({ ...orderInfo, method: value });
				break;
			case "cardNumber":
				if (value.replace(/ /g, "").length === 0) {
					event.target.setCustomValidity(`Cannot be empty`);
				} else if (value.replace(/ /g, "").length < 12) {
					event.target.setCustomValidity(`incorrect Information`);
				} else {
					event.target.setCustomValidity(``);
				}
				setOrderInfo({ ...orderInfo, cardN: value });
				break;
			case "expiration":
				if (value.replace(/ /g, "").length === 1) {
					event.target.setCustomValidity(`Cannot be empty`);
				} else if (value.replace(/ /g, "").length !== 5) {
					event.target.setCustomValidity(`incorrect Information`);
				} else {
					event.target.setCustomValidity(``);
				}
				setOrderInfo({ ...orderInfo, expiration: value });
				break;
			case "CVC":
				if (value.replace(/ /g, "").length !== 3) {
					event.target.setCustomValidity(`incorrect Information`);
				} else {
					event.target.setCustomValidity(``);
				}
				setOrderInfo({ ...orderInfo, CVC: value });
				break;
			default:
				break;
		}
		if (field === "typeC" || field === "typeB" || field === "typeA") {
			setSelectedValue(value);
		}
	};
	const handleSubmitAddress = (e) => {
		setOrderInfo({ ...orderInfo, id: uuid() });
		e.preventDefault();
		setAddContact(!addContact);
		window.scrollTo(0, 0);
		dispatch({
			type: "SET_CONTACTS",
			contacts: orderInfo,
		});

		// toggle();
	};

	useEffect(() => {
		setLoaded(true);
		setOrderInfo({ ...orderInfo, id: uuid() });
		if (!loaded) {
			setOrderInfo(...orderInfoTemp);
		}

		return () => {};
	}, [loaded]); // eslint-disable-line

	return (
		<>
			<form onSubmit={handleSubmitAddress}>
				<TextField
					onChange={handleChange}
					id="name"
					label="Full Name"
					placeholder="Full Name"
					variant="outlined"

					// helperText="Please Enter Your name"
				/>
				<TextField
					required
					onChange={handleChange}
					id="address"
					label="address"
					placeholder="address"
					variant="outlined"
				/>
				<div className="order-contact-form-sub">
					<TextField
						required
						onChange={handleChange}
						id="city"
						label="City"
						placeholder="City"
						variant="outlined"
					/>

					<InputMask
						disabled={false}
						maskChar=""
						onChange={handleChange}
						mask="9999-999">
						{() => (
							<TextField
								required
								onChange={handleChange}
								id="postal"
								label="Postal Code"
								placeholder="Postal Code"
								variant="outlined"
							/>
						)}
					</InputMask>
				</div>

				<InputMask
					mask="+351 999 999 999"
					disabled={false}
					maskChar=" "
					onChange={handleChange}>
					{() => (
						<TextField
							required
							style={{ width: "225px" }}
							id="phoneNumber"
							label="Phone number"
							placeholder="Phone number"
							variant="outlined"
						/>
					)}
				</InputMask>
				<h3 style={{ marginTop: "15px" }}>Payment Method</h3>
				<div className="order-contact-form-payment-method">
					<div className="payment-method">
						<Radio
							required
							id="typeA"
							onChange={handleChange}
							checked={selectedValue === "MasterCard"}
							value="MasterCard"
							color="default"
							name="radio-button-demo"
							inputProps={{ "aria-label": "MasterCard" }}
							size="small"
						/>
						<img src={MasterCard} alt="mastercard" />
					</div>
					<div className="payment-method">
						<Radio
							required
							id="typeB"
							onChange={handleChange}
							checked={selectedValue === "VISA"}
							value="VISA"
							color="default"
							name="radio-button-demo"
							inputProps={{ "aria-label": "VISA" }}
							size="small"
						/>
						<img src={Visa} alt="visa" />
					</div>
					<div className="payment-method">
						<Radio
							required
							id="typeC"
							checked={selectedValue === "Paypal"}
							onChange={handleChange}
							value="Paypal"
							color="default"
							name="radio-button-demo"
							inputProps={{ "aria-label": "Paypal" }}
							size="small"
						/>
						<img src={Paypal} alt="paypal" />
					</div>
				</div>
				<div className="order-contact-form-payment">
					<InputMask
						mask="999 999 999 999"
						disabled={false}
						maskChar=" "
						onChange={handleChange}
						id="cardNumber">
						{() => (
							<TextField
								onChange={handleChange}
								required
								id="cardNumber"
								label="Card Number"
								placeholder="Card Number"
								variant="outlined"
							/>
						)}
					</InputMask>
					<InputMask
						mask="99/99"
						disabled={false}
						maskChar=" "
						onChange={handleChange}>
						{() => (
							<TextField
								required
								id="expiration"
								label="MM/YY"
								placeholder="Expiration Date"
								variant="outlined"
							/>
						)}
					</InputMask>

					<InputMask
						mask="999"
						disabled={false}
						maskChar=" "
						onChange={handleChange}>
						{() => (
							<TextField
								// onChange={handleChange}
								required
								id="CVC"
								label="CVC"
								placeholder="CVC"
								variant="outlined"
							/>
						)}
					</InputMask>
				</div>
				<div className="subtotal-Order">
					<div className="subtotal-checkout-btn-order">
						<button className="checkout-btn" type="submit" value="Submit">
							Submit
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default AdressForm;
