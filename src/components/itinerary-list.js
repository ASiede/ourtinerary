import React from 'react';
import ItineraryItem from './itinerary-item';
import {connect} from 'react-redux';
import {getItineraryItem, getTrip} from '../actions'
import './itinerary-list.css'

export class ItineraryList extends React.Component {

	render() {
		const trip = this.props.ourtinerary.trips ? this.props.ourtinerary.trips.find(trip => trip.id === this.props.trip.id) : {};
		const itineraryItems = trip ? trip.itineraryItems: '';
		const list = trip.itineraryItems.length > 0 ? trip.itineraryItems.map(item => 
				<ItineraryItem key={item.id} item={item} trip={trip} />
			): <p>This trip doesn't have any itinerary items yet.</p>;

		return (
			<div aria-live="assertive" className="itinerary-list-wrapper">{list}</div>
		);
	}
}

const mapStateToProps = (state) => ({
	ourtinerary: state.ourtinerary,
	itineraryItems: state.ourtinerary.itineraryItems,
});

export default connect(mapStateToProps)(ItineraryList);