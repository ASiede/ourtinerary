import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import {reducer as formReducer} from 'redux-form'

import {ourtineraryReducer} from './reducers';


export default createStore(
	combineReducers({
		form: formReducer,
		ourtinerary: ourtineraryReducer
	}),
	applyMiddleware(thunk)
);