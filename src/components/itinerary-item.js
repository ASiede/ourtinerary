import React from 'react';
import {connect} from 'react-redux';
import {editVote, getItineraryItem} from '../actions/index';
import Vote from './vote'

export class ItineraryItem extends React.Component { 
    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }

    render() {
        //NOT ALL CATAGORIES ARE HERE

        const priceHTML = this.props.item.price ? <li>Price: {this.props.item.price}</li> : '';
        const poolHTML = this.props.item.pool ? <li>Pool: {this.props.item.pool}</li> : '';
        const websiteHTML = this.props.item.website ? <li>Website: {this.props.item.website}</li> : '';
        const otherHTML = this.props.item.other ? <li>Other: {this.props.item.other}</li> : '';
        const locationHTML = this.props.item.location ? <li>Location: {this.props.item.location}</li> : '';

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
                <h3>{typeHTML}</h3>
                <h4>{nameHTML}</h4>  

                <ul>
                    {priceHTML}
                    {poolHTML}
                    {websiteHTML}
                    {otherHTML}
                    {locationHTML}
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




