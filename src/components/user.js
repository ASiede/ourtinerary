import React from 'react';
import NewTripForm from './new-trip-form';
import TripList from './trip-list';

export default function User(props) {
	const trips = [
		{
			name: 'NYC'
		},
		{
			name: 'Paris'
		},
		{
			name: 'Spring Break'
		}
	]

	return (
		<div>
			<header>
				<h1>OURtinerary</h1>
			</header>
			<main>
	      		<section>
	        		<h2>Your Trips</h2>
				        <TripList trips={trips} />
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