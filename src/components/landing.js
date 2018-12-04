import React from 'react';
import RegistrationForm from './registration-form';
import {connect} from 'react-redux';
import LoginForm from './login-form';
import './landing.css';


export function Landing(props) {
	if(props.loggedIn) {
		props.history.push(`/user/${props.currentUser}`);
	}

	return (
		<div>
				<header>
					<h1>Welcome to OURtinerary</h1>
				</header>

				<main>
				    <section>Description
				    	<p>Want a central place for you and others to collaborate on an upcoming trip? Ourtinerary allows you to create a trip for one or more people, where trip goers can suggest itinerary items, vote on them, provide feedback, and confirm final trip plans. All in one place! </p>
				    </section>
				    <section>
				        <h2>Screen Shots/explanation</h2>
				        <p>[image placehoder]</p>
				        <p>View of creating a new trip</p>
				        <p>[image placehoder]</p>
				        <p>View of a trip</p>
				        <p>[image placehoder]</p>
				        <p>View adding itinerary to a trip</p>
				    </section>
				    <section>
				        <RegistrationForm />
				    	<LoginForm />     
				    </section>
				</main>
				<footer>Footer</footer>	
			
		</div>
	);
}

const mapStateToProps = state => ({
	currentUser: state.ourtinerary.currentUser,
	loggedIn: state.ourtinerary.currentUser !== null,
	ourtinerary: state.ourtinerary
});

export default connect(mapStateToProps)(Landing);