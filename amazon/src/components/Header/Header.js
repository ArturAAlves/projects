import "./Header.scss";
import AmazonLogo from "./img/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import { getTotalProducs } from "../../reducer";
import DropDown from "../DropDown/DropDown";
import products from "../../products";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Header() {
	let history = useHistory();

	// eslint-disable-next-line no-unused-vars
	const [{ basket, user }, dispatch] = useStateValue();
	const [searchInput, setSearchInput] = useState("");
	const [searched, setSearched] = useState(products);

	function scrollTop() {
		window.scrollTo(0, 0);
	}

	const handleAuthentication = (e) => {
		if (user) {
			auth.signOut();
		}
	};

	const hadleSubmit = (e) => {
		if (history.location.pathname !== "/") {
			history.push("/");
		}
		setSearchInput("");
		if (searchInput === "Your search is empty" || !searchInput) {
			setSearchInput("Your search is empty");
			setSearched(products);
			setTimeout(() => {
				setSearchInput("");
			}, 2000);
		} else if (searchInput) {
			e.preventDefault();
			let value = searchInput.toLowerCase();
			let result = products.filter((product) => {
				let tittle = product.title.toLowerCase();
				let avaluate = tittle.search(value);
				return avaluate >= 0;
			}, []);
			if (result.length === 0) {
				setSearchInput("No item was found");
				setSearched((e) => (e = products));
				setTimeout(() => {
					setSearchInput("");
				}, 2000);
			} else {
				setSearched((e) => (e = result));
				setSearchInput("");
			}
		}
	};

	const handleReset = () => {
		setSearched((e) => (e = products));
	};

	useEffect(() => {
		dispatch({
			type: "SET_SEARCH",
			products: searched,
		});
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searched]);

	return (
		<div className="header" onClick={() => scrollTop()}>
			<Link to="./" onClick={handleReset}>
				<img alt="amazon-logo" className="header-logo" src={AmazonLogo} />
			</Link>

			<form className="header-search" onSubmit={hadleSubmit}>
				<input
					className="header-search-input"
					type="text"
					onChange={(e) => setSearchInput(e.target.value)}
					value={searchInput}
				/>
				<button type="submit">
					<SearchIcon className="header-search-icon" />
				</button>
			</form>

			<div className="header-nav">
				<div className="header-nav-option">
					{/* onClick={handleAuthentication} */}
					<span className="header-option-topLine">
						hello {user ? user.email.split("@")[0] : ""}{" "}
					</span>
					<span className="header-option-botLine">
						{!user ? (
							<Link to="./login">
								<DropDown name={!user ? "Login" : "My account"} />
							</Link>
						) : (
							<DropDown
								name={!user ? "Login" : "My account"}
								items={[
									{ item: "profile", to: "./profile" },
									user
										? {
												item: "Log Out",
												to: "./",
												action: handleAuthentication,
										  }
										: "",
								]}
							/>
						)}
					</span>
				</div>
				<Link to={!user ? "./login" : "./returns&orders"}>
					<div className="header-nav-option text-disabled">
						<span className="header-option-topLine">Returns</span>
						<span className="header-option-botLine">& Orders</span>
					</div>
				</Link>

				{/* {user ? (
					<div className="header-nav-option text-disabled">
						<span className="header-option-topLine">Your</span>
						<span className="header-option-botLine">Prime</span>
					</div>
				) : (
					""
				)} */}

				<Link to="./checkout" onClick={() => scrollTop()}>
					<div className="header-nav-cart">
						<ShoppingBasketIcon className="nav-cart-icon" />
						<span className="nav-cart">
							{basket ? getTotalProducs(basket) : ""}
						</span>
					</div>
				</Link>
			</div>
			<div className></div>
		</div>
	);
}

export default Header;
