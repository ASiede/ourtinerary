import React from 'react';
import {connect} from 'react-redux';
import {editVote} from '../actions/index';

export class ItineraryItem extends React.Component { 
    constructor(props) {
      super(props);
    }


    handleVote(voteId, status){
      const vote = {
              id: voteId,
              status: status
            }
      return this.props.dispatch(editVote(vote));
    }

    render() {
        console.log(this.props.ourtinerary)

        const itineraryItem = this.props.ourtinerary.itineraryItems.find(item => {return item.id === this.props.itemId})

        console.log(itineraryItem)

        const priceHTML = itineraryItem.price ? <li>Price: {itineraryItem.price}</li> : '';
        const poolHTML = itineraryItem.pool ? <li>Pool: {itineraryItem.pool}</li> : '';
        const websiteHTML = itineraryItem.website ? <li>Website: {itineraryItem.website}</li> : '';
        const otherHTML = itineraryItem.other ? <li>Other: {itineraryItem.other}</li> : '';
        const locationHTML = itineraryItem.location ? <li>Location: {itineraryItem.location}</li> : '';

        const itineraryItemVotes = itineraryItem.votes

        let votesHTML = '';
        votesHTML = itineraryItemVotes.length>0 ? itineraryItemVotes.map(vote => {

            if(vote.status === 'Yes') {
                return <li key={vote._id}>{vote.user.username} 👍</li>

                } else if (vote.status === 'No'){
                  return <li key={vote._id}>{vote.user.username} 👎</li>

                } else if(this.props.ourtinerary.currentUser.username === vote.user.username) {
                  return <li key={vote._id}>{vote.user.usernam}Choose your vote:<span onClick={() => this.handleVote(vote._id,'Yes')}>👍</span><span onClick={() => this.handleVote(vote._id, 'No')}>👎</span></li>

                } else {
                return <li key={vote._id}>{vote.user.username} hasn't voted yet </li>
                }    
        }) : '';
    
        return (
            <div>
                <h3>{itineraryItem.type}</h3>
                <h4>{itineraryItem.name}</h4>  

                <ul>
                    {priceHTML}
                    {poolHTML}
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
  ourtinerary: state.ourtinerary
  
});

export default connect(mapStateToProps)(ItineraryItem);




