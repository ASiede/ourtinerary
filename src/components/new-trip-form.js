import React from 'react';
import Input from './input';
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import {createNewTrip} from '../actions/index';
import './new-trip-form.css'

export class NewTripForm extends React.Component {
	onSubmit(values) {
		console.log(values)
		const {tripName, dates, location, collaborators} = values;
		const tripLeader = this.props.currentUser;
		const trip = {tripName, dates, location, collaborators, tripLeader};
		return this.props.dispatch(createNewTrip(trip))
					
	}
	render () {
		return (
			<div>
				<h2>Create New Trip Below</h2>
		        	<form>
		        		<Field
		        		name="tripName"
		        		type="text"
		        		component={Input}
		        		label="Trip Name"
		        		validate={[required, nonEmpty]}
		        		/>

		        		<Field
		        		name="dates"
		        		type="dates"
		        		component={Input}
		        		label="Dates"
		        		validate={[required, nonEmpty]}
		        		/>
		          		
		          		<Field
		        		name="location"
		        		type="text"
		        		component={Input}
		        		label="Location"
		        		validate={[required, nonEmpty]}
		        		/>

		        		<Field
		        		name="collaborators"
		        		type="text"
		        		component={Input}
		        		label="Collaborators"
		        		validate={[required, nonEmpty]}
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
		)};
}

export default reduxForm({
	form: 'NewTripForm',
	onSubmitFail: (errors, dispatch) =>
        dispatch(focus('newTripForm', Object.keys(errors)[0]))
})(NewTripForm)