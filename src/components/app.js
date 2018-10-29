import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Landing from './landing';
import User from './user';
import Nav from './nav';
import TripView from './trip-view'

export default function App(props) {
	return (
		<Router>
			<div>
				<Nav />
				<Route exact path="/" component={Landing} />
				<Route exact path="/user" component={User} />
				<Route exact path="/trip" component={TripView} />
			</div>
		</Router>

		)
}