import React from 'react';
import ItineraryList from './itinerary-list';
import NewItineraryForm from './new-itinerary-item-form';
import EditTripForm from './edit-trip-form';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import pencil from '../screenshots/pencil.png'
import './trip-view.css';

export class TripView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editTripForm: false
        }
    }
  
    toggleEditTripForm(e) {
        this.setState({
            editTripForm: !this.state.editTripForm
        })
    }

    render() {
        const collaboratorsHTML = this.props.trip ? this.props.trip.collaborators.map(collaborator => <li key={collaborator.toString()} >{collaborator}</li>) :'';
      	const tripNameHTML = this.props.trip ? <h2>{this.props.trip.name}<img onClick={(e) => this.toggleEditTripForm(e)} src={pencil} alt="edit-pencil"></img></h2> : '';
        const tripLocationHTML = this.props.trip ? <div className="where"><h3>Where:</h3><p>{this.props.trip.location}</p></div>: '';
        const tripDatesHTML = this.props.trip ? <div className="when"><h3>When:</h3><p>{this.props.trip.dates}</p></div> : '';
        const editTripFormHTML = this.state.editTripForm ? <EditTripForm trip={this.props.trip}/> : '';

        return (
            <div aria-live="assertive">
                <main role="main">
                    <section role="region" className='trip-details'>
                        <div className='trip-name'>
                            {tripNameHTML}
                        </div>
                        <div className="where-when">
                            {tripLocationHTML}
                            {tripDatesHTML}
                        </div>
                        <h3>Who's Going:</h3>
                        <ul> 
                            {collaboratorsHTML} 
                        </ul>
                        {editTripFormHTML}
                    </section>
            
                    <section role="region">
                        <h2 className='itinerary-header'>Suggested Itinerary Items</h2>
                        <div className="itinerary-list-wrapper">
                        <ItineraryList trip={this.props.trip} />
                        </div>
                    </section>

                    <section role="region">
                        <NewItineraryForm trip={this.props.trip}/>
                    </section>
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

export default withRouter(connect(mapStateToProps)(TripView));
