import React from 'react';
import {connect} from 'react-redux';
import NewTripForm from './new-trip-form';
import TripList from './trip-list';

export function User(props) {
	console.log(props.ourtinerary)
	console.log(props.username)

	const user = props.ourtinerary.users.find(user => user.username === props.username);	
	console.log(user)
	
	
	console.log(props.ourtinerary.trips)

	const trips = user.tripsById.length > 0 ?
				user.tripsById.map(tripId => props.ourtinerary.trips.find(trip => trip.id === tripId)) : "";
	
	const tripComponent = trips ? <TripList trips={trips}/> : <p>You have no trips yet. Create a trip below</p>;

	return (
		<div>
			<header>
				<h1>OURtinerary</h1>
			</header>
			<main>
	      		<section>
	        		<h2>Your Trips</h2>
				        {tripComponent}
	      		</section>

			    <section>
			        <h2>Create new trip</h2>
			        <button>Create!</button>
			    </section>

		        <section>
		        	<NewTripForm />
		        </section>

	      		<footer>Footer</footer>
	    	</main>
    	</div>
	);
}

const mapStateToProps = (state, props) => ({
	ourtinerary: state.ourtinerary,
	username: state.ourtinerary.currentUser,
	
});

export default connect(mapStateToProps)(User);