import React from 'react';
import Input from './input';
import {connect} from 'react-redux';
import {getUsers} from '../actions'
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty, email} from '../validators';
import {createNewTrip, invite} from '../actions/index';
import './new-trip-form.css'

export class NewTripForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numberOfCollaborators: 1
		}
	}

	handleAddCollaborator(e) {
		e.preventDefault();
		this.setState({
	        numberOfCollaborators: this.state.numberOfCollaborators + 1
	      })
	}

	componentDidMount() {
		//can improve if i get by email individually
		this.props.dispatch(getUsers())
	}

	onSubmit(values) {
		//Separating users and non users
		let allEmails = []
		let nonUsers = [];
		let collaboratorEmails = [];
		let keys = Object.keys(values)

		keys.forEach(key => {
			if (key.includes('collabo')) {
				allEmails.push(values[key])
			}
		})
		const collaboratorsArrTrimmed = allEmails.map(name => name.trim().toLowerCase());
		const userEmail = this.props.ourtinerary.users.map(user => user.email)
		collaboratorsArrTrimmed.forEach(email => {
			if (userEmail.includes(email)) {
				collaboratorEmails.push(email);
			} else {
				nonUsers.push(email)
			}
		})
		const collaborators = collaboratorEmails.map(collaboratorEmail => {
			const user = this.props.ourtinerary.users.find( user => user.email === collaboratorEmail)
			return user.id
		})

		const tripLeader = this.props.ourtinerary.currentUser.id;
        const {name, dates, location} = values;
		const trip = {name, dates, location, collaborators, tripLeader}
		this.props.reset();

		const inviterName = this.props.ourtinerary.currentUser.username

		if(nonUsers.length>0 && inviterName) {
			nonUsers.map(nonUser => this.props.dispatch(invite(nonUser, inviterName, values.name)))
		}

		this.props.dispatch(createNewTrip(trip));

	}

	render () {
		const html =
			<Field
    		name='collaborator'
    		type="text"
    		component={Input}
    		label="Collaborator"
    		validate={[email]}
    		/>

    		//NEED TO IMPROVE

		const anotherArray = []
		let i
		for(i=1; i < this.state.numberOfCollaborators + 1; i++) {
			let names = `collaborator${i}`
			anotherArray.push(
					<Field
						key={i}
		        		name={names}
		        		type="text"
		        		component={Input}
		        		label="Collaborator"
		        		validate={[email]}
		        		/>
				)
		}

		const collaboratorsHTML = anotherArray.map(html => html)

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

		        		<p>Add your collaborators here*</p>
		        		<button type="click" onClick={(e) => this.handleAddCollaborator(e)}>Add Collaborator</button>

		        		{collaboratorsHTML}

		        		<p>*Enter the emails of those you want to collaborate with for your trip. Registered users of OURtinerary will be added to your trip and non users will receive an email invite</p>

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
	onSubmitFail: (errors = {}, dispatch) =>{
        dispatch(focus('newTripForm', Object.keys(errors)[0]))
    }
})(NewTripForm)
