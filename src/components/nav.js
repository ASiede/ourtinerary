import React from 'react';
import './nav.css'

export default function Nav(props) {
	
	const navLinks = props.user.loggedIn ? 
		<div>
			<p>MyTrips</p>
			<p>Log Out</p>
		</div>
		: '';

	return (
		<nav>
			<p>Navigation Bar</p>
			<div>{navLinks}</div>
		</nav>
		)
}