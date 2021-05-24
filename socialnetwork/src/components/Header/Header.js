import React, { useEffect, useState } from "react";
import "./header.scss";
// import SearchIcon from "@material-ui/icons/Search";
// import HomeIcon from "@material-ui/icons/Home";
// import FlagIcon from "@material-ui/icons/Flag";
// import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
// import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
// import StorefrontIcon from "@material-ui/icons/Storefront";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
// import ForumIcon from "@material-ui/icons/Forum";
import AddIcon from "@material-ui/icons/Add";
import { useStateValue } from "../../StateProvider";
// import { getAuth, signOut } from "firebase/auth";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { auth } from "../../firebase";
import AvatarImg from "../../Elements/AvatarImg";
import { Link } from "react-router-dom";

const Header = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [feedOpen, setFeedOpen] = useState(true);

	// eslint-disable-next-line no-unused-vars
	const [{ user }, dispach] = useStateValue();
	const hadleLogout = () => {
		auth.signOut();
	};

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	const handleFeed = () => {
		setFeedOpen((e) => (e = !e));
	};

	return (
		<div className="header">
			{width <= 1450 ? (
				<div className="header-left">
					<>
						{feedOpen ? (
							<Link to="./feed" onClick={handleFeed}>
								<div>
									<h4>Feed</h4>
								</div>
							</Link>
						) : (
							<Link to="./" onClick={handleFeed}>
								<div>
									<h4>Main</h4>
								</div>
							</Link>
						)}
					</>
				</div>
			) : (
				""
			)}

			<div className="header-right">
				<Link to="/">
					<div className="header-info">
						<h4>{user.displayName ? user.displayName : user.email}</h4>
						<IconButton color="primary">
							<ExpandMoreIcon />
						</IconButton>
						<AvatarImg />
					</div>
				</Link>
				<div className="header-right-options">
					{width >= 600 ? (
						<>
							<IconButton color="primary">
								<NotificationsActiveIcon />
							</IconButton>
							<IconButton color="primary">
								<AddIcon />
							</IconButton>
						</>
					) : (
						""
					)}

					<IconButton color="primary">
						<ExitToAppIcon onClick={hadleLogout} className="signout-button" />
					</IconButton>
				</div>
			</div>
		</div>
	);
};
export default Header;
