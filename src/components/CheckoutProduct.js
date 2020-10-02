import React from "react";
import "./CheckoutProuct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
	const [{}, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	return (
		<div className="checkoutProduct">
			<img src={image} alt="" className="chekoutProduct__image" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_) => (
							<StarIcon className="product__ratingStar" />
						))}
				</div>
				<p className="checkoutProduct__price">
					<small>₹</small>
					<strong>{price}</strong>
				</p>

				{!hideButton && (
					<button onClick={removeFromBasket}>Remove from cart</button>
				)}
			</div>
		</div>
	);
}

export default CheckoutProduct;
