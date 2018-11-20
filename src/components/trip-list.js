import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './trip-list.css';


export default function TripList(props) {
	
	const trips = props.trips.map((trip) => (
		<li><Link to={`/trip/${trip.id}`}>{trip.name}</Link></li>
	));

	return (
		<div>
			<ul className="trips">
				{trips}
			</ul>
		</div>
	)
}
