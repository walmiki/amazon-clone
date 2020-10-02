import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.css";
import { Link } from "react-router-dom";

import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Header = () => {
	const [{ basket, user }] = useStateValue();
	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="header">
			<Link to="/">
				<img
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
					className="header__logo"
				/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to="/login">
					<div onClick={handleAuthentication} className="header__options">
						<span className="header__optionLine1">
							Hello, {user ? user.email : `Guest`}
						</span>
						<span className="header__optionLine2">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<Link to="/orders">
					<div className="header__options">
						<span className="header__optionLine1">Returns</span>
						<span className="header__optionLine2">& Orders</span>
					</div>
				</Link>
				<div className="header__options">
					<span className="header__optionLine1">Your</span>
					<span className="header__optionLine2">prime</span>
				</div>
				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingCartIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
