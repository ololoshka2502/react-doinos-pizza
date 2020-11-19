import { combineReducers } from 'redux';
import { filters } from './filters';
import { cards } from './card';
import { cart } from './cart';


export const rootReducer = combineReducers({
	filters,
	cards,
	cart
});