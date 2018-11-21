import React from 'react';
import Input from './input';
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

	setValue(itineraryType) {
        this.setState({
            itineraryType
        })
    }

	onSubmit(values) {
		const flightNumber = values.flightNumber ? values.flightNumber : '';
		const price = values.price ? values.price : '';
		const foodType = values.foodType ? values.foodType : '';
		const pool = values.pool ? values.pool : '';
		const website = values.website ? values.website : '';
		const other = values.other ? values.other : '';
		const name = values.name ? values.name : '';
		
		const tripId = this.props.trip.id;
		const collaborators = this.props.trip.collaborators;

		let itineraryType = this.state.itineraryType

		this.props.reset();

		return this.props.dispatch(createNewItineraryItem(tripId, itineraryType, flightNumber, name, price, foodType, pool, website, other, collaborators));		
	}


	render () {
		let itineraryType = this.state.itineraryType
		return (
			<div>
				<h2>Create New Trip Itinerary Below</h2>
		        	<label>Type of Activity</label><br />
			          <select value={this.state.itineraryType} onChange={e => this.setValue(e.target.value)}>
			            <option value="Flight">Flight</option>
			            <option value="Hotel" default>Hotel</option>
			            <option value="Restaurant/Bar">Restaurant/Bar</option>
			            <option value="Activity">Activity</option>
			            <option value="Event">Event</option>
			            <option value="Shopping">Shopping</option>
			            <option value="Other">Other</option>
			          </select><br />
		        	

		        	<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>

		        		{ itineraryType === "Flight" &&
			        		<Field
			        		name="flightNumber"
			        		type="text"
			        		component={Input}
			        		label="FlightNumber"
			        		validate={[required, nonEmpty]}
			        		/>
			          	}

		        		<Field
		        		name="name"
		        		type="text"
		        		component={Input}
		        		label="Name"
		        		validate={[required, nonEmpty]}
		        		/>

		        		{ itineraryType === "Flight || Restaurant || Activity || Event || Other" &&
		        		<Field
		        		name="price"
		        		type="text"
		        		component={Input}
		        		label="Price"
		        		/>
		        		}


		        		{ itineraryType === "Restaurant" &&
			        		<Field
			        		name="foodType"
			        		type="text"
			        		component={Input}
			        		label="Food Type"
			        		/>
			          	}

			        	{ itineraryType === "Hotel" &&
			        		<Field
			        		name="pool"
			        		type="text"
			        		component={Input}
			        		label="Pool"
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
		        		label="Other"
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

export default reduxForm({
	form: 'NewTripForm',
	onSubmitFail: (errors, dispatch) =>
        dispatch(focus('newTripForm', Object.keys(errors)[0]))
})(NewItineraryForm)
