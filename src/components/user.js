import React from 'react';
import {connect} from 'react-redux';
import {getTrips, getUser} from '../actions'
import NewTripForm from './new-trip-form';
import TripList from './trip-list';

export class User extends React.Component {
	
	componentDidMount() {
		this.props.dispatch(getUser(this.props.currentUser.id))
	}
	
	render() {
		const user = this.props.ourtinerary.users.find(user => user.id === this.props.currentUser.id)

		let userTrips = []
		userTrips = user ? user.trips : []

		const tripComponent = userTrips ? <TripList user={user}/> : <p>You have no trips yet. Create a trip below</p>;
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
			        	<NewTripForm currentUser={this.props.currentUser.username}/>
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