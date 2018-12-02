import React from 'react';
import Input from './input';
import {connect} from 'react-redux';
import {getUsers} from '../actions'
import {reduxForm, Field, focus} from 'redux-form';
import {required, nonEmpty} from '../validators';
import {editTrip} from '../actions/index';
// import './edit-trip-form.css'

export class EditTripForm extends React.Component {
	constructor(props) { 
		super(props)
		this.state = {
			visable: true
		} 
	}

	componentDidMount() {
		this.props.dispatch(getUsers())
	}

	toggleVisable() {
		console.log("toggled")
		this.setState({
	        visable: !this.state.visable
	      })
	}

	onSubmit(values) {
		const collaboratorArr = values.collaborators ? values.collaborators.split(",") : [];
		const collaboratorsArrTrimmed = collaboratorArr ? collaboratorArr.map(name => name.trim()) : [];
		const collaborators = collaboratorsArrTrimmed ? collaboratorsArrTrimmed.map(collaborator => {
			const user = this.props.ourtinerary.users.find( user => user.username === collaborator)
			return user.id
		}) : [];

		const tripLeader = this.props.ourtinerary.currentUser.id;

		const tripFields = ["name", "dates", "location", "collaborators"];
		
		let updatedFields = {
			tripLeader: tripLeader,
			id: this.props.tripId
		};
		tripFields.map(field => {
			if (values[field]) {
				updatedFields[field] = values[field]
			}
		})

		this.props.reset();
		this.toggleVisable()



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
		        		label="Collaborators"
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

EditTripForm = connect(mapStateToProps)(EditTripForm);

export default reduxForm({
	form: 'editTripForm',
	// onSubmitFail: (errors, dispatch) =>
 //        dispatch(focus('editTripForm', Object.keys(errors)[0]))
})(EditTripForm)