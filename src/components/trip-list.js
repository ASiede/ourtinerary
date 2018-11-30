import React from 'react';
import {connect} from 'react-redux';
import {getTrips} from '../actions'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './trip-list.css';


export class TripList extends React.Component {
	componentDidMount() {
		this.props.dispatch(getTrips())
		console.log(this.props.userTrips)
		
	}

	// change the below to refer to the trip prop being passed along
	render() {

		const trips = this.props.ourtinerary.trips.map((trip) => (
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
	ourtinerary: state.ourtinerary,
	currentUser: state.ourtinerary.currentUser,
});

export default connect(mapStateToProps)(TripList);