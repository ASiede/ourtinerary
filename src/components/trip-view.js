import React from 'react';
import ItineraryList from './itinerary-list';
import NewItineraryForm from './new-itinerary-item-form';
import EditTripForm from './edit-trip-form'
import {connect} from 'react-redux';
import {getTrip} from '../actions'
import './trip-view.css'

export class TripView extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            editTripForm: false
        }
    }

    componentDidMount() {
      if(!this.props.trip) {
        
      }
    } 



    toggleEditTripForm(e) {
        this.setState({
            editTripForm: !this.state.editTripForm
        })
    }

    render() {
        const collaboratorsHTML = this.props.trip ? this.props.trip.collaborators.map(collaborator => <li key={collaborator.toString()} >{collaborator}</li>) :'';
      	const tripNameHTML = this.props.trip ? <h2>{this.props.trip.name}</h2> : '';
        const tripLocationHTML = this.props.trip ? <h3>{this.props.trip.location}</h3>: '';
        const tripDatesHTML = this.props.trip ? <h3>{this.props.trip.dates}</h3> : '';

        const editTripFormHTML = this.state.editTripForm ? <EditTripForm tripId={this.props.trip.id}/> : '';

        let toggleEditTripHTML = '';

        if (this.props.trip.tripLeader && (this.props.trip.tripLeader === this.props.ourtinerary.currentUser.username)) {
            toggleEditTripHTML = <button type="click" onClick={(e) => this.toggleEditTripForm(e)}>Toggle Edit Options</button>
        }

        return (
            <div>
                <header>
            			 <h1>OURtinerary</h1>
                </header>
                    <main>
                        <section>
                            {tripNameHTML}
                            {tripLocationHTML}
                            {tripDatesHTML}
                            <ul>Collaborators: 
                                {collaboratorsHTML} 
                            </ul>
                            
                            {toggleEditTripHTML}
                            {editTripFormHTML}
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




                      





