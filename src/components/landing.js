import React from 'react';
import RegistrationForm from './registration-form';
import {connect} from 'react-redux';
import LoginForm from './login-form';
import { withRouter } from 'react-router';
import newtrip from '../screenshots/newtrip.png';
import tripview from '../screenshots/tripview.png';
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
			    		<img src={newtrip} alt="new trip view"></img>
			    	<p>Make sure to add who will be going on the trip with you. If they are not registered yet, they will get an email invite to join and become a collaborator</p>
			    	<p>You and your collaborators can then view the trip and contribute ideas for itinerary items.</p>
			    		<img src={tripview} alt="trip view"></img>
			    	<p>Everyone gets to vote on what they think about each itinerary item.</p>
			    	<p>Finally, go enjoy your trip!</p>		
			    </section>
			</main>
		</div>
	);
}

const mapStateToProps = state => ({
	currentUser: state.ourtinerary.currentUser,
	loggedIn: state.ourtinerary.currentUser !== null,
	ourtinerary: state.ourtinerary
});

export default withRouter(connect(mapStateToProps)(Landing));




