import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Orders from "./components/Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
	"pk_test_51HQ7pqGQ5hQqpk0vDdvOQF2NbtiJgy61zcBbISt3P2zo4ZIy3d1h0rBgBOYlLjWZ2JA19N3wtDbkyaEvnJDbepmI00fecF3vaw"
);

function App() {
	const [{ user }, dispatch] = useStateValue();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// the user just logged in / the user was logged in
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is logged out
				// add user to reducer
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);
	console.log(user);
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/orders">
						<Header />
						<Orders />
					</Route>
					<Route path="/Checkout">
						<Header />
						<Checkout />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/payment">
						<Header />
						<Elements stripe={promise}>
							<Payment />
						</Elements>
					</Route>
					<Route path="/">
						<Header />
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
