import {
	SET_TOTAL_PRICE,
	SET_TOTAL_COUNT,
	ADD_PIZZA,
	CLEAR_CART,
	REMOVE_ITEM,
	PLUS_ITEM,
	MINUS_ITEM
} from '../actions/actionTypes';

const initState = {
	items: {},
	totalPrice: 0,
	totalCount: 0
};

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
	const [firstKey, ...keys] = path.split('.');

	return keys.reduce((val, key) => {
		return val[key];
	}, obj[firstKey]);
}

const getTotalSum = (obj, path) => {
	return Object.values(obj).reduce((sum, obj) => {
		const value = _get(obj, path);

		return sum + value;
	}, 0);
};

export const cart = (state = initState, action) => {
	switch (action.type) {
		case SET_TOTAL_PRICE:
			return {
				...state,
				totalPrice: action.payload
			};

		case SET_TOTAL_COUNT:
			return {
				...state,
				totalCount: action.payload
			};

		case PLUS_ITEM: {
			const newObjItems = [
				...state.items[action.payload].items,
				state.items[action.payload].items[0],
			];
			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotalPrice(newObjItems),
				},
			};

			const totalCount = getTotalSum(newItems, 'items.length');
			const totalPrice = getTotalSum(newItems, 'totalPrice');

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice,
			};
		};

		case MINUS_ITEM: {
			const oldItems = state.items[action.payload].items;
			const newObjItems =
				oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
			const newItems = {
				...state.items,
				[action.payload]: {
					items: newObjItems,
					totalPrice: getTotalPrice(newObjItems),
				},
			};

			const totalCount = getTotalSum(newItems, 'items.length');
			const totalPrice = getTotalSum(newItems, 'totalPrice');

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice,
			};
		};


		case ADD_PIZZA:
			const currentPizzaItems = !state.items[action.payload.id]
				? [action.payload]
				: [...state.items[action.payload.id].items, action.payload]


			const newItems = {
				...state.items,

				[action.payload.id]: {
					items: currentPizzaItems,
					totalPrice: getTotalPrice(currentPizzaItems)
				}
			};


			const totalCount = getTotalSum(newItems, 'items.length');
			const totalPrice = getTotalSum(newItems, 'totalPrice');

			return {
				...state,
				items: newItems,
				totalCount,
				totalPrice
			};

		case CLEAR_CART:
			return {
				items: {},
				totalPrice: 0,
				totalCount: 0
			};

		case REMOVE_ITEM:
			const stateItems = {
				...state.items
			};

			const currentTotalPrice = stateItems[action.payload].totalPrice;
			const currentTotalCount = stateItems[action.payload].items.length;

			delete stateItems[action.payload];

			return {
				...state,
				items: stateItems,
				totalPrice: state.totalPrice - currentTotalPrice,
				totalCount: state.totalCount - currentTotalCount
			};

		default:
			return state;
	};
};