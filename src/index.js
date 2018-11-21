import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import {Provider} from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import {login, registerUser, createNewTrip, createNewItineraryItem, editVote} from './actions'


// console.log(store.getState().ourtinerary);

// store.dispatch(registerUser('Andrea', 'Siede', 'Asiede', 'password'));
// console.log(store.getState());

store.dispatch(login('Rupaul','password'));
// console.log(store.getState());

// store.dispatch(createNewTrip(9, 'Oregon Fun', 'dates', 'Oregon', ['Trixie'], 'Alyssa', ));
// console.log(store.getState().ourtinerary);


// store.dispatch(createNewItineraryItem(2, "hotel", "", "Good Hotel", "cheap", "", "", "", "", ["Rupaul", "Alyssa" ]))
// console.log(store.getState().ourtinerary.trips);
// console.log(store.getState().ourtinerary.trips[0].itineraryItems);
// store.dispatch(editVote('No', 60, 1, 'Rupaul'))
// console.log(store.getState().ourtinerary.trips[0].itineraryItems);



ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister(); 
