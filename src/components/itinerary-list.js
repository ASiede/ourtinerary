import React from 'react';
import ItineraryItem from './itinerary-item';
import './itinerary-list.css'

export default function ItineraryList(props) {
	
	const list = props.trip.itineraryItems.map(item => {
			return <ItineraryItem item={item} trip={props.trip} />
		});

	return (
		<div>{list}</div>
	);
}