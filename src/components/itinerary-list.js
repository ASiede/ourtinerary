import React from 'react';
import ItineraryItem from './itinerary-item';
import {connect} from 'react-redux';
import {getItineraryItem} from '../actions'
import './itinerary-list.css'

export class ItineraryList extends React.Component {
	

	componentDidMount() {
		console.log(this.props.trip.id)
		console.log(this.props.trip.itineraryItems)
		this.props.trip.itineraryItems.map(item => {
			this.props.dispatch(getItineraryItem(item._id, this.props.trip.id))
		})


	}

	render() {
		console.log(this.props.ourtinerary.itineraryItems)
		
		const list = this.props.ourtinerary.itineraryItems.map(item => {
				return <ItineraryItem key={item.id} item={item} trip={this.props.trip} />
			});

		return (
			<div>{list}</div>
		);

	}
}

const mapStateToProps = (state) => ({
	ourtinerary: state.ourtinerary,
	currentUser: state.ourtinerary.currentUser,
});

export default connect(mapStateToProps)(ItineraryList);