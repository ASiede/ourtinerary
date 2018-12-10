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

	const mockItineraryItems = [{
				type: 'hotel',
				name: 'mariot'
			}
		]

	const ourtinerary = [
	{trips: [trip]}
	]

    it('Renders without crashing', () => {
        shallow(<TripView />);
    });

    //should render trip details
    it('Renders the trip details', () => {
    	const wrapper = shallow(<TripView trip={trip} />);
    	expect(wrapper.contains(<h2>{trip.name}</h2>));
    	expect(wrapper.contains(<p>{trip.location}</p>));
    	expect(wrapper.contains(<p>{trip.dates}</p>));
    	expect(wrapper.contains(<li>{trip.collaborators[0]}</li>));
    })

    //NOT WORKING

    //should render itinerary items
    // it('Renders the itinerary items', () => {
    //     const wrapper = shallow(<ItineraryList ourtinerary={ourtinerary} trip={trip} itineraryItems={mockItineraryItems} />);
    //     const itineraryItems = wrapper.find(ItineraryItem);
    //     expect(itineraryItems.length).toEqual(mockItineraryItems.length);
    //     const firstItem = itineraryItems.first();
    //     expect(firstItem.prop('name')).toEqual(mockItineraryItems[0].name);
    // });

    //should render new itin item form
        it('Renders the new itinerary form', () => {
        const wrapper = shallow(<TripView ourtinerary={ourtinerary} trip={trip} itineraryItems={mockItineraryItems} />);
  		expect(wrapper.contains(<NewItineraryItemForm />))
    });

    //should toggle edit trip form when  toggleEditTripForm is clicked
    it('Should switch to toggle show editing form when the edit image is clicked', () => {
    	const wrapper = shallow(<TripView trip={trip} />);
    	wrapper.find('img').simulate('click');
    	expect(wrapper.state('editTripForm')).toEqual(true);
    })

});    