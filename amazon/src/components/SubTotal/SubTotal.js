import React from "react";
import "./SubTotal.scss";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { getTotalProducs } from "../../reducer";
import { Link } from "react-router-dom";

const Subtotal = () => {
	// eslint-disable-next-line no-unused-vars
	const [{ basket, user }, dispatch] = useStateValue();
	return (
		<div className="subtotal">
			<div className="subtotal-text">
				<p>
					Subtotal
					<span>
						{" "}
						({basket.length !== 0 ? getTotalProducs(basket) : 0} items) :{" "}
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
			</div>

			<div className="subtotal-checkout-btn">
				<Link to={user ? "./order" : "./login"}>
					<button className="checkout-btn" type="button">
						Proceed to Checkout
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Subtotal;
