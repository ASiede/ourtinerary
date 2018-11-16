import React from 'react';
import ItineraryList from './itinerary-list';
import NewItineraryForm from './new-itinerary-item-form';
import {connect} from 'react-redux';
import './trip-view.css'

export function TripView(props) {
	
	const itineraryItems = props.trip.itineraryItems;
	console.log(itineraryItems)

	return (
		<div>
			<header>
      			<h1>OURtinerary</h1>
    		</header>

    		<main>
      			<section>
			        <h2>Trip 1 Name</h2>
			        <h3>Trip 1 Location</h3>
			        <h3>Start Date - End Date</h3>
			        <h3>Collaborator 1, Collaborator 2, Collaborator 3, Collaborator 4</h3>
			    </section>
          
          		<section>
          			<h2 className='itinerary-header'>Suggested Itinerary Items</h2>
          			<ItineraryList itineraryItems={itineraryItems} />
          		</section>


          		<section>
          			<NewItineraryForm tripId={props.tripId}/>
          		</section>

			  

			    <footer>Footer</footer>
    		</main>
    	</div>	
	);
}

const mapStateToProps = (state, props) => {
	const tripId = props.match.params.tripId;
	const trip = state.ourtinerary.trips.find(trip => trip.id == tripId);

    return {
        tripId,
        trip
    };
};

export default connect(mapStateToProps)(TripView);










