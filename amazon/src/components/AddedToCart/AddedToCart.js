import "./AddedToCart.scss";
import { useStateValue } from "../../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { useEffect, useState } from "react";
import CheckIcon from "@material-ui/icons/Check";
// import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import { Link } from "react-router-dom";
import { getTotalProducs } from "../../reducer";

let initial;

const AddedToCart = ({ id, title, image, rating, price }) => {
	// eslint-disable-next-line no-unused-vars
	const [{ basket }, dispatch] = useStateValue();
	const [itemDisplay, setItemDisplay] = useState("");
	const [loaded, setLoaded] = useState(false);

	function removeItemDisplay() {
		setLoaded(true);
		initial = window.setTimeout(function () {
			setItemDisplay("");
		}, 5000);
	}

	useEffect(() => {
		clearTimeout(initial);
		removeItemDisplay();

		if (loaded) {
			setItemDisplay(basket);
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [basket]);

	return itemDisplay.length > 0 ? (
		<div className="addedToCart">
			<div className="addedToCart-img-container">
				<div className="addedToCart-check">
					<span>
						{" "}
						<CheckIcon />
					</span>
				</div>
				<Link to="./checkout">
					<div className="addedToCart-img">
						<img
							alt={title}
							src={
								itemDisplay.length > 0
									? itemDisplay[itemDisplay.length - 1].image
									: ""
							}
						/>
					</div>
				</Link>
				<div className="addedToCart-success">
					<p>Added to Cart</p>
				</div>
			</div>
			<div className="addedToCart-description-container">
				<div className="addedToCart-description">
					<div className="addedToCart-description-top">
						{basket.length > 0 ? (
							<div className="addedToCart-description-value">
								<p>
									<span>Cart subtotal</span> ({getTotalProducs(basket)} Item):
									<CurrencyFormat
										fixedDecimalScale={true}
										value={getBasketTotal(basket)}
										decimalScale={2}
										displayType={"text"}
										thousandSeparator={true}
										prefix={"€"}
										renderText={(value) => (
											<span className="addedToCart-description-subtotal-value">
												{value}
											</span>
										)}
									/>
								</p>
							</div>
						) : (
							""
						)}
					</div>

					{/* <div className="addedToCart-description-bottom">
						<input type="checkbox" name="" id="" disabled />

						<p>
							<span>
								<CardGiftcardIcon />
							</span>{" "}
							This is a gift
						</p>
					</div> */}
				</div>
				<div className="addedToCart-description-buttons">
					<Link to="./checkout">
						<button type="button" className="addedToCart-cart">
							Cart
						</button>
					</Link>

					<Link to="./checkout">
						<button type="button" className="addedToCart-checkout">
							Proceed to checkout ({getTotalProducs(basket)})
						</button>
					</Link>
				</div>
			</div>
			{/* <div className="addedToCart-close">
                    <button type="button">X</button>
                </div> */}
		</div>
	) : (
		""
	);
};

export default AddedToCart;
