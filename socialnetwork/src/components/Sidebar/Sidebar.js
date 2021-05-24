import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Patrocinio from "./Patrocinio.js";
import News from "./News";

const Sidebar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const handleOpen = () => {
		setSidebarOpen((e) => (e = !e));
	};

	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	const patrocinios = [
		{
			imgLink: "https://arturalves.com/img/perifericos/laptop-full.png",
			name: "Portfolio Website",
			link: "arturalves.com",
			linkName: "arturalves.com",
		},
		{
			imgLink:
				"https://quatrorodas.abril.com.br/wp-content/uploads/2021/01/Tesla-Model-S-2021-5.jpeg?quality=70&strip=info",
			name: "Tesla New car",
			link: "tesla.com/",
			linkName: "tesla.com",
		},
		{
			imgLink:
				"https://cdn.pocket-lint.com/r/s/1200x/assets/images/154194-phones-review-google-pixel-5-review-image11-ojvazm1fhy.JPG",
			name: "Realme Watch 2",
			link: "gsmarena.com/realme_watch_2_pro_specs_price_sale_date-news-49216.php",
			linkName: "GSMArena.com",
		},
	];

	const news = [
		{
			imgLink: "https://arturalves.com/img/perifericos/laptop-full.png",
			name: "Portfolio Website",
			link: "arturalves.com",
			linkName: "arturalves.com",
		},

		{
			imgLink:
				"https://quatrorodas.abril.com.br/wp-content/uploads/2021/01/Tesla-Model-S-2021-5.jpeg?quality=70&strip=info",
			name: "So good, so eletric!",
			link: "tesla.com/",
			linkName: "tesla.com",
		},
		{
			imgLink:
				"https://fdn.gsmarena.com/imgroot/news/21/05/realme-watch-2-pro-official/-1200/gsmarena_002.jpg",
			name: "Realme Watch 2",
			link: "gsmarena.com/realme_watch_2_pro_specs_price_sale_date-news-49216.php",
			linkName: "GSMArena.com",
		},
	];

	return (
		<div className={!sidebarOpen ? "sidebar " : "sidebar  sidebar-open"}>
			{width <= 1100 ? (
				<div className="open-sidebar" onClick={handleOpen}>
					{!sidebarOpen ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
				</div>
			) : (
				""
			)}
			<h3>Advertisement</h3>
			{patrocinios.map((item, i) => (
				<Patrocinio
					imgLink={item.imgLink}
					name={item.name}
					link={item.link}
					key={i}
					linkName={item.linkName}
				/>
			))}
			<h3 style={{ marginTop: "50px" }}>News</h3>
			{news.map((item, i) => (
				<News
					imgLink={item.imgLink}
					name={item.name}
					link={item.link}
					key={i}
					linkName={item.linkName}
				/>
			))}
		</div>
	);
};

export default Sidebar;
