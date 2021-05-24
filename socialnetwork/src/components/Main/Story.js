import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./story.scss";
const Story = ({ id, message, image, profilePic }) => {
	const [maximized, setMaximized] = useState(false);

	// const handleClick = () => {
	// 	setMaximized((e) => (e = !e));
	// };
	return (
		<div className="story">
			<img
				src={image}
				alt=""
				className={maximized ? "story-img-large" : "story-img"}
			/>
			<div className="story-avatar-container">
				<Avatar src={profilePic} alt="" />
			</div>
			<div className="story-tittle-container">
				<h4>{message}</h4>
			</div>
		</div>
	);
};

export default Story;
