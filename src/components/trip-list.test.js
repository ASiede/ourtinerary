
import React from 'react';
import {shallow, mount} from 'enzyme';
import {TripList} from './trip-list';
import {getTrips} from '../actions'

describe('<TripList />', () => {
	const dispatch = jest.fn();
    it('Renders without crashing', () => {
        shallow(<TripList dispatch={dispatch} />);
    });

    it('Renders correct HTML elements ', () => {
        const wrapper = shallow(<TripList dispatch={dispatch} />);
        expect(wrapper.find('.trip-list').exists()).toEqual(true);
        expect(wrapper.find('.trips').exists()).toEqual(true);
    });

    it('Dispatches getTrips on mount', () => {
        const dispatch = jest.fn(getTrips => getTrips());
        const wrapper = shallow(<TripList dispatch={dispatch} />);
        expect(dispatch).toHaveBeenCalled();
    }); 
});    