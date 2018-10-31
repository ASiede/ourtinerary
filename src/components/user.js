import React from 'react';
import {connect} from 'react-redux';
import NewTripForm from './new-trip-form';
import TripList from './trip-list';

export function User(props) {
	
	const trips = props.trips
	
	return (
		<div>
			<header>
				<h1>OURtinerary</h1>
			</header>
			<main>
	      		<section>
	        		<h2>Your Trips</h2>
				        <TripList trips={trips}/>
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

const mapStateToProps = (state, props) => {
	const username = props.match.params.username;
	const user = state.ourtinerary.users.find(user => user.username === username)
	const tripsById = user.tripsById
	const trips = tripsById.map(tripId => state.ourtinerary.trips.find(trip => trip.id === tripId));

    return {
        trips
    };
};

export default connect(mapStateToProps)(User);