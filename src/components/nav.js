import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {logout} from '../actions/index';
import './nav.css'

export class Nav extends React.Component {
	constructor(props) { 
		super(props); 
	}

	logout() {
		return this.props.dispatch(logout());
	}

	render() {
		const username = this.props.currentUser ? this.props.currentUser.username: '';
		const navLinks = this.props.loggedIn ? 
			<div>
				<p>Currrently logged in as {username}</p>
				<p> <Link to={`/user/${this.props.currentUser}`}>MyTrips</Link></p>
				<p onClick={() => this.logout()}><Link to={`/`}>Log Out</Link></p>
			</div>
			: '';

		return (
		<nav>
			<p>Navigation Bar</p>
			{navLinks}
		</nav>
		)
	}	
}

const mapStateToProps = state => ({
	currentUser: state.ourtinerary.currentUser,
	loggedIn: state.ourtinerary.currentUser !== null
});

export default connect(mapStateToProps)(Nav);