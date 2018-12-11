import React from 'react';
import {shallow, mount} from 'enzyme';

import {Vote} from './vote';
import {getVote} from '../actions'

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

describe('<Vote />', () => {
    const dispatch = jest.fn();
    const ourtinerary = {
        users : [],
    };
    const currentUser = {username: "Delores"}
    it('Renders without crashing', () => {
        shallow(<Vote currentUser={currentUser} ourtinerary={ourtinerary} dispatch={dispatch} />);
    });



    //Dispatch get user on mount

    //render elements


});  