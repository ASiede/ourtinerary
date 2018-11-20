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
            itineraryType: 'Hotel'
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

		return this.props.dispatch(createNewItineraryItem(tripId, itineraryType, flightNumber, name, price, foodType, pool, website, other, collaborators))
					
	}


	render () {
		let itineraryType = this.state.itineraryType
		return (
			<div>
				<h2>Create New Trip Itinerary Below</h2>
		        	<label>Type of Activity</label><br />
			          <select value={this.state.itineraryType} onChange={e => this.setValue(e.target.value)}>
			            <option value="flight">Flight</option>
			            <option value="hotel" default>Hotel</option>
			            <option value="restaurant">Restaurants/Bars</option>
			            <option value="activity">Activities</option>
			            <option value="event">Events</option>
			            <option value="shopping">Shopping</option>
			            <option value="other">Other</option>
			          </select><br />
		        	

		        	<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>

		        		{ itineraryType === "flight" &&
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

		        		{ itineraryType === "flight || restaurant || activity || event || other" &&
		        		<Field
		        		name="price"
		        		type="text"
		        		component={Input}
		        		label="Price"
		        		/>
		        		}


		        		{ itineraryType === "restaurant" &&
			        		<Field
			        		name="foodType"
			        		type="text"
			        		component={Input}
			        		label="Food Type"
			        		/>
			          	}

			        	{ itineraryType === "hotel" &&
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
