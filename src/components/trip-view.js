import React from 'react';
import ItineraryList from './itinerary-list';
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
			        <h3>Add an itinerary Item</h3>
			        <form>
			          <label>Type of Activity</label><br />
			          <select>
			            <option>Flight</option>
			            <option default>Hotel</option>
			            <option>Restaurants/Bars</option>
			            <option>Activities</option>
			            <option>Events</option>
			            <option>Shopping</option>
			            <option>Other</option>
			          </select><br />
			          <label>Name</label><br />
			          <input type="text"></input><br /> 
			          <label>Price</label><br />
			          <input type="text"></input><br />
			          <label>Pool</label><br />
			          <input type="text"></input><br />
			          <label>Website Link</label><br />
			          <input type="text"></input><br />
			          <label>Other</label><br />
			          <input type="text"></input><br />
			          <button type="submit">Submit</button>
			        </form>
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










