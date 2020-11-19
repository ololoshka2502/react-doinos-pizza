import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/pizza-logo.svg';
import Button from './Button';
import { useSelector } from 'react-redux';

const Header = () => {
	const { totalPrice, totalCount } = useSelector(({cart}) => cart);

	return (
		<div className="header">
			<div className="container">
				<div className="header__logo">
					<Link to="/"><img src={logo} alt="Pizza logo" /></Link>
				</div>

				<div className="header__cart">
					<Button totalPrice={totalPrice} totalCount={totalCount} />
				</div>
			</div>
		</div>
	);
}

export default Header;