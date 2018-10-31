import React from 'react';
import ItineraryItem from './itinerary-item';
import './itinerary-list.css'

export default function ItineraryList(props) {
	console.log(props.itineraryItems)
	console.log(props.itineraryItems.map(item => item))
	const list = props.itineraryItems.map(item => {
			return <ItineraryItem item={item} />
		});

	return (
		<div>{list}</div>
	);
}