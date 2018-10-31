import React from 'react';

export default function RegistrationForm(props) {
	return (
		<div>
			<h2>Register or Login</h2>
		        <h3>Register</h3>
	        	<form>
		            <label>First Name:</label><br />
		            <input type="text" /><br />
		            <label>Last Name:</label><br />
		            <input type="text" /><br />
		            <label>Username:</label><br />
		            <input type="text" /><br />
		            <label>Password:</label><br />
		            <input type="text" /><br />
		            <button type="submit">Submit</button>
	        	</form>
		</div>
	);
}

