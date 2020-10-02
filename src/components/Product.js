import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, image, price, rating }) => {
	const [{ basket }, dispatch] = useStateValue();
	console.log(basket);
	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id,
				title,
				image,
				price,
				rating,
			},
		});
	};
	return (
		<div className="product">
			<div className="product-info">
				<p>{title}</p>

				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_) => (
							<StarIcon className="product__ratingStar" />
						))}
				</div>
				<p className="product__price">
					<small className="pr-1">₹</small>
					<strong>{price}</strong>
				</p>
			</div>

			<img alt="" src={image} />
			<button onClick={addToBasket}>Add to cart</button>
		</div>
	);
};

export default Product;
