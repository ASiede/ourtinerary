import React from 'react';
import RegistrationForm from './registration-form';
import {connect} from 'react-redux';
import LoginForm from './login-form';
import { withRouter } from 'react-router'
import './landing.css';


export function Landing(props) {
	if(props.loggedIn) {
		props.history.push(`/user/${props.currentUser}`);
	}

	return (
		<div>
			<main>
				
			    <section className="short-description">
			    	
			    	<h2>The best place to plan your next trip with friends!</h2>
			    </section>

			    <section className="long-description">
			    	<h2> Want to know how it works?</h2>
			    	<p>Start by signing up and creating a trip! It's that easy</p>
			    		<img src="screen-shot-1.png" alt="screenshot"></img>
			    	<p>Add to the trip who will be going. If they are not registered yet, they will get and email invite to join</p>
			    	<p>You and your fellow collaborators can suggest things to do on the trip</p>
			    		<p>[image placehoder]</p>
			    	<p>Everyone gets to give and thumbs up or down on the different suggestions.</p>
			    	<p>Finally: enjoy your trip!</p>		
			    </section>

			    <section className="registration-and-login">
			        
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

export default withRouter(connect(mapStateToProps)(Landing));




