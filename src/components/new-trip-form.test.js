import React from 'react';
import {shallow, mount} from 'enzyme';
import {createNewTrip} from '../actions';
import {NewTripForm} from './new-trip-form';

describe('<NewTripForm />', () => {
    it('Renders without crashing', () => {
        shallow(<NewTripForm  handleSubmit={fn => fn}/>);
    });  
}); 