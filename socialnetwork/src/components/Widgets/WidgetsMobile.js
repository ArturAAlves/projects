import React, { useEffect, useState } from "react";
import "./widgets.scss";
import Embed from "./Embed";
const WidgetsMobile = () => {
	const [width, setWidth] = useState(window.innerWidth);

	let embeeds = [
		{
			type: "embed",
			title: "Artur Alves Portfolio",
			url: "https://www.arturalves.com/#projetos-websites",
			height: 400,
			link: "arturalves.com",
		},
		{
			type: "iframe",
			title: "Just a Crab Dancing",
			url: "https://www.youtube.com/embed/LDU_Txk06tM",
			height: "",
			link: "youtube.com/watch?v=LDU_Txk06tM",
		},
		{
			type: "iframe",
			title: "Linked In Post",
			url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6797818690164396032",
			height: 400,
			link: "linkedin.com/in/arturaalves/",
		},
	];
	// const handleOpen = () => {
	// 	setSidebarOpen((e) => (e = !e));
	// };

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	return (
		<div className="widgetsMobile">
			<div className="widgets-tittle">
				<h3>Feed</h3>
			</div>
			{embeeds.map((item, i) => {
				return (
					<Embed
						title={item.title}
						type={item.type}
						embedUrl={item.url}
						key={i}
						height={item.height}
						link={item.link}
					/>
				);
			})}
		</div>
	);
};

export default WidgetsMobile;
