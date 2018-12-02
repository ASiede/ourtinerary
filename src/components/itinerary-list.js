import React from 'react';
import ItineraryItem from './itinerary-item';
import {connect} from 'react-redux';
import {getItineraryItem, getTrip} from '../actions'
import './itinerary-list.css'

export class ItineraryList extends React.Component {
	// has props trips
	//has trip id

	componentDidMount() {
		
	}

	render() {
		
		const trip = this.props.ourtinerary.trips ? this.props.ourtinerary.trips.find(trip => trip.id === this.props.trip.id) : {};

		const itineraryItems = trip.itineraryItems

		const list = trip ? trip.itineraryItems.map(item => 
			 <ItineraryItem key={item.id} item={item} trip={trip} />
		): '';

		return (
			<div>{list}</div>
		);

	}
}

const mapStateToProps = (state) => ({
	ourtinerary: state.ourtinerary,
	itineraryItems: state.ourtinerary.itineraryItems,
});

export default connect(mapStateToProps)(ItineraryList);