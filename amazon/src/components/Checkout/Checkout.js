import React from "react";
import "./Checkout.scss";
import SubTotal from "../SubTotal/SubTotal";
import { useStateValue } from "../../StateProvider";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import { getBasketTotal } from "../../reducer";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { getTotalProducs } from "../../reducer";

const Checkout = () => {
	const [{ basket, user }, dispatch] = useStateValue();

	const handleClear = () => {
		dispatch({
			type: "CLEAR_BASKET",
		});
	};

	return (
		<div className="checkout">
			<div className="checkout-left">
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
				{basket.length !== 0 ? (
					<div className="CheckoutCart">
						{user ? (
							<Link to="./profile">
								<h3>
									Hello{" "}
									<span style={{ textTransform: "capitalize" }}>
										{user ? user.email.split("@")[0] : ""}
									</span>{" "}
								</h3>
							</Link>
						) : (
							""
						)}
						<h2>Shopping Cart</h2>
						<div className="CheckoutCart-clearCart" onClick={handleClear}>
							Clear Cart
						</div>
						{/* <p>Slect all the Items</p> */}
						<div className="CheckoutCart-line">
							<span>Price</span>
						</div>
						<div className="CheckoutCart-items">
							{basket &&
								basket.map((item) => {
									return <CheckoutItem {...item} key={item.id} />;
								})}
						</div>
						{basket.length !== 0 ? (
							<div className="checkout-value">
								<p>
									Subtotal ({getTotalProducs(basket)} Item):
									<CurrencyFormat
										fixedDecimalScale={true}
										value={getBasketTotal(basket)}
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
						) : (
							""
						)}
					</div>
				) : (
					<div className="shoppingCart-empty">
						<img
							src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
							alt="empty shopping cart"
						/>
						<div className="shoppingCart-hero">
							<h3>Your Amazon Cart is empty</h3>
							<p>Shop today's deals</p>
							{!user ? (
								<div className="shoppingCart-hero-btns">
									<Link to="./login">
										<button className="shoppingCart-btn-signIn" type="button">
											Sign in to your account
										</button>
									</Link>
									<Link to="./login">
										<button className="shoppingCart-btn-signUp" type="button">
											Sign up now
										</button>
									</Link>
								</div>
							) : (
								""
							)}
						</div>
					</div>
				)}
			</div>
			{basket.length !== 0 ? (
				<div className="checkout-right">
					<SubTotal />
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Checkout;
