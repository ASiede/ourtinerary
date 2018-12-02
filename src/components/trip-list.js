import React from 'react';
import {connect} from 'react-redux';
import {getTrips} from '../actions'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './trip-list.css';


export class TripList extends React.Component {
	componentDidMount() {
		// COULD IMPROVE BY PASSING SEARCH QUERIES FOR ONLY USERS TRIPS
		this.props.dispatch(getTrips())
	}

	render() {
		console.log(this.props.ourtinerary.trips)
		
		const userId = this.props.user ? this.props.user.id : '';
		const currentTrips = (this.props.ourtinerary.trips && this.props.user) ? this.props.ourtinerary.trips.filter(trip=> {
			return (trip.collaborators.filter( collaborator => {
				return collaborator.id === this.props.user.id}))
		}): [];

		const trips = currentTrips.map((trip) => (
			<li key={trip.id}><Link to={`/trip/${trip.id}`}>{trip.name}</Link></li>
		));

		return (
			<div>
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

export default connect(mapStateToProps)(TripList);