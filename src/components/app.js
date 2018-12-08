import React from 'react';
import {Router, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store';
import Landing from './landing';
import User from './user';
import Nav from './nav';
import TripView from './trip-view'
import createHistory from 'history/createBrowserHistory'

const user = {loggedIn: true}

export const history = createHistory()

export default function App(props) {
	return (
		<Provider store={store}>
			<Router history={history}>
				<div>
					<Nav user={user} />
					<Route exact path="/" component={Landing} />
					<Route exact path="/user/:username" component={User} />
					<Route exact path="/trip/:tripId" component={TripView} />
				</div>
			</Router>
		</Provider>
		)
}
