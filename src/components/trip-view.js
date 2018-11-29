import React from 'react';
import ItineraryList from './itinerary-list';
import NewItineraryForm from './new-itinerary-item-form';
import {connect} from 'react-redux';
import {deleteTrip} from '../actions'
import './trip-view.css'

export class TripView extends React.Component {
	
    componentDidMount() {
    // this.props.dispatch(getTrip(this.props.tripId))
    }

    handleDeleteTrip(trip) {
      this.props.dispatch(deleteTrip(trip))
      return this.props.history.push('/')
    }

    render() {
        console.log(this.props.ourtinerary)
        const collaboratorsHTML = this.props.trip ? this.props.trip.collaborators.map(collaborator => <li key={collaborator.toString()} >{collaborator}</li>) :''
      	

        return (
      		<div>
      			<header>
            			<h1>OURtinerary</h1>
          	</header>
                <main>
                  <section>
                    <h2>{this.props.trip.name}</h2>
                    <h3>{this.props.trip.location}</h3>
                    <h3>{this.props.trip.dates}</h3>
                    <ul>Collaborators: 
                      {collaboratorsHTML} 
                    </ul>
                    <button type="click" onClick={() => this.handleDeleteTrip(this.props.trip)}>Delete Trip</button>
                  </section>
                
                    <section>
                    <h2 className='itinerary-header'>Suggested Itinerary Items</h2>
                        <ItineraryList trip={this.props.trip} />

                    </section>


                    <section>
                      <NewItineraryForm trip={this.props.trip}/>
                    </section>

                <footer>Footer</footer>
              </main>

          	</div>	
      	);
  }
}

const mapStateToProps = (state, props) => {
	const tripId = props.match.params.tripId;
  const ourtinerary = state.ourtinerary
	const trips = state.ourtinerary.trips
  const trip = trips.find(trip => trip.id === tripId)

    return {
        tripId,
        trips,
        trip,
        ourtinerary
    };
};

export default connect(mapStateToProps)(TripView);




                      





