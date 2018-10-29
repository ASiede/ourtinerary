import React from 'react';
import './itinerary-list.css'

export default function ItineraryList(props) {
	const list = props.list.map((item, index) => {

		return (
			<div key={index}>
				<h3>{item.type}</h3>
				<h4>{item.name}</h4>
				<button>Confirm?</button>
				<ul>
					<li>Price: ${item.price}</li>
					<li>Pool: {item.pool}</li>
					<li>Catagory: {item.catagory}</li>
					<li>Website: {item.website}</li>
					<li>Other: {item.other}</li>
					<li>Location: {item.location}</li>
				</ul>
				<ul>Votes
					<li>Collaborator1: {item.votes.collaborator1}</li>
					<li>Collaborator2: {item.votes.collaborator2}</li>
					<li>Collaborator3: {item.votes.collaborator3}</li>
					<li>Collaborator4: {item.votes.collaborator4}</li>
				</ul>
			</div>
		)
	})

	return (
		<div>{list}</div>
	);
}