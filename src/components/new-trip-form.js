import React from 'react';
import './new-trip-form.css'

export default function NewTripForm(props) {
	return (
		<div>
			<h2>Create New Trip Below</h2>
	        	<form>
	          		<label>Trip Name:</label><br />
	          		<input type="text" /><br />
	          		<label>Dates:</label><br />
	         		<input type="dates" /><br />
	         		<label>Location(s):</label><br />
	         		<input type="text" /><br />
	         		<label>Trip Collaborator(s):</label><br />
	         		<input type="text" /><br />
	         		<button type="submit">Submit</button>
	        	</form>
	    </div>    	
	);
}