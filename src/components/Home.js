import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt="amazon banner"
				/>

				<div className="home__row">
					<Product
						id={1}
						key={1}
						title="Judgment Detox: Release the Beliefs That Hold You Back from Living A Better Life Hardcover – Import, 2 January 2018"
						price={470}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/9165UMtVa5L.jpg"
					/>

					<Product
						id={2}
						key={2}
						title="Skybags Rubik Polyester 68 Cms Blue Softsided Check-in Luggage & Skybags Sonic 49 Ltrs Green Rucksack (Sonic)"
						price={2170}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/A1t6TYjGEHL._SL1500_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id={3}
						key={3}
						title="AMD Ryzen 5 3600 Desktop Processor 6 Cores up to 4.2 GHz 35MB Cache AM4 Socket (100-000000031)"
						price={17282}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._SL1384_.jpg"
					/>
					<Product
						id={4}
						key={4}
						title="TIED RIBBONS Mosaic Glass Tealight Candle Holders(Pack of 2) - Christmas Lights Decoration - Tealight Candle Holders, Parties and Home Decor"
						price={599}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/81xleJHagSL._SL1500_.jpg"
					/>
					<Product
						id={5}
						key={5}
						title="Redmi Note 9 Pro Max (Interstellar Black, 6GB RAM, 64GB Storage) - 64MP Quad Camera & Latest 8nm Snapdragon 720G"
						price={19480}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/815qFLtOfXL._SL1500_.jpg"
					/>
					<Product
						id={6}
						key={6}
						title="ASIAN Men's Hummer-06 Sports Latest Casual Sneakers,Lace up Lightweight Shoes for Running, Walking, Gym"
						price={1679}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/817HPcqSO0L._UL1500_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id={7}
						title="LG 195 cms (77 inches) 4K Ultra HD Smart OLED TV OLED77C9PTA | With Built-in Alexa (Dark Meteo Titanium) (2019 Model)"
						price={10599}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/81cB6pJsTaL._SL1500_.jpg"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
