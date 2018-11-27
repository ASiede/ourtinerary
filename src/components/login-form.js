import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from './input';
import {login, getTrips} from '../actions';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
	constructor(props) { 
		super(props); 
	}

	onSubmit(values) {
		console.log(values)
		this.props.reset();
		this.props.dispatch(getTrips())
		return this.props.dispatch(login(values.username, values.password));
		
	}

	render () {
		
		return (
			<div>
				<h3>Login</h3>
			    	<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				     
				        <Field 
				        name="username" 
				        type="text" 
				        component={Input}
				        label="Name"
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
	form: 'userLogin',
	onSubmitFail: (errors, dispatch) =>
        dispatch(focus('userLogin', Object.keys(errors)[0]))
})(LoginForm)