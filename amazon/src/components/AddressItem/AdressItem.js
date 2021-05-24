import React from "react";
import "./AdressItem.scss";
import Paypal from "./img/paypal.png";
import MasterCard from "./img/mastercard.png";
import Visa from "./img/visa.png";
import { useStateValue } from "../../StateProvider";

const AddressItem = ({ contantIfo, id, select, active }) => {
	// eslint-disable-next-line no-unused-vars
	const [{ contacts }, dispatch] = useStateValue();

	function imgSelector(img) {
		switch (img) {
			case "Paypal":
				return Paypal;

			case "MasterCard":
				return MasterCard;

			case "VISA":
				return Visa;

			default:
				break;
		}
	}
	const handleRemove = (e) => {
		dispatch({
			type: "REMOVE_CONTACT",
			contactID: id,
		});
	};
	const handleBoxSelection = (e) => {
		e.stopPropagation();
		select(e.currentTarget.id);
	};

	return (
		<div
			id={id}
			onClick={(e) => handleBoxSelection(e)}
			className={
				active === id ? " address-box address-box-selected" : "address-box"
			}>
			<div className="address">
				<p className="bold">{contantIfo.name}</p>
				<p>{contantIfo.address}</p>
				<p>
					{contantIfo.city}, {contantIfo.postal}
				</p>

				<p>{contantIfo.phone}</p>
			</div>
			<div className="payment">
				<p>Payment Info</p>
				<div className="payment-type-container">
					<div className="payment-type">
						<img src={imgSelector(contantIfo.method)} alt={contantIfo.method} />
					</div>
					<div>
						<ul>
							<li>
								<span>Card:</span> {contantIfo.cardN}
							</li>
							<li>
								<span>Date</span> {contantIfo.expiration}
							</li>
							<li>
								<span>CVC:</span> {contantIfo.CVC}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="remove" onClick={handleRemove}>
				<p>Remove</p>
			</div>
		</div>
	);
};

export default AddressItem;
