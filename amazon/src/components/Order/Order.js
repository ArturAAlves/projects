import React, { useEffect, useState } from "react";
import "./Order.scss";
import { useStateValue } from "../../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { getTotalProducs } from "../../reducer";
import uuid from "react-uuid";
import AddIcon from "@material-ui/icons/Add";
import AddressItem from "./../AddressItem/AdressItem";
import GetDate from "./../GetDate/GetDate";
import AddressForm from "../AddressForm/AddressForm";

//line 355

const Order = () => {
	const [
		{ user, basket, contacts, purchase }, //eslint ignoreline
		dispatch,
	] = useStateValue();

	const [present, setPresent] = useState(false);
	const [presentNote, setPresentNote] = useState();
	const [submited, setSubmited] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [selectedAdress, setSelectedAdress] = useState("");
	const [addContactActive, setAddContactActive] = useState(false);

	//Purchase
	const handlePurchase = (e) => {
		e.preventDefault();
		let address = contacts.filter((contact) => contact.id === selectedAdress);
		let date = GetDate();
		if (basket.length > 0 && contacts.length > 0) {
			setSubmited(true);
			window.scrollTo(0, 0);
			setErrorMessage("");
			dispatch({
				type: "SET_PURCHASE",
				data: {
					purchaseID: uuid(),
					address,
					basket,
					presentNote,
					date,
				},
			});

			dispatch({
				type: "CLEAR_BASKET",
			});

			setTimeout(function () {
				window.open(".#/returns&orders", "_self");
			}, 2000);

			// browserHistory.push("/");
		} else if (basket.length <= 0) {
			setErrorMessage("Your Shopping Cart is Empty");
		}
	};

	const hangleSelectedAddress = (e) => {
		setSelectedAdress(e);
	};

	useEffect(() => {
		setTimeout(function () {
			if (!user) {
				window.open("./", "_self");
			}
		}, 2500);
	}, []); // eslint-disable-line

	useEffect(() => {
		if (addContactActive) {
			setAddContactActive(!addContactActive);
		}
		let contactsLength = contacts.length - 1;
		if (contacts.length >= 1) {
			setSelectedAdress(contacts[contactsLength].id);
		}
	}, [contacts]); // eslint-disable-line

	return (
		<div className="order">
			<div className="checkout-Order">
				<div className="checkout-banner">
					<div className="checkout-banner-img">
						<img
							alt="card-img"
							src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/OCC_146VC._CB485945274_.jpg"
						/>
					</div>
					<div className="checkout-banner-text">
						<p>
							Pre-Approval with a YES or NO in <strong>60 seconds </strong>for
							Ocean Credit Card get up to <strong>€1,500 credit.</strong>
						</p>
					</div>
					<div className="checkout-banner-btn">
						<img
							src="https://images-na.ssl-images-amazon.com/images/G/02/creditcard/Learn_More._CB485946358_.gif"
							alt="btn"
						/>
					</div>
				</div>
				<div className="personal-info">
					<div>
						<span style={{ textDecoration: "underline" }}>
							{user ? user.email : ""}
						</span>{" "}
					</div>
				</div>
			</div>
			{!submited ? (
				<div className="order-contact-form">
					<h2>Delivery Information</h2>
					<div className="contact-info">
						<div className="address-container">
							<div
								className="address-box-add"
								onClick={() => setAddContactActive(!addContactActive)}>
								<AddIcon className="add-icon" />
								<p>Add Address</p>
							</div>
							{contacts.map((contact, i) => (
								<AddressItem
									contantIfo={contact}
									id={contact.id}
									key={i}
									select={hangleSelectedAddress}
									active={selectedAdress}
								/>
							))}
						</div>
					</div>

					{addContactActive ? (
						<AddressForm
							// toggle={setAddContactActive(!addContactActive)}
							active={addContactActive}
						/>
					) : (
						""
					)}
					{contacts.length <= 0 ? (
						<div className="no-adress">
							<p>Delivery Information is missing, please enter an Address</p>
						</div>
					) : (
						""
					)}

					{!addContactActive && contacts.length > 0 ? (
						<form onSubmit={handlePurchase}>
							<div className="subtotal-Order">
								<div className="subtotal-text" style={{ marginTop: "50px" }}>
									<p>
										Total
										<span>
											({basket.length !== 0 ? getTotalProducs(basket) : 0}{" "}
											items) :{" "}
										</span>
										<CurrencyFormat
											fixedDecimalScale={true}
											value={basket.length !== 0 ? getBasketTotal(basket) : 0}
											decimalScale={2}
											displayType={"text"}
											thousandSeparator={true}
											prefix={"€"}
											renderText={(value) => (
												<span className="subtotal-value">{value}</span>
											)}
										/>
									</p>
									<div className="subtotal-checkout-offer">
										<div className="checkbox-container">
											<input
												type="checkbox"
												onChange={() => setPresent(!present)}
											/>
											<p>This order contains a Gift</p>
										</div>
										<div className="gift-details">
											{present ? (
												<textarea
													className="gift-details-textarea"
													name="giftDetails"
													id="giftDetails"
													rows="3"
													onChange={(e) => setPresentNote(e.target.value)}
												/>
											) : (
												""
											)}
										</div>
									</div>
								</div>
							</div>

							<div
								className="subtotal-checkout-btn-order"
								style={{ marginTop: "100px" }}>
								<button className="checkout-btn" type="submit" value="Submit">
									Complete Purchase
								</button>
							</div>
							<div>{errorMessage}</div>
						</form>
					) : (
						""
					)}
				</div>
			) : purchase[purchase.length - 1] ? (
				<div className="form-submited">
					<p>
						Your order with ID:
						<span> {purchase[purchase.length - 1].purchaseID} </span>, was
						placed. Please visit Returns & Orders for more details.
					</p>
				</div>
			) : (
				"..."
			)}
		</div>
	);
};

export default Order;
