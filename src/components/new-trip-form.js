import React from 'react';
import Input from './input';
import {connect} from 'react-redux';
import {getUsers} from '../actions'
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import {createNewTrip} from '../actions/index';
import './new-trip-form.css'

export class NewTripForm extends React.Component {
	constructor(props) { 
		super(props); 
	}

	componentDidMount() {
		this.props.dispatch(getUsers())

	}

	onSubmit(values) {
		// NEED TO PUT TRIP LEADER IN COLLABORATORS
		//ACTUALLY NEVERMIND ON THAT I THINK
		const collaboratorArr = values.collaborators.split(",");
		const collaboratorsArrTrimmed = collaboratorArr.map(name => name.trim());
		const collaborators = collaboratorsArrTrimmed.map(collaborator => {
			const user = this.props.ourtinerary.users.find( user => user.username === collaborator)
			return user.id
		})
		const tripLeader = this.props.ourtinerary.currentUser.id;
        const {name, dates, location} = values;
		const trip = {name, dates, location, collaborators, tripLeader}
		this.props.reset();

		return this.props.dispatch(createNewTrip(trip))
	}		
	
	render () {
		return (
			<div>
				<h2>Create New Trip Below</h2>
		        	<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
		        		<Field
		        		name="name"
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

const mapStateToProps = (state) => ({
	ourtinerary: state.ourtinerary,
	currentUser: state.ourtinerary.currentUser,
});

NewTripForm = connect(mapStateToProps)(NewTripForm);

export default reduxForm({
	form: 'newTripForm',
	onSubmitFail: (errors, dispatch) =>
        dispatch(focus('newTripForm', Object.keys(errors)[0]))
})(NewTripForm)

