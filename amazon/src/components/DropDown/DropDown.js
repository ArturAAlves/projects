import React, { useState } from "react";
import "./DropDown copy.scss";
import { Link } from "react-router-dom";

const DropDown = ({ name, items }) => {
	const [open, setOpen] = useState(false);
	// const [selection, setselection] = useState([])
	const handleClick = () => {
		setOpen(!open);
	};

	const handleLeave = () => {
		setTimeout(() => {
			setOpen(false);
		}, 400);
	};

	const teste = () => {
		return items.map((item) => (
			<Link to={item.to} onClick={item.action} key={item.item}>
				<li className="dd-sub-items">{item.item}</li>
			</Link>
		));
	};

	return (
		<div className="dd-wrapper" onClick={handleClick}>
			<div className="dd-name">{name}</div>
			{open ? (
				<ul className="dd-container" onMouseLeave={handleLeave}>
					{items ? teste() : ""}
				</ul>
			) : (
				""
			)}
		</div>
	);
};

export default DropDown;
