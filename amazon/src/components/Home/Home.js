import "./Home.scss";
import Product from "../Product/Product";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import products from "./../../products";
import { useStateValue } from "../../StateProvider";

// carousell img
//https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg
//https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg
//https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg
//https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg

function Home() {
	// eslint-disable-next-line no-unused-vars
	const [{ search }, dispatch] = useStateValue(products);

	return (
		<div className="home">
			<div className="home-carousel">
				<Carousel
					autoPlay={true}
					infiniteLoop={true}
					interval={4000}
					showStatus={false}
					showThumbs={false}
					swipeable={true}>
					<div>
						<img
							className="home-carousel-img"
							src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="home-carousel-img"
							src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="home-carousel-img"
							src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
							alt=""
						/>
					</div>
					<div>
						<img
							className="home-carousel-img"
							src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg
"
							alt=""
						/>
					</div>
				</Carousel>
			</div>

			<div className="home-items-container">
				<div className="home-items-row">
					{search
						? search.map((product) => (
								<Product
									key={product.id}
									id={product.id}
									title={product.title}
									price={product.price}
									image={product.image}
									rating={product.rating}
								/>
						  ))
						: ""}
				</div>
			</div>
		</div>
	);
}

export default Home;
