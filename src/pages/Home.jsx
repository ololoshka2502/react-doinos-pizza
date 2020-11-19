import React from 'react';
import { Categories, SortPopup, Card, PizzaLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchItems } from '../redux/actions/card';
import { addPizzaToCart } from '../redux/actions/cart';

const categories = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
const sortItems = [
	{ name: 'popular', type: 'popular', order: 'desc'},
	{ name: 'price', type: 'price', order: 'asc'},
	{ name: 'alphabet', type: 'name', order: 'asc'}
];

const Home = () => {
	const dispatch = useDispatch();

	const { items, isLoaded } = useSelector((state) => state.cards);
	const category = useSelector(state => state.filters.category);
	const sortBy = useSelector(state => state.filters.sortBy);
	const cartItems = useSelector(({cart}) => cart.items);

	React.useEffect(() => {
		dispatch(fetchItems(category, sortBy));
	}, [category, sortBy, dispatch]);

	const onSelectSortType = React.useCallback((type) => {
		dispatch(setSortBy(type));
	}, [dispatch]);

	const onSelectCategory = React.useCallback((index) => {
		dispatch(setCategory(index));
	}, [dispatch]);

	const handleAddPizza = (obj) => {
		dispatch(addPizzaToCart(obj));
	};

	return (
		<div className="container">
			<div className="content__top">

				<Categories
					categories={categories}
					activeCategory={category}
					onClickCategory={onSelectCategory}
				/>

				<SortPopup
					items={sortItems}
					sortType={sortBy.type}
					onClickSortType={onSelectSortType}
				/>
			</div>

			<h2 className="content__title">All pizzas</h2>
			<div className="content__items">
				{
					isLoaded
						? items.map((item, index) => {
							return (
								<Card
									key={`${item}__${index}`}
									onAddPizzaToCart={handleAddPizza}
									addedCount={cartItems[item.id] && cartItems[item.id].items.length}
									{...item}
								/>

							)
						})
						: Array(12)
							.fill(0)
							.map((_, i) => (<PizzaLoadingBlock key={`key_${i}`} />))
				}
			</div>
		</div>
	)
}

export default Home;