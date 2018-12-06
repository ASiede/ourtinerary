import React from 'react';
import Input from './input';
import {connect} from 'react-redux';
import {getUsers} from '../actions'
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import {editTrip, deleteTrip, invite} from '../actions/index';
// import './edit-trip-form.css'

export class EditTripForm extends React.Component {
	constructor(props) { 
		super(props)
		this.state = {
			visable: true
		} 
	}

	componentDidMount() {
		//can improve if i get by email individually
		this.props.dispatch(getUsers())
	}

	handleDeleteTrip(trip) {
      // ADD AN ARE YOU SURE

      	console.log(this.props.tripId)

      	const userId = this.props.ourtinerary.currentUser.id
        return this.props
			.dispatch(deleteTrip(this.props.tripId, userId))
      
    }

	toggleVisable() {
		console.log("toggled")
		this.setState({
	        visable: !this.state.visable
	      })
	}

	onSubmit(values) {
		//Separating users and non users
		let submittedEmails = []
		let nonUsers = [];
		let users = [];


		//push collaborator email to submittedEmails
		let keys = Object.keys(values)
			keys.forEach(key => {
				if (key.includes('collabo')) {
					submittedEmails.push(values[key])
				}
		})
		console.log(submittedEmails)	

		//gets current collaborator emails
		let currentCollaboratorsUsernames = this.props.trip.collaborators ? this.props.trip.collaborators: '';
		let currentUsers = this.props.ourtinerary.users.filter(user => currentCollaboratorsUsernames.includes(user.username))
		let currentCollaboratorsEmails = currentUsers.map(user => user.email)
		console.log(currentCollaboratorsEmails)

		//trims input email
		const allEmailsTrimmed = submittedEmails.map(name => name.trim().toLowerCase());
		
		console.log(allEmailsTrimmed)

		//Get all user emails
		let userEmails = this.props.ourtinerary.users.map(user => user.email)

		//pushes email to either nonuser or user
		allEmailsTrimmed.forEach(email => {
			if (userEmails.includes(email)) {
				users.push(email);
			} else {
				nonUsers.push(email)
			}
		})
		console.log(userEmails)
		console.log(nonUsers)
		console.log(users)

		//check to make sure no repeats
		users.forEach(user => {
			if (!currentCollaboratorsEmails.includes(user)) {
				currentCollaboratorsEmails.push(user)
			}
		})
		
		console.log(currentCollaboratorsEmails)
		//needs to be ids
		let collaboratorUserObjs = this.props.ourtinerary.users.filter(user => currentCollaboratorsEmails.includes(user.email));
		let currentCollaboratorsIds = collaboratorUserObjs.map(user => user.id)


		///skubmitting

		const tripLeader = this.props.ourtinerary.currentUser.id;
		const tripFields = ["name", "dates", "location"];

		let updatedFields = {
			tripLeader: tripLeader,
			id: this.props.trip.id,
			collaborators: currentCollaboratorsIds
		};
		tripFields.map(field => {
			if (values[field]) {
				updatedFields[field] = values[field]
			}
		})

		this.props.reset();
		// this.toggleVisable()

		nonUsers.forEach( nonUser => {
			return this.props.dispatch(invite(nonUser, this.props.ourtinerary.currentUser.username, this.props.trip.name))
		})
			
		return this.props.dispatch(editTrip(updatedFields))
	}



	
	render () {
		


		return (
			<div>
				<h2>Make Changes Below</h2>
		        	<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
		        		<Field
		        		name="name"
		        		type="text"
		        		value="test"
		        		component={Input}
		        		label="Trip Name"
		        		/>

		        		<Field
		        		name="dates"
		        		type="dates"
		        		value="test"
		        		component={Input}
		        		label="Dates"
		        		/>
		          		
		          		<Field
		        		name="location"
		        		type="text"
		        		value="test"
		        		component={Input}
		        		label="Location"
		        		/>

		        		<Field
		        		name="collaborators"
		        		type="text"
		        		value="test"
		        		component={Input}
		        		label="Collaborators*"
		        		/>
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

		        	<button type="click" onClick={() => {if (window.confirm('Are you sure you wish to delete this trip? This action cannot be undone.')) this.handleDeleteTrip(this.props.trip)}}>Delete Trip</button>
		    </div> 
		)
	}

}

const mapStateToProps = (state) => ({
	ourtinerary: state.ourtinerary,
	currentUser: state.ourtinerary.currentUser,
});

EditTripForm = connect(mapStateToProps)(EditTripForm);

export default reduxForm({
	form: 'editTripForm',
	onSubmitFail: (errors, dispatch) =>
        dispatch(focus('editTripForm', Object.keys(errors)[0]))
})(EditTripForm)