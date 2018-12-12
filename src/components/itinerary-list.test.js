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
});