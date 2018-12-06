import React from 'react';
import Input from './input';
import {connect} from 'react-redux';
import {changeItineraryType} from '../actions'
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import {createNewItineraryItem} from '../actions/index';
// import './new-itinerary-item-form.css'

export class NewItineraryForm extends React.Component {
	constructor(props) { 
		super(props);
		this.state = {
			itineraryType: 'Flight'
		}
	}

	handleFormChange(itineraryType) {
	    this.setState({
	      itineraryType
	    })
  	}

	onSubmit(values) {
		const flightNumber = values.flightNumber ? values.flightNumber : '';
		const layovers = values.layovers ? values.layovers : '';
		const length = values.length ? values.length : '';
		const departureTimeArrivalTime = values.departureTimeArrivalTime ? values.departureTimeArrivalTime : '';
		const name = values.name ? values.name : '';
		const price = values.price ? values.price : '';
		const location = values.location ? values.location : '';
		const pool = values.pool ? values.pool : '';
		const foodType = values.foodType ? values.foodType : '';
		const website = values.website ? values.website : '';
		const other = values.other ? values.other : '';
		
		const tripId = this.props.trip.id;
		this.props.reset();

		let type = this.state.itineraryType
		const itineraryItem = {tripId, type, flightNumber, layovers,length,departureTimeArrivalTime, name, price, location, pool, foodType, website, other}

		if (tripId) {
			return this.props.dispatch(createNewItineraryItem(itineraryItem, tripId));	
		}	
	}

	render () {
		return (
			<div>
				<h2>Create New Trip Itinerary Below</h2>
		        	<label>Type of Activity</label><br />
						<select value={this.state.itineraryType} onChange={e => this.handleFormChange(e.target.value)}>
							<option value="Flight">Flight</option>
							<option value="Hotel" default>Hotel</option>
							<option value="Restaurant/Bar">Restaurant/Bar</option>
							<option value="Activity">Activity</option>
							<option value="Event">Event</option>
							<option value="Shopping">Shopping</option>
							<option value="Other">Other</option>
						</select><br />

		        	<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>

		        		{ this.state.itineraryType === "Flight" &&
			        		<Field
			        		name="flightNumber"
			        		type="text"
			        		component={Input}
			        		label="FlightNumber"
			        		/>
			          	}

			          	{ this.state.itineraryType === "Flight" &&
			        		<Field
			        		name="layovers"
			        		type="text"
			        		component={Input}
			        		label="Layovers"
			        		/>
			          	}

			          	{ this.state.itineraryType === "Flight" &&
			        		<Field
			        		name="length"
			        		type="text"
			        		component={Input}
			        		label="Length"
			        		/>
			          	}

			          	{ this.state.itineraryType === "Flight" &&
			        		<Field
			        		name="departureTimeArrivalTime"
			        		type="text"
			        		component={Input}
			        		label="Departure Time/Arrival Time"
			        		/>
			          	}

		        		{ this.state.itineraryType !== "Flight" &&
		        		<Field
		        		name="name"
		        		type="text"
		        		component={Input}
		        		label="Name"
		        		/>
		        		}

		        		
		        		<Field
		        		name="price"
		        		type="text"
		        		component={Input}
		        		label="Price"
		        		/>
		   

		        		{ this.state.itineraryType !== "Flight" &&
			        		<Field
			        		name="location"
			        		type="text"
			        		component={Input}
			        		label="Location"
			        		/>
			          	}

			          	{ this.state.itineraryType === "Hotel" &&
			        		<Field
			        		name="pool"
			        		type="text"
			        		component={Input}
			        		label="Pool"
			        		/>
			          	}

		        		{ this.state.itineraryType === "Restaurant" &&
			        		<Field
			        		name="foodType"
			        		type="text"
			        		component={Input}
			        		label="Food Type"
			        		/>
			          	}
			        	
		          		<Field
		        		name="website"
		        		type="text"
		        		component={Input}
		        		label="Website"
		        		/>

		        		<Field
		        		name="other"
		        		type="text"
		        		component={Input}
		        		label="Other/Notes"
		        		/>

		         		<button 
				        	type="submit"
				        	disabled={
				        		this.props.pristine ||
				        		this.props.submitting
				        	}>
				        	Submit
				        </button>
		        	</form>
		    </div>    	
		)
	}	
}

const mapStateToProps = (state) => ({
	ourtinerary: state.ourtinerary,
	currentUser: state.ourtinerary.currentUser,
});

NewItineraryForm = connect(mapStateToProps)(NewItineraryForm);

export default reduxForm({
	form: 'NewTripForm',
	onSubmitFail: (errors, dispatch) =>
        dispatch(focus('newTripForm', Object.keys(errors)[0]))
})(NewItineraryForm)
