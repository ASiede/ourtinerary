import React from 'react';
import {shallow, mount} from 'enzyme';

import ItineraryItem from './itinerary-item';

describe('<ItineraryItem />', () => {
    it('Renders without crashing', () => {
        shallow(<ItineraryItem />);
    });
});