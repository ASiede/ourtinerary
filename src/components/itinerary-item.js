import React from 'react';
import {connect} from 'react-redux';
import {editVote} from '../actions/index';

export class ItineraryItem extends React.Component { 
    constructor(props) {
      super(props);
    }

    // handleToggleConfirm() {
    //   return this.props.dispatch(toggleConfirm(this.props.trip.id, this.props.item))
    // }

    handleVote(vote){
      return this.props.dispatch(editVote(vote, this.props.item.id, this.props.trip.id, this.props.currentUser));
    }



    render() {

    const confirmedText = this.props.item.confirmed ? 'Confirmed' : 'Unconfirmed';
    const confirmButtonText = this.props.item.confirmed ? 'Unconfirm' : 'Confirm';

    const priceHTML = this.props.item.price ? <li>Price: {this.props.item.price}</li> : '';
    const categoryHTML = this.props.category ? <li>categoryetc</li> : '';
    const poolHTML = this.props.item.pool ? <li>Pool: {this.props.item.pool}</li> : '';
    const websiteHTML = this.props.item.website ? <li>Website: {this.props.item.website}</li> : '';
    const otherHTML = this.props.item.other ? <li>Other: {this.props.item.other}</li> : '';
    const locationHTML = this.props.item.location ? <li>Location: {this.props.item.location}</li> : '';

    const itineraryItem = this.props.item

    const votesHTML = this.props.trip.collaborators.map(collaborator => {

        if(itineraryItem.votes[collaborator] && (itineraryItem.votes[collaborator] === 'Yes')) {
            return <li key={collaborator.toString()} >{collaborator}: 👍</li>

            } else if (itineraryItem.votes[collaborator] && (itineraryItem.votes[collaborator] === 'No')){
              return <li key={collaborator.toString()}>{collaborator}: 👎</li>

            } else if(this.props.currentUser === collaborator) {
              return <li key={collaborator.toString()}>{collaborator}: {itineraryItem.votes[`${collaborator}`]}<span onClick={() => this.handleVote('Yes')}>👍</span><span onClick={() => this.handleVote('No')}>👎</span></li>

            } else {
            return <li key={collaborator.toString()}>{collaborator}: {itineraryItem.votes[`${collaborator}`]}</li>
            }
        
    });

    // const confirmButton = (this.props.currentUser === this.props.trip.tripleader) ? <button onClick={() => this.handleToggleConfirm()}>{confirmButtonText}</button> : '';
    
      return (
        <div>
          <h3>{this.props.item.type}</h3>
          <h4>{this.props.item.name}</h4>  

          <ul>
            {priceHTML}
            {poolHTML}
            {categoryHTML}
            {websiteHTML}
            {otherHTML}
            {locationHTML}
          </ul>
          <ul>Votes
            {votesHTML}
          </ul>
        </div>
    )} 
}

const mapStateToProps = state => ({
  currentUser: state.ourtinerary.currentUser,
  loggedIn: state.ourtinerary.currentUser !== null,
  
});

export default connect(mapStateToProps)(ItineraryItem);




