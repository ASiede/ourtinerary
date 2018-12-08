import React from 'react';
import {shallow, mount} from 'enzyme';
import {ItineraryList} from './itinerary-list';

describe('<ItineraryList />', () => {
    it('Renders without crashing', () => {
        shallow(<ItineraryList />);
    });
});