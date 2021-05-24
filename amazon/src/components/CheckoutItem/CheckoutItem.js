import React, { useEffect, useState } from "react";
import "./CheckoutItem.scss";
import { useStateValue } from "../../StateProvider";
import Rating from "@material-ui/lab/Rating";

const ShoppingCartItems = ({ id, title, image, rating, price, qty }) => {
	// eslint-disable-next-line no-unused-vars
	const [{ basket }, dispatch] = useStateValue();
	const [itemQty, setItemQty] = useState("");
	function scrollTop() {
		window.scrollTo(0, 0);
	}

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	useEffect(() => {
		scrollTop();
		return () => {};
	}, []);

	const handleChange = (e) => {
		setItemQty(parseInt(e.target.value));
		if (e.target.value === "0") {
			removeFromBasket();
		}

		dispatch({
			type: "QTY_FROM_BASKET",
			id: id,
			qty: e.target.value,
		});
	};

	return (
		<div className="CheckoutItem">
			<div className="CheckoutItem-info">
				<div className="CheckoutItem-img">
					<img alt={title} src={image} />
				</div>
				<div className="CheckoutItem-description">
					<div className="checkoutItem-title">
						<p>{title}</p>
					</div>
					<Rating
						name="half-rating-read"
						defaultValue={rating}
						precision={0.5}
						readOnly
						size="small"
					/>
					<div className="checkoutItem-qty">
						{itemQty < 10 ? (
							<select onChange={handleChange} value={qty}>
								<option value="0">(0) Delete </option>
								<option value="1"> 1</option>
								<option value="2"> 2</option>
								<option value="3"> 3</option>
								<option value="4"> 4</option>
								<option value="5"> 5</option>
								<option value="6"> 6</option>
								<option value="7"> 7</option>
								<option value="8"> 8</option>
								<option value="9"> 9</option>
								<option value="10"> 10+</option>
							</select>
						) : (
							<input type="number" value={itemQty} onChange={handleChange} />
						)}
					</div>
					<div className="checkoutItem-remove">
						<button type="button" onClick={removeFromBasket}>
							Delete
						</button>
					</div>
				</div>
				<div className="CheckoutItem-price">
					<span>€{price}</span>
				</div>
			</div>

			<div className="checkoutItem-line"></div>
		</div>
	);
};

export default ShoppingCartItems;
