
import React from 'react';
import {shallow, mount} from 'enzyme';

import {User} from './user';
import {getUser} from '../actions'

// const mockUserAction = {
//     type: 'FETCH_TRIPS'
// };
// jest.mock('../actions', () => Object.assign({},
//     require.requireActual('../actions'),
//     {
//         fetchTrips: jest.fn().mockImplementation(() => {
//             return mockUserAction;
//         })
//     }
// ));

describe('<User />', () => {
    const dispatch = jest.fn();
    const ourtinerary = {
        users : [],
    };
    const currentUser = {username: "Delores"}
    it('Renders without crashing', () => {
        shallow(<User currentUser={currentUser} ourtinerary={ourtinerary} dispatch={dispatch} />);
    });

    //Dispatch get user on mount

    //render elements


});    