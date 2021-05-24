import "./ReturnsAndOrders";
import { useStateValue } from "../../StateProvider";
import Paypal from "./img/paypal.png";
import MasterCard from "./img/mastercard.png";
import Visa from "./img/visa.png";
import "./ReturnsAndOrders.scss";
import { Link } from "react-router-dom";

const ReturnsAndOrders = () => {
	const [{ purchase, contats, total }, dispatch] = useStateValue(); // eslint-disable-line

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

	return (
		<div className="orders-and-returns">
			<div className="orders-container">
				{purchase.length <= 0 ? (
					<div className="shoppingCart-empty">
						<img
							src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
							alt="empty shopping cart"
						/>
						<div className="shoppingCart-hero">
							<h3>You dont have any orders.</h3>
							<Link to="./">
								<p>Shop today's deals</p>
							</Link>
						</div>
					</div>
				) : (
					<h3 style={{ marginBottom: "15px", fontSize: "26px" }}>You Orders</h3>
				)}

				{purchase.map((order) => (
					<div className="order-container" key={order.purchaseID}>
						<div className="order-info">
							<div className="order-id">
								<p>
									<span>Order ID </span>: {order.purchaseID}
								</p>
								<div></div>
							</div>

							<div className="order-date">
								<p className="order-tittle">Order Date</p>
								{/* <p>{order.date}</p> */}
								<p> {order.date ? order.date : ""}</p>
							</div>

							<div className="order-value">
								<p className="order-tittle">Value</p>
								<p>€450</p>
							</div>

							<div className="order-contact-info">
								<p className="order-tittle">Sent To</p>
								<p>{order.address[0].name}</p>
								<p>{order.address[0].address}</p>
								<p>
									{order.address[0].city}, {order.address[0].postal}
								</p>

								<p>{order.address[0].phone}</p>
							</div>
							<div className="order-payment-info">
								<div className="order-payment-tittle order-tittle">
									Payment Info
								</div>
								<div className="order-payment-type">
									<img
										src={imgSelector(order.address[0].method)}
										alt={order.address[0].method}
									/>
									<ul>
										<li>
											<span>Card:</span> {order.address[0].cardN}
										</li>
										<li>
											<span>Year:</span> {order.address[0].expiration}
										</li>
										<li>
											<span>Code:</span> {order.address[0].CVC}
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="order-product-info">
							<div className="order-item-list">
								{order.basket.map((item, i, itemArray) => (
									<div className="order-item" key={i}>
										<div className="order-item-info-container">
											<div className="order-item-img">
												<img src={item.image} alt={item.title} />
											</div>
											<div className="order-item-info">
												<p className="order-item-info-tittle">{item.title}</p>
												<div style={{ marginTop: "5px" }}>
													<p>
														<span>Price:</span> €{item.price}
													</p>
													<p>
														<span>Qty:</span> {item.qty}
													</p>
												</div>
											</div>
										</div>
										{itemArray.length === i + 1 ? (
											""
										) : (
											<div className="order-item-division"></div>
										)}
									</div>
								))}
							</div>

							{order.presentNote ? (
								<div className="order-note">
									<p>
										<span>Delivery Note</span> : {order.presentNote}
									</p>
								</div>
							) : (
								""
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ReturnsAndOrders;
