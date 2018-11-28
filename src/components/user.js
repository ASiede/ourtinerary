import React from 'react';
import {connect} from 'react-redux';
import {getTrips, getUser} from '../actions'
import NewTripForm from './new-trip-form';
import TripList from './trip-list';

export class User extends React.Component {
	
	componentDidMount() {
		
		//NEED TO GET TRIPS OF THE USER
		//GET USER
		this.props.dispatch(getUser(this.props.currentUser.id))
	}
	
	render() {
		console.log(this.props.ourtinerary)
		const user = this.props.ourtinerary.users.find(user => user.id === this.props.currentUser.id)
		console.log(user)
		const trip = []
		const trips = user ? user.trips : []
		console.log(trips);
		// const trips = user.trips.length > 0 ?
		// 			user.trips.map(tripId => this.props.ourtinerary.trips.find(trip => trip.id === tripId)) : "";

		// const tripComponent = user.trips ? <TripList trips={user.trips}/> : <p>You have no trips yet. Create a trip below</p>;
		
		

		return (

			<div>
				<header>
					<h1>OURtinerary</h1>
				</header>
				<main>
		      		<section>
		        		<h2>Your Trips</h2>
					        {this.tripComponent}
		      		</section>

				    <section>
				        <h2>Create new trip</h2>
				        <button>Create!</button>
				    </section>

			        <section>
			        	<NewTripForm currentUser={this.props.username}/>
			        </section>

		      		<footer>Footer</footer>
		    	</main>
	    	</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	ourtinerary: state.ourtinerary,
	currentUser: state.ourtinerary.currentUser,
});

export default connect(mapStateToProps)(User);