import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
	const [{ basket, user }] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/FPP/june/alicmary_2017-06-15T06-56_21b69b_1500x300.jpg"
					alt=""
					className="checkout__ad"
				/>
				<div>
					{basket?.length === 0 ? (
						<div className="checkout__title">
							<h2>Hello,{user?.email} Your Shopping Basket is Empty.</h2>
							<p>
								You have no items in your cart. To buy one or more items, click
								"Add to cart" next to the item.
							</p>
						</div>
					) : (
						<h2 className="checkout__title">
							Hello,{user?.email} Your shopping cart
						</h2>
					)}

					{basket.map((item) => (
						<CheckoutProduct
							id={item.id}
							key={item.id}
							rating={item.rating}
							title={item.title}
							image={item.image}
							price={item.price}
						/>
					))}
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
};

export default Checkout;
