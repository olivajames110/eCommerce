import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './css/navbar.css';
import Logo from '../../assets/logo';
import ShoppingBag from '../../assets/icons/shoppingBag';

export default function Header() {
	return (
		<header>
			<section>
				<div className="navbar-wrapper">
					<a href="/">
						<Logo />
					</a>

					<div className="cart-container">
						<ShoppingBag />
						<span className="cart-title">Shopping Bag</span>
						<span className="badge-container">2</span>
					</div>
				</div>
			</section>
		</header>
	);
}
