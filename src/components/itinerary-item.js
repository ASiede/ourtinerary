import React from 'react';

export default function ItineraryItem(props) { 

    const confirmedText = props.item.confirmed ? 'Confirmed' : 'Unconfirmed';
    const confirmButtonText = props.item.confirmed ? 'Unconfirm' : 'Confirm';

    const priceHTML = props.item.price ? <li>Price: {props.item.price}</li> : '';
    const categoryHTML = props.category ? <li>categoryetc</li> : '';
    const poolHTML = props.item.pool ? <li>Pool: {props.item.pool}</li> : '';
    const websiteHTML = props.item.website ? <li>Website: {props.item.website}</li> : '';
    const otherHTML = props.item.other ? <li>Other: {props.item.other}</li> : '';
    const locationHTML = props.item.location ? <li>Location: {props.item.location}</li> : '';

    const itineraryItem = props.item

    const votesHTML = props.trip.collaborators.map(collaborator => 
        <li>{collaborator}: {itineraryItem.votes[`${collaborator}`]}</li>
      );

    console.log(votesHTML)

    return (
        <div>
          <h3>{props.item.type}</h3>
          <h4>{props.item.name}</h4>
          <h5>({confirmedText})</h5>

          <button>{confirmButtonText}</button>

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
    ) 
}
