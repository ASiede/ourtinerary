import React from 'react';
import {connect} from 'react-redux';

export class ItineraryItem extends React.Component { 
    constructor(props) {
      super(props);
    }

    // handleToggleConfirm() {
    //   return this.props.dispatch(toggleConfirm(this.props.trip.id, this.props.item))
    // }

    render() {

    console.log(this.props)  
    console.log(this.props.trip.id)

    const confirmedText = this.props.item.confirmed ? 'Confirmed' : 'Unconfirmed';
    const confirmButtonText = this.props.item.confirmed ? 'Unconfirm' : 'Confirm';

    const priceHTML = this.props.item.price ? <li>Price: {this.props.item.price}</li> : '';
    const categoryHTML = this.props.category ? <li>categoryetc</li> : '';
    const poolHTML = this.props.item.pool ? <li>Pool: {this.props.item.pool}</li> : '';
    const websiteHTML = this.props.item.website ? <li>Website: {this.props.item.website}</li> : '';
    const otherHTML = this.props.item.other ? <li>Other: {this.props.item.other}</li> : '';
    const locationHTML = this.props.item.location ? <li>Location: {this.props.item.location}</li> : '';

    const itineraryItem = this.props.item

    console.log('👍 👎')

    const votesHTML = this.props.trip.collaborators.map(collaborator => {
        if(this.props.currentUser === collaborator) {
          return <li>{collaborator}: {itineraryItem.votes[`${collaborator}`]}<span>👍 👎</span></li>
          } else {
            return <li>{collaborator}: {itineraryItem.votes[`${collaborator}`]}</li>
          }
        }
      );

    // const confirmButton = (this.props.currentUser === this.props.trip.tripleader) ? <button onClick={() => this.handleToggleConfirm()}>{confirmButtonText}</button> : '';
    
    console.log(this.props.currentUser) 
    console.log(this.props.trip.tripleader)  



    if (this.props.currentUser === this.props.trip.tripleader) {
     console.log('yes')
    } else {console.log('no')}

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




