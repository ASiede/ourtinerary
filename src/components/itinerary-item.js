import React from 'react';
import {connect} from 'react-redux';
import {deleteItineraryItem} from '../actions/index';
import Vote from './vote'
import './itinerary-item.css'

export class ItineraryItem extends React.Component { 

    handleDeleteItineraryItem(itineraryItem) {
      this.props.dispatch(deleteItineraryItem(itineraryItem, this.props.trip.id))
    }

    render() {
        //ADD CONFIRMATION BUTTON
        const linkString = this.props.item.website;
        // const confirmedHTML = this.props.item.confirmed ? <li>confirmed: {this.props.item.confirmed}</li> : '';
        const flightNumberHTML = this.props.item.flightNumber ? <li>Flight Number: {this.props.item.flightNumber}</li> : '';
        const layoversHTML = this.props.item.layovers ? <li>Layovers: {this.props.item.layovers}</li> : '';
        const lengthHTML = this.props.item.length ? <li>Length: {this.props.item.length}</li> : '';
        const departureTimeArrivalTimeHTML = this.props.item.departureTimeArrivalTime ? <li>Departure Time/ArrivalTime: {this.props.item.departureTimeArrivalTime}</li> : '';
        const priceHTML = this.props.item.price ? <li>Price: {this.props.item.price}</li> : '';
        const locationHTML = this.props.item.location ? <li>Location: {this.props.item.location}</li> : '';
        const poolHTML = this.props.item.pool ? <li>Pool: {this.props.item.pool}</li> : '';
        const foodTypeHTML = this.props.item.foodType ? <li>Foot Type: {this.props.item.foodType}</li> : '';
        const websiteHTML = this.props.item.website ? <li>Website: <a href={"http://"+linkString} target="_blank">{this.props.item.website}</a></li> : '';
        const otherHTML = this.props.item.other ? <li>Other: {this.props.item.other}</li> : '';
        const itineraryItemVotes = this.props.item.votes ? this.props.item.votes : [];
        const typeHTML = this.props.item ? <h3>{this.props.item.type}</h3> : '';
        const nameHTML = this.props.item ? <h4>{this.props.item.name}</h4> : '';
        
        const voteIds = this.props.item.votes.sort();

        const voteHTML = voteIds.map(vote => { 
            return (
                <Vote key={vote.id} voteId={vote} />
            )
        })
    
        return (
            <div className="itinerary-item">
                <div className="type-wrapper">
                <h3>{typeHTML}</h3>
                <img 
                    onClick={() => {if (window.confirm('Are you sure you wish to delete this itinerary item? This action cannot be undone.')) this.handleDeleteItineraryItem(this.props.item._id)}}
                    className="trash-icon" 
                    src="https://img.icons8.com/metro/1600/delete.png" 
                    alt="trash">
                </img>
                </div>

                <h4>{nameHTML}</h4>  
                <div className="itinerary-item-info">
                <ul>
                    {flightNumberHTML}
                    {layoversHTML}
                    {lengthHTML}
                    {departureTimeArrivalTimeHTML}
                    {priceHTML}
                    {locationHTML}
                    {poolHTML}
                    {foodTypeHTML}
                    {websiteHTML}
                    {otherHTML}
                </ul>
                </div>
                <ul className="votes-list">Votes
                    {voteHTML}
                </ul>
            </div>
        )
    } 
}

const mapStateToProps = state => ({
    currentUser: state.ourtinerary.currentUser,
    ourtinerary: state.ourtinerary
  
});

export default connect(mapStateToProps)(ItineraryItem);




