import React from 'react';
import {connect} from 'react-redux';
import {getUser} from '../actions'
import NewTripForm from './new-trip-form';
import TripList from './trip-list';
import { withRouter } from 'react-router'
import './user.css'

export class User extends React.Component {
	constructor(props) {
        super(props)
    }

	componentDidMount() {
		this.props.dispatch(getUser(this.props.currentUser.id))
	}
	
	render() {
		const user = this.props.ourtinerary.users.find(user => user.id === this.props.currentUser.id)
		let userTrips = []
		userTrips = user ? user.trips : []
		const tripComponent = userTrips && userTrips.length>0 ? <TripList user={user}/> : <p>You have no trips yet. Create a trip below</p>;
		
		return (
			<div className="user">
				<main>
		      		<section className="browse-trips">
		      			<div className="h2-wrapper">
		        		<h2>Browse Your Trips</h2>
		        		</div>   
					        {tripComponent}
					     
		      		</section>

			        <section>
			        	<NewTripForm currentUser={this.props.currentUser.username}/>
			        </section>
		    	</main>
	    	</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	ourtinerary: state.ourtinerary,
	currentUser: state.ourtinerary.currentUser,
});

export default withRouter(connect(mapStateToProps)(User));



