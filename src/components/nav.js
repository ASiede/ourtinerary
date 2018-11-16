import React from 'react';
import {connect} from 'react-redux';
import './nav.css'

export function Nav(props) {
	console.log(props.loggedIn)
	const navLinks = props.loggedIn ? 
		<div>
			<p>MyTrips</p>
			<p>Log Out</p>
		</div>
		: '';

	return (
		<nav>
			<p>Navigation Bar</p>
			{navLinks}
		</nav>
		)
}

const mapStateToProps = state => ({
	currentUser: state.ourtinerary.currentUser,
	loggedIn: state.ourtinerary.currentUser !== null
});

export default connect(mapStateToProps)(Nav);