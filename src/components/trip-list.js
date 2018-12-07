import React from 'react';
import {connect} from 'react-redux';
import {getTrips} from '../actions'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { withRouter } from 'react-router';

import './trip-list.css';


export class TripList extends React.Component {
	componentDidMount() {
		// COULD IMPROVE BY PASSING SEARCH QUERIES FOR ONLY USERS TRIPS
		this.props.dispatch(getTrips())
	}

	render() {
		const userId = this.props.user ? this.props.user.id : '';
		const userTrips = this.props.user && this.props.user.trips ? this.props.user.trips : [];
		const trips = userTrips.map((trip) => (
			<li key={trip._id}><Link to={`/trip/${trip._id}`}>{trip.name}</Link></li>
		));

		return (
			<div className="trip-list">
				<ul className="trips">
					{trips}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	ourtinerary: state.ourtinerary
});

export default withRouter(connect(mapStateToProps)(TripList));