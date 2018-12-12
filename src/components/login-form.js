import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from './input';
import {login, getTrips} from '../actions';
import {required, nonEmpty} from '../validators';
import {connect} from 'react-redux';
import './login-form.css'

export class LoginForm extends React.Component {

	onSubmit(values) {
		this.props.reset();
		this.props.dispatch(getTrips())
		return this.props.dispatch(login(values.loginusername, values.loginpassword));	
	}

	render () {
		const incorrectPassword = this.props.ourtinerary && this.props.ourtinerary.error && this.props.ourtinerary.error.code === 401 ? <p className="error-message">Password is incorrect</p> : '';

		return (
			<div className="login-area">
				<h3>Login</h3>
			    	<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				     
				        <Field 
				        name="loginusername" 
				        type="text" 
				        component={Input}
				        label="Username"
				        validate={[required, nonEmpty]}
				        />
				        
						{incorrectPassword}
				        <Field 
				        name="loginpassword" 
				        type="password" 
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

const mapStateToProps = (state) => ({
	ourtinerary: state.ourtinerary,
	loggedIn: state.ourtinerary.currentUser !== null,
	currentUser: state.ourtinerary.currentUser,
});

LoginForm = connect(mapStateToProps)(LoginForm);

export default reduxForm({
	form: 'userLogin',
	onSubmitFail: (errors, dispatch) =>
        dispatch(focus('userLogin', Object.keys(errors)[0]))
})(LoginForm)