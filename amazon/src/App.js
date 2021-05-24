import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Footer from "./components/footer/footer";
import AddedToCart from "./components/AddedToCart/AddedToCart";
import "./index.scss";
import Order from "./components/Order/Order";
import ReturnsAndOrders from "./components/ReturnsAndOrders/ReturnsAndOrders";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

// import { HashRouter, Route, Link, Switch } from 'react-router-dom';
// import { createBrowserHistory } from "history";

const App = () => {
	// const history = createBrowserHistory({ forceRefresh: true });
	// let history = useHistory();
	// const location = useLocation();
	// const pathName = location.pathname;
	// console.log(pathName, history, location);

	const [{ basket, contacts, purchase }, dispatch] = useStateValue();
	const [loaded, setLoaded] = useState(true);
	useEffect(() => {
		//Purchase
		const localpurchaseData = localStorage.getItem("purchase");
		if (localpurchaseData && loaded) {
			dispatch({
				type: "SET_PURCHASE",
				purchase: JSON.parse(localStorage.getItem("purchase")),
			});
			setLoaded(false);
		}
		localStorage.setItem("purchase", JSON.stringify(purchase));
	}, [purchase]); // eslint-disable-line

	useEffect(() => {
		//Basket
		const localData = localStorage.getItem("basket");
		if (localData && loaded) {
			dispatch({
				type: "UPDATE_TO_BASKET",
				storage: JSON.parse(localStorage.getItem("basket")),
			});
			setLoaded(false);
		}
		localStorage.setItem("basket", JSON.stringify(basket));
	}, [basket]); // eslint-disable-line

	useEffect(() => {
		//Contacts
		const localContactsData = localStorage.getItem("contacts");
		if (localContactsData && loaded) {
			dispatch({
				type: "SET_CONTACTS",
				contacts: JSON.parse(localStorage.getItem("contacts")),
			});
			setLoaded(false);
		}
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]); // eslint-disable-line

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []); // eslint-disable-line

	// let hist = useHistory;

	// console.log(history);
	// const handleClick = (e) => {
	// 	console.log(e.view.location.pathname);
	// 	history.push(e.view.location.pathname);
	// };
	// const history = createBrowserHistory();
	// console.log("main", history);
	// const handleClick = () => {
	// 	hist().push("./login");
	// };
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/order">
					<Order />
				</Route>
				<Route path="/checkout">
					<Checkout />
				</Route>
				<Route path="/profile">
					<Profile />
				</Route>
				<Route path="/returns&orders">
					<ReturnsAndOrders />
				</Route>
				<Route path="/">
					<AddedToCart />
					<Home />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
