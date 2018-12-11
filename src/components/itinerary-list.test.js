import React from 'react';
import {shallow, mount} from 'enzyme';
import {ItineraryList} from './itinerary-list';

describe('<ItineraryList />', () => {
    

    const trip1 = {
    	itineraryItems : []
    }

    const trip2 = {
    	itineraryItems: [
    		{
                id: '123',
                name: 'mariot'}
    	]
    }

    const ourtinerary = {
    	trips : [trip1]
    }
    

    it('Renders without crashing', () => {
        shallow(<ItineraryList ourtinerary={ourtinerary} trip={trip2}/>);
    });

    //NOT WORKING
    // it('Renders p if no itinerary items', () => {
    //     const wrapper = shallow(<ItineraryList trip={trip1} ourtinerary={ourtinerary}/>);
    //     expect(wrapper.contains(<p>This trip doesn't have any itinerary items yet.</p>));
    // });

    // it('Renders itinerary items if they exist', () => {
    //     const wrapper = shallow(<ItineraryList trip={trip1}/>);
    //     expect(wrapper.contains(<p>This trip doesn't have any itinerary items yet.</p>));
    // });    


});