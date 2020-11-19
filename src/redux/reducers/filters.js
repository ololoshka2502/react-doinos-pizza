import {
	SET_SORT_BY,
	SET_CATEGORY
} from '../actions/actionTypes';

const initState = {
	category: null,
	sortBy: {
		type: 'popular',
		order: 'desc'
	}
};

export const filters = (state = initState, action) => {
	switch (action.type) {
		case SET_SORT_BY:
			return {
				...state,
				sortBy: action.payload
			};

		case SET_CATEGORY:
			return {
				...state,
				category: action.payload
			};

		default:
			return state;
	};
};