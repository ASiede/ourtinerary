import React from 'react';
import {connect} from 'react-redux';
import {editVote, getItineraryItem, deleteItineraryItem} from '../actions/index';
import Vote from './vote'

export class ItineraryItem extends React.Component { 
    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }

     handleDeleteItineraryItem(itineraryItem) {
      // ADD AN ARE YOU SURE
      this.props.dispatch(deleteItineraryItem(itineraryItem, this.props.trip.id))
      
      
    }

    render() {
        //ADD CONFIRMATION BUTTON
        const flightNumberHTML = this.props.item.flightNumber ? <li>Price: {this.props.item.flightNumber}</li> : '';
        const confirmedHTML = this.props.item.confirmed ? <li>Price: {this.props.item.confirmed}</li> : '';
        const priceHTML = this.props.item.price ? <li>Price: {this.props.item.price}</li> : '';
        const foodTypeHTML = this.props.item.foodType ? <li>Price: {this.props.item.foodType}</li> : '';
        const poolHTML = this.props.item.pool ? <li>Pool: {this.props.item.pool}</li> : '';
        const websiteHTML = this.props.item.website ? <li>Website: {this.props.item.website}</li> : '';
        const otherHTML = this.props.item.other ? <li>Other: {this.props.item.other}</li> : '';

        const itineraryItemVotes = this.props.item.votes ? this.props.item.votes : [];
        
        const typeHTML = this.props.item ? <h3>{this.props.item.type}</h3> : '';
        const nameHTML = this.props.item ? <h4>{this.props.item.name}</h4> : '';

        const voteHTML = this.props.item.votes.map(vote => { 
          return (
          <Vote key={vote.id} voteId={vote} />
          )
        })
    
        return (
            <div>
                <button type="click" onClick={() => this.handleDeleteItineraryItem(this.props.item._id)}>Delete ItineraryItem</button>
                <h3>{typeHTML}</h3>
                <h4>{nameHTML}</h4>  

                <ul>
                    {flightNumberHTML}
                    {priceHTML}
                    {foodTypeHTML}
                    {poolHTML}
                    {websiteHTML}
                    {otherHTML}
                </ul>
                <ul>Votes
                    {voteHTML}
                </ul>
            </div>
        )} 
}

const mapStateToProps = state => ({
  currentUser: state.ourtinerary.currentUser,
  ourtinerary: state.ourtinerary
  
});

export default connect(mapStateToProps)(ItineraryItem);




