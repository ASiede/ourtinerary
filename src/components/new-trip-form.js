import React from 'react';
import Input from './input';
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import {createNewTrip} from '../actions/index';
import './new-trip-form.css'

export class NewTripForm extends React.Component {
	constructor(props) { 
		super(props); 
	}

	onSubmit(values) {
		console.log(values);

		const tripLeader = this.props.currentUser;
		const tripId = (Math.floor(Math.random() * 100) + 5);
		const collaboratorArr = values.collaborators.split(",");
		const collaborators = collaboratorArr.map(name => name.trim());

		this.props.reset();
		
		return this.props.dispatch(createNewTrip(
			tripId,
			values.tripName, 
			values.dates, 
			values.location, 
			collaborators, 
			tripLeader))
	}
	
	render () {
		
		return (
			<div>
				<h2>Create New Trip Below</h2>
		        	<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
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
	form: 'newTripForm',
	onSubmitFail: (errors, dispatch) =>
        dispatch(focus('newTripForm', Object.keys(errors)[0]))
})(NewTripForm)