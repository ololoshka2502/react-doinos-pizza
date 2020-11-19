import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

export const store = createStore(
	rootReducer,
	persistedState,
	composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
	localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});