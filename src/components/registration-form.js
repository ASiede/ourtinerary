import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from './input';
import {login, registerUser} from '../actions/index';
import {required, nonEmpty} from '../validators';


export class RegistrationForm extends React.Component {
	onSubmit(values) {
		console.log(values)
		const {firstName, lastName, username, password} = values;
		const user = {firstName, lastName, username, password};
		return this.props.dispatch(registerUser(user))
					
	}

	render () {
		return (
			<div>
				<h3>Registration</h3>
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
				        

				        <Field 
				        name="username" 
				        type="text" 
				        component={Input}
				        label="Username"
				        validate={[required, nonEmpty]}
				        />
				        

				        <Field 
				        name="password" 
				        type="text" 
				        component={Input}
				        label="Password"
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
	form: 'registration',
	onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm)

