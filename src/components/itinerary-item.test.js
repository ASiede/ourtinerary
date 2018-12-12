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

    it('Renders the type', () => {
        const wrapper = shallow(<ItineraryItem item={item} />);
        expect(wrapper.contains(<h3>{item.type}</h3>));
    });

    it('Renders the name', () => {
        const wrapper = shallow(<ItineraryItem item={item} />);
        expect(wrapper.contains(<h4>{item.name}</h4>)).toEqual(true);
    });

    it('Renders correct HTML elements ', () => {
        const wrapper = shallow(<ItineraryItem item={item} />);
        expect(wrapper.find('.itinerary-item').exists()).toEqual(true);
        expect(wrapper.find('.trash-icon').exists()).toEqual(true);
        expect(wrapper.find('.itinerary-item-info').exists()).toEqual(true);
        expect(wrapper.find('.votes-list').exists()).toEqual(true);
    });

});