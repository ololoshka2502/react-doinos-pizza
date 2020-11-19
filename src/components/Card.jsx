import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({ id, imageUrl, name, price, sizes, types, onAddPizzaToCart, addedCount }) => {

	const pizzaTypes = ['Thin', 'Traditional'];

	const initState = {
		activeType: types[0],
		activeSize: 0
	};

	const [stateType, setType] = useState(initState);

	const pizzaTypeHandler = id => {
		setType({
			...stateType,
			activeType: id
		});
	};

	const pizzaSizeHandler = id => {
		setType({
			...stateType,
			activeSize: id
		});
	};

	const handleAddPizza = () => {
		const obj = {
			id,
			name,
			imageUrl,
			price,
			type: pizzaTypes[stateType.activeType],
			size: sizes[stateType.activeSize]
		};

		onAddPizzaToCart(obj);
	};

	return (
		<div className="pizza-block">
			<img
				className="pizza-block__image"
				src={imageUrl}
				alt={name}
			/>

			<h4 className="pizza-block__title">{name}</h4>

			<div className="pizza-block__selector">
				<ul>
					{pizzaTypes.map((item, index) => {
						return (
							<li
								key={`${item}_${index}`}
								className={classNames({
									active: stateType.activeType === index,
									disabled: !types.includes(index)
								})}
								onClick={() => pizzaTypeHandler(index)}
							>{pizzaTypes[index]}</li>
						)
					})}
				</ul>

				<ul>
					{sizes && sizes.map((item, i) => {
						return (
							<li
								key={`${item}_${i}`}
								className={stateType.activeSize === i ? 'active' : ''}
								onClick={() => pizzaSizeHandler(i)}
							>{item} sm.</li>
						)
					})}
				</ul>
			</div>

			<div className="pizza-block__bottom">
				<div className="pizza-block__price">{price} ₴</div>
				<div
					className="button button--outline button--add"
					onClick={handleAddPizza}
				>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Add to card</span>
					{addedCount ? (<i>{addedCount}</i>) : ''}
				</div>
			</div>
		</div>
	);
};



Card.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	types: PropTypes.arrayOf(PropTypes.number).isRequired,
	sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
	price: PropTypes.number.isRequired,
	onAddPizzaToCart: PropTypes.func
};

Card.defaultProps = {
	types: [],
	sizes: [],
	name: '---',
	price: 0,
	imageUrl: ''
};


export default Card;