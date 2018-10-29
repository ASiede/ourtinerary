import React from 'react';
import './trip-list.css'

export default function TripList(props) {
	
	const trips = props.trips.map((trip, index) => (
		<li key={index}>{trip.name}</li>
	));

	return (
		<div>
			<ul>
				{trips}
			</ul>
		</div>
	)
}