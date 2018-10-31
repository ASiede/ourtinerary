import React from 'react';
import {reduxForm, Field} from 'redux-form';
// import Input from './input';

export class LoginForm extends React.Component {
	onSubmit(values) {
		console.log(values)
	}

	render () {
		return (
			<div>
				<h3>Login</h3>
			    	<form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
				        <label htmlFor="username">Username:</label><br />
				        <field name="username" id="username" type="text" component="input"/><br />
				        <label htmlFor="password">Password:</label><br />
				        <field name="password" id="password" type="text" component="input"/><br />
				        <button type="submit">Submit</button>
			    	</form> 
		    </div>	
		)};
}

export default reduxForm({
	form: 'userLogin'
})(LoginForm)