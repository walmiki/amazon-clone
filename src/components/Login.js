import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png"
					className="login__logo"
					alt=""
				/>
			</Link>
			<div className="login__container">
				<h1>Sign In</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button onClick={signIn} className="login_signInButton">
						Sign In
					</button>
				</form>
				<p>
					By Signing-ing you agree to the <strong>AMAZON CLONE </strong>
					condition of use & sale. Please see our Privacy Notice, our Cookies
					Notice and our Interest-based Ads Notice.
				</p>
				<button onClick={register} className="login_registerButton">
					Create your Amazon Account
				</button>
			</div>
		</div>
	);
}

export default Login;
