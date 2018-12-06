import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store';
import Landing from './landing';
import User from './user';
import Nav from './nav';
import TripView from './trip-view'
import createBrowserHistory from 'history/createBrowserHistory'


const user = {loggedIn: true}

export const history = createBrowserHistory()

export default function App(props) {
	return (
		<Router history={history}>
			<Provider store={store}>
				<div>
					<Nav user={user} />
					<Route exact path="/" component={Landing} />
					<Route exact path="/user/:username" component={User} />
					<Route exact path="/trip/:tripId" component={TripView} />
				</div>
			</Provider>
		</Router>
		)
}