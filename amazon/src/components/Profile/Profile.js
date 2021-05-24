import React, { useEffect, useState } from "react";
import "./Profile.scss";
import { useStateValue } from "../../StateProvider";
import AddressForm from "./../AddressForm/AddressForm";
import AddIcon from "@material-ui/icons/Add";
import AddressItem from "./../AddressItem/AdressItem";

//line 355

const Profile = () => {
	// eslint-disable-next-line no-unused-vars
	const [{ user, contacts }, dispatch] = useStateValue();

	// eslint-disable-next-line no-unused-vars
	const [submited, setSubmited] = useState(false);
	const [selectedAdress, setSelectedAdress] = useState("");
	const [addContactActive, setAddContactActive] = useState(false);

	//Purchase

	const hangleSelectedAddress = (e) => {
		setSelectedAdress(e);
		// console.log("order,console", e);
	};

	useEffect(() => {
		setTimeout(() => {
			if (!user) {
				// window.open(
				// 	"https://www.arturalves.com/projects/amazonclone/",
				// 	"_self"
				// );
			}
		}, 1000);
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
							User : {user ? user.email : ""}
						</span>{" "}
					</div>
					<br />
					<div>
						<p>
							The information is limited since the registration is processed
							through
							<a href="https://firebase.google.com/" alt="firebase">
								{" "}
								Firebase
							</a>
						</p>
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
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Profile;
