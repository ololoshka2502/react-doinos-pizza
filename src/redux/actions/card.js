import {
	SET_CARDS,
	SET_LOADED
} from './actionTypes';
import axios from 'axios';

export const setLoaded = (bool) => {
	return {
		type: SET_LOADED,
		payload: bool
	};
};

export const fetchItems = (category, sortBy) => (dispatch) => {
	dispatch({
		type: 'SET_LOADED',
		payload: false
	});

	axios.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
		.then(({ data }) => {
			dispatch(setCards(data));
		});
};

export const setCards = (cards) => {
	return {
		type: SET_CARDS,
		payload: cards
	};
};
