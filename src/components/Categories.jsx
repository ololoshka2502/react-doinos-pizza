import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ categories, onClickCategory, activeCategory }) => {

	const setBtn = index => {
		onClickCategory(index);
	}

	return (
		<div className="categories">
			<ul>
				<li className={activeCategory === null ? 'active' : ''} onClick={() => setBtn(null)}>All</li>
				
				{categories.map((category, index) => {
						return (
							<li
								className={activeCategory === index ? 'active' : ''}
								key={category + index}
								onClick={() => setBtn(index)}

							>{category}</li>
						)
					})
				}
			</ul>
		</div>
	)
}

Categories.propTypes = {
	// activeCategory: PropTypes.number.isRequired,
	onClickCategory: PropTypes.func.isRequired,
	categories: PropTypes.arrayOf(PropTypes.string).isRequired
}

Categories.defaultProps = {
	activeCategory: null,
	categories: []
}

export default Categories
