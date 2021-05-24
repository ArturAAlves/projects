import React from "react";
import "./patrocinio.scss";

const Patrocinio = ({ imgLink, name, link, linkName }) => {
	return (
		<a
			className="patrocinio"
			href={`https://${link}`}
			rel="noreferrer"
			target="_blank">
			<div className="patrocinio-left">
				<img src={imgLink} alt={name} />
			</div>
			<div className="patrocinio-right">
				<h5>{name}</h5>
				<p>{linkName}</p>
			</div>
		</a>
	);
};

export default Patrocinio;
