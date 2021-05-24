import React from "react";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../StateProvider";

const AvatarImg = () => {
	const [{ user }, dispach] = useStateValue();

	return (
		<>
			<Avatar
				style={{ margin: "0 10px" }}
				alt={user.displayName}
				src={user.photoURL}
			/>
		</>
	);
};

export default AvatarImg;
