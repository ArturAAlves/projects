import { Avatar } from "@material-ui/core";
import React from "react";
import "./story.scss";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
const Story = ({ id, tittle, img, profileImg }) => {
	return (
		<div className="story">
			<AddCircleOutlineIcon className="story-add" />
			<img src={img} alt="" className="story-img" />
			<div className="story-avatar-container">
				<Avatar src={profileImg} alt={tittle} />
			</div>
			<div className="story-tittle-container">
				<h4>{tittle}</h4>
			</div>
		</div>
	);
};

export default Story;
