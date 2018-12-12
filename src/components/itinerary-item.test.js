import React from 'react';
import {shallow, mount} from 'enzyme';

import {ItineraryItem, handleDeleteItineraryItem} from './itinerary-item';
import {deleteItineraryItem} from '../actions';

const mockDeleteItineraryItemAction = {
    type: 'DELETE_ITINERARY_ITEM'
};
jest.mock('../actions', () => Object.assign({},
    require.requireActual('../actions'),
    {
        fetchBoard: jest.fn().mockImplementation(() => {
            return mockDeleteItineraryItemAction;
        })
    }
));

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

    //DOES NOT WORK

    // it('Dispatches deleteItineraryItem on click', () => {
    //     const dispatch = jest.fn();
    //     const trip = {id : "123456"};
    //     const itineraryItem = {id: "123"}
    //     const wrapper = shallow(<ItineraryItem itineraryItem={itineraryItem} item={item} trip={trip} dispatch={dispatch} />);
    //     const icon = wrapper.find('.trash-icon')
    //     icon.simulate('click', itineraryItem)
    //     window.confirm = jest.fn(() => true)
    // 	expect(dispatch).toHaveBeenCalledWith(mockDeleteItineraryItemAction);
    // });

});