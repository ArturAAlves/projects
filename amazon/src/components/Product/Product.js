import React from "react";
import "./Product .scss";
import { useStateValue } from "../../StateProvider";
import Rating from "@material-ui/lab/Rating";

const Product = ({ id, title, image, price, rating, qty }) => {
	const [basket, dispatch] = useStateValue(); // eslint-disable-line
	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
				qty: 1,
			},
		});
	};
	return (
		<div className="product">
			<div className="product-info">
				<div className="product-title">
					<h5>{title}</h5>
				</div>

				{price ? (
					<div className="product-price">
						<small>€</small>
						<p>{price}</p>
					</div>
				) : (
					"Loading.."
				)}
			</div>
			<div className="product-img">
				{image ? <img src={image} alt={title} /> : ""}
			</div>
			{rating ? (
				<div className="product-rating">
					<Rating
						name="half-rating-read"
						defaultValue={rating}
						precision={0.5}
						readOnly
					/>
				</div>
			) : (
				"Loading.."
			)}
			<div className="product-btn-container">
				<button onClick={addToBasket} type="button" className="product-btn">
					Add to Basket
				</button>
			</div>
		</div>
	);
};

export default Product;
