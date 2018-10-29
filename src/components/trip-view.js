import React from 'react';
import ItineraryList from './itinerary-list'
import './trip-view.css'

export default function TripView(props) {
	const list = [
		{
			type: 'Hotel',
			name: 'Mariot',
			confirmed: false,
			price: 500,
			pool: 'Yes',
			website: 'mariot.com',
			other: 'Close to the airport',
			votes: {
				collaborator1: 'Yes',
				collaborator2: 'Yes',
				collaborator3: null,
				collaborator4: 'No'
			}
			
		},

		{
			type: 'Hotel',
			name: 'Motel 6',
			confirmed: true,
			price: 300,
			pool: 'Yes',
			website: 'motel6.com',
			other: '',
			votes: {
				collaborator1: 'yes',
				collaborator2: 'Yes',
				collaborator3: 'Yes',
				collaborator4: 'Yes'
			}
			
		},
		{
			type: 'Restaurant',
			name: 'Yum Yum',
			catagory: 'chinese',
			confirmed: true,
			price: 'cheap',
			website: 'yumyum.com',
			other: 'super yelp reviews',
			votes: {
				collaborator1: 'Yes',
				collaborator2: 'Yes',
				collaborator3: 'Yes',
				collaborator4: 'Yes'
			}
		},
		{
			type: 'Activity',
			name: 'National Art Museum',
			confirmed: false,
			price: 'free',
			location: 'googlemaps.link',
			website: 'museum.com',
			votes: {collaborator1: 'No',
				collaborator2: 'Yes',
				collaborator3: 'No',
				collaborator4: 'Yes'
			}
		}
	]


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

        		<h2>Suggested Itinerary Items</h2>
          
          		<section>
          			<ItineraryList list={list} />
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