import React from "react";
import "./footer.scss";
import amazonLogo from "./img/amazon-logo.png";

const footer = () => {
	function scrollTop() {
		window.scrollTo(0, 0);
	}

	return (
		<div className="footer">
			<div className="footer-back-top" onClick={scrollTop}>
				<p>Back to top</p>
			</div>
			<div className="footer-info">
				<div className="footer-info-us">
					<h3> Get to Know Us</h3>
					<ul>
						<li>Careers</li>
						<li>Blog</li>
						<li>About Amazon</li>
						<li>Investor Relations</li>
						<li>Amazon Devices</li>
						<li>Amazon Tours</li>
					</ul>
				</div>
				<div className="footer-info-money">
					<h3> Make Money with Us</h3>
					<ul>
						<li>Sell products on Amazon</li>
						<li>Sell on Amazon Business</li>
						<li>Sell apps on Amazon</li>
						<li>Become an Affiliate</li>
						<li>Advertise Your Products</li>
						<li>Self-Publish with Us</li>
						<li>Host an Amazon Hub</li>
						<li>
							<span>›</span> See More Make Money with Us
						</li>
					</ul>
				</div>
				<div className="footer-info-payment">
					<h3> Make Money with Us</h3>
					<ul>
						<li>Amazon Business Card</li>
						<li>Shop with Points</li>
						<li>Reload Your Balance</li>
						<li>Amazon Currency Converter</li>
					</ul>
				</div>
				<div className="footer-info-help">
					<h3> Let Us Help You</h3>
					<ul>
						<li>Amazon and COVID-19</li>
						<li>Your Account</li>
						<li>Shipping Rates & Policies</li>
						<li>Returns & Replacements</li>
						<li>Manage Your Content and Devices</li>
						<li>Amazon Assistant</li>
						<li>Help</li>
					</ul>
				</div>
			</div>
			<div className="footer-line" />
			<div className="footer-bottom">
				<div className="footer-bottom-logo">
					<img alt="amazon" src={amazonLogo} onClick={scrollTop} />
				</div>
			</div>
		</div>
	);
};

export default footer;
