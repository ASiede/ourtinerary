import React from 'react';
import {shallow, mount} from 'enzyme';

import EditTripForm from './edit-trip-form';

describe('<EditTripForm />', () => {
    it('Renders without crashing', () => {
        shallow(<EditTripForm />);
    });
});