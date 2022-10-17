import React from "react";
import styled from "styled-components";
import FirstView from "./Components/FirstView";
import NavBar from "./Components/NavBar";
import Products from "./Components/Products";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import ProductImage1 from "./Assets/img/product-image-1.jpg";
import ProductDetail1 from "./Assets/img/detail-product-umbrella.png";
import ProductImage2 from "./Assets/img/product-image-2.jpg";
import ProductDetail2 from "./Assets/img/detail-product-puff.png";
import ProductImage3 from "./Assets/img/product-image-3.jpg";
import ProductDetail3 from "./Assets/img/detail-product-cart.png";
import ProductImage4 from "./Assets/img/product-image-4.jpg";
import ProductDetail4 from "./Assets/img/detail-product-pillow.png";
import ImageIg1 from "./Assets/img/image-ig-1.jpg";
import ImageIg5 from "./Assets/img/image-ig-2.jpg";
import ImageIg3 from "./Assets/img/image-ig-3.jpg";
import ImageIg4 from "./Assets/img/image-ig-4.jpg";
import ImageIg2 from "./Assets/img/image-ig-5.jpg";
import ImageIg6 from "./Assets/img/image-ig-6.jpg";

const InstagramCont = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h4 {
		margin: 5% 0% 0% 0%;
		color: #adadad;
		font-size: 1.2rem;
		font-weight: 400;
	}
	h2 {
		margin: 0% 0% 3% 0%;
		font-size: 3rem;
		font-weight: 400;
	}
	.InstagramImgList {
		display: flex;
		flex-wrap: wrap;
		width: 45%;

		.itemList {
			list-style-type: none;
			width: 32%;
			height: 50%;
			margin-left: 0.5%;
			:hover {
				opacity: 50%;
				transition: 0.5s;
				cursor: pointer;
			}
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
`;

function App() {
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<main>
				<FirstView />
				<Products
					image1={ProductImage1}
					image2={ProductDetail1}
					name={"Pufi RAIN"}
					position={"left"}
				/>
				<Products
					image1={ProductImage2}
					image2={ProductDetail2}
					name={"Pufi PUFF"}
					position={"right"}
				/>
				<Products
					image1={ProductImage3}
					image2={ProductDetail3}
					name={"Pufi CART"}
					position={"left"}
				/>
				<Products
					image1={ProductImage4}
					image2={ProductDetail4}
					name={"Pufi NAP"}
					position={"right"}
				/>
				<InstagramCont>
					<h4>INSTAGRAM</h4>
					<h2>#ESPUFI</h2>
					<ul className="InstagramImgList">
						<li className="itemList">
							<img src={ImageIg1} alt="" />
						</li>
						<li className="itemList">
							<img src={ImageIg2} alt="" />
						</li>
						<li className="itemList">
							<img src={ImageIg3} alt="" />
						</li>
						<li className="itemList">
							<img src={ImageIg4} alt="" />
						</li>
						<li className="itemList">
							<img src={ImageIg5} alt="" />
						</li>
						<li className="itemList">
							<img src={ImageIg6} alt="" />
						</li>
					</ul>
				</InstagramCont>
				<NewsLetter />
			</main>
			<Footer />
		</div>
	);
}

export default App;

