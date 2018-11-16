import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import {Provider} from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import {login, registerUser, createNewTrip, createNewItineraryItem} from './actions'


console.log(store.getState());

// store.dispatch(registerUser('Andrea', 'Siede', 'Asiede', 'password'));
// console.log(store.getState());


store.dispatch(createNewTrip(4, 'Oregon', 'dates', 'Oregon', ['Trixie'], 'Alyssa', ));
console.log(store.getState());


// store.dispatch(createNewItineraryItem(1, "hotel", "", "Good Hotel", "cheap", "", "", "", ""))
// console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister(); 
