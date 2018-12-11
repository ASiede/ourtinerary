
import React from 'react';
import {shallow, mount} from 'enzyme';

import {TripList} from './trip-list';
import {getTrips} from '../actions'

const mockFetchTripAction = {
    type: 'FETCH_TRIPS'
};
jest.mock('../actions', () => Object.assign({},
    require.requireActual('../actions'),
    {
        fetchTrips: jest.fn().mockImplementation(() => {
            return mockFetchTripAction;
        })
    }
));

describe('<TripList />', () => {
	const dispatch = jest.fn();
    it('Renders without crashing', () => {
        shallow(<TripList dispatch={dispatch} />);
    });

 //    it('Dispatches getTrips on mount', () => {
	//     const dispatch = jest.fn();
	//     shallow(<TripList dispatch={dispatch} />);
	//     expect(dispatch).toHaveBeenCalledWith(mockFetchTripAction);
	// });

	//renders elemts
});    