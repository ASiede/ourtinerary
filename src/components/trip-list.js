import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './trip-list.css';


export class TripList extends React.Component {
	componentDidMount() {
		
	}
	
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