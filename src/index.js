import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import * as actions from './actions'
import './index.css';

// console.log(store.getState().ourtinerary);
// store.dispatch(actions.login("Delores", "passwordpassword"))
// // // store.dispatch(actions.getTrips());
// console.log(store.getState().ourtinerary);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister(); 
