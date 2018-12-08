import React from 'react';
import {shallow, mount} from 'enzyme';

import {ItineraryItem, handleDeleteItineraryItem} from './itinerary-item';
import {deleteItineraryItem} from '../actions';

describe('<ItineraryItem />', () => {
	const item = {
		id: "1234567",
		website: 'www.google.com',
		votes: ["12345"],
		name: 'mariot',
		price: '$4',
		flightNumber: 'DL 4',
		layovers: '2',
		departureTimeArrivalTime: '4am',
		length: '6 hours',
		location: 'southeast',
		pool: 'yes',
		foodType: 'thai',
		other: 'looks fun',
		type: 'Hotel'
	}
    it('Renders without crashing', () => {
        shallow(<ItineraryItem item={item} />);
    });

    //Renders all the itinerary information

    it('Renders the type', () => {
        const wrapper = shallow(<ItineraryItem item={item} />);
        expect(wrapper.contains(<h3>{item.type}</h3>));
    });

    it('Renders the name', () => {
        const wrapper = shallow(<ItineraryItem item={item} />);
        expect(wrapper.contains(<h4>{item.name}</h4>));
    });

    it('Renders list of itinerary information pieces', () => {
        const wrapper = shallow(<ItineraryItem item={item} />);
        expect(wrapper.contains(<li>{item.flightNumber}</li>));
        expect(wrapper.contains(<li>{item.layovers}</li>));
        expect(wrapper.contains(<li>{item.length}</li>));
        expect(wrapper.contains(<li>{item.departureTimeArrivalTime}</li>));
        expect(wrapper.contains(<li>{item.price}</li>));
        expect(wrapper.contains(<li>{item.location}</li>));
        expect(wrapper.contains(<li>{item.pool}</li>));
        expect(wrapper.contains(<li>{item.foodType}</li>));
        expect(wrapper.contains(<li>{item.website}</li>));
        expect(wrapper.contains(<li>{item.other}</li>));
    });

    it('Renders the votes', () => {
        const wrapper = shallow(<ItineraryItem item={item} />);
        expect(wrapper.contains(<ul>{item.votes}</ul>));
    });

    //dispatches delete action

    it('Dispatches deleteItineraryItem on click', () => {
        const dispatch = jest.fn();
        const trip = {id : "123456"};
        const wrapper = shallow(<ItineraryItem item={item} trip={trip} dispatch={dispatch} />);
    	const instance = wrapper.instance();
    	instance.handleDeleteItineraryItem(item);
    	expect(dispatch).toHaveBeenCalledWith(deleteItineraryItem(item, trip.id));


    });






});