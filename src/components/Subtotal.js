import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
	const history = useHistory();
	const [{ basket }] = useStateValue();
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							{/* {part of the homework} */}
							Subtotal ({basket.length} items):
							<strong className="subtotal__value"> {value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeperator={true}
				prefix={"₹"}
			/>
			<button onClick={(e) => history.push("/payment")}>
				Procced to Checkout
			</button>
		</div>
	);
};

export default Subtotal;
