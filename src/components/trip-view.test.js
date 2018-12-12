import React from 'react';
import {shallow, mount} from 'enzyme';

import {TripView} from './trip-view';
import {ItineraryList} from './itinerary-list';
import NewItineraryItemForm from './new-itinerary-item-form';

describe('<TripView />', () => {
	
	const trip = {
		id: '123',
		name: 'fun trip',
		dates: 'today',
		location: 'north',
		collaborators: ['Delores', 'Teddy'],
		itineraryItems: [{
				type: 'hotel',
				name: 'mariot'
			}
		]
	}

    it('Renders without crashing', () => {
        shallow(<TripView />);
    });

    it('Renders the HTML elements', () => {
    	const wrapper = shallow(<TripView trip={trip} />);
    	expect(wrapper.find('.trip-details').exists()).toEqual(true);
        expect(wrapper.find('.trip-name').exists()).toEqual(true);
        expect(wrapper.find('.itinerary-list-wrapper').exists()).toEqual(true);
    })

    it('Should switch to toggle show editing form when the edit image is clicked', () => {
    	const wrapper = shallow(<TripView trip={trip} />);
    	wrapper.find('img').simulate('click');
    	expect(wrapper.state('editTripForm')).toEqual(true);
    })

});


    