import React from "react";

import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import "./profile.scss";
// import { Link, useHistory } from "react-router-dom";

const Profile = () => {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className="profile">
			<h5>Hello , profile</h5>
			<Link to="./">Move to login</Link>
		</div>
	);
};

export default Profile;
