import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from './input';
import {login, registerUser, getTrips} from '../actions/index';
import {required, nonEmpty, email, tooLong, passwordLength} from '../validators';
import './registration-form.css'


export class RegistrationForm extends React.Component {
	constructor(props) { 
		super(props); 
	}

	onSubmit(values) {
		this.props.reset();
		const {username, password, email, firstName, lastName} = values;
        const user = {username, password, email, firstName, lastName};
        let error;
		return this.props
            .dispatch(registerUser(user))	
            .then(() => this.props.dispatch(login(username, password)));   			
	}

	render () {
		const usernameTaken = this.props.ourtinerary.error && this.props.ourtinerary.error.code === 422 ? <p className="error-message">Username is already taken</p> : '';
		const emailTaken = this.props.ourtinerary.error && this.props.ourtinerary.error.code === 401 ? <p className="error-message">That email is already registered</p> : '';

		return (
			<div className="registration-area">
				<h3>Register</h3>
			    	<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				     	<Field 
				        name="firstName" 
				        type="text" 
				        component={Input}
				        label="First Name"
				        validate={[required, nonEmpty]}
				        />
				       
				        <Field 
				        name="lastName" 
				        type="text" 
				        component={Input}
				        label="Last Name"
				        validate={[required, nonEmpty]}
				        />

				        {emailTaken}
				        <Field 
				        name="email" 
				        type="text" 
				        component={Input}
				        label="Email"
				        validate={[required, nonEmpty, email]}
				        />
				     

				    	{usernameTaken} 	
				        <Field 
				        name="username" 
				        type="text" 
				        component={Input}
				        label="Username"
				        validate={[required, nonEmpty, tooLong]}
				        />
				        
				        <Field 
				        name="password" 
				        type="password" 
				        component={Input}
				        label="Password"
				        validate={[required, nonEmpty, passwordLength]}
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
	loggedIn: state.ourtinerary.currentUser !== null,
	currentUser: state.ourtinerary.currentUser,
});

RegistrationForm = connect(mapStateToProps)(RegistrationForm);

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) =>{
        dispatch(focus('registration', Object.keys(errors)[0]))
	}
})(RegistrationForm)

