import {
	ADD_PIZZA,
	CLEAR_CART,
	REMOVE_ITEM,
	PLUS_ITEM,
	MINUS_ITEM
} from './actionTypes';

export const addPizzaToCart = (pizzaObj) => {
	return {
		type: ADD_PIZZA,
		payload: pizzaObj
	};
};

export const clearCart = () => {
	return {
		type: CLEAR_CART
	};
};

export const removeCartItem = (id) => {
	return {
		type: REMOVE_ITEM,
		payload: id
	};
};

export const plusItem = (id) => {
	return {
		type: PLUS_ITEM,
		payload: id
	};
};

export const minusItem = (id) => {
	return {
		type: MINUS_ITEM,
		payload: id
	};
};