import React from 'react';
import ItineraryList from './itinerary-list';
import NewItineraryForm from './new-itinerary-item-form';
import {connect} from 'react-redux';
import {getTrip} from '../actions'
import './trip-view.css'

export class TripView extends React.Component {
	
  componentDidMount() {
    // this.props.dispatch(getTrip(this.props.tripId))
  }
    render() {
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
	const trips = state.ourtinerary.trips
  const trip = trips.find(trip => trip.id === tripId)

    return {
        tripId,
        trips,
        trip
    };
};

export default connect(mapStateToProps)(TripView);




                      





