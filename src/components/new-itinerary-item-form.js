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
            value: 'Hotel'
        } 
	}

	setValue(value) {
        this.setState({
            value
        })
    }

	onSubmit(values) {
		console.log(values)
		const {flightNumber, name, price, foodType, pool, website, other} = values;
		const tripId = this.props.tripId
		let itineraryType = this.state.value
		const itineraryItem = {tripId, itineraryType, flightNumber, name, price, foodType, pool, website, other};
		return this.props.dispatch(createNewItineraryItem(itineraryItem))
					
	}


	render () {
		let itineraryType = this.state.value
		console.log(this.state.value)
		return (
			<div>
				<h2>Create New Trip Itinerary Below</h2>
		        	<label>Type of Activity</label><br />
			          <select value={this.state.value} onChange={e => this.setValue(e.target.value)}>
			            <option value="flight">Flight</option>
			            <option value="hotel" default>Hotel</option>
			            <option value="restaurant">Restaurants/Bars</option>
			            <option value="activity">Activities</option>
			            <option value="event">Events</option>
			            <option value="shopping">Shopping</option>
			            <option value="other">Other</option>
			          </select><br />
		        	

		        	<form>

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
