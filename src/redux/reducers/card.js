import {
	SET_CARDS,
	SET_LOADED
} from '../actions/actionTypes';

const initState = {
	items: [],
	isLoaded: false
};

export const cards = (state = initState, action) => {
	switch (action.type) {
		case SET_CARDS:
			return {
				...state,
				items: action.payload,
				isLoaded: true
			};

		case SET_LOADED:
			return {
				...state,
				isLoaded: action.payload,
			};


		default:
			return state;
	};
};