import React from 'react';
import {shallow, mount} from 'enzyme';

import {Vote} from './vote';
import {getVote} from '../actions'

const mockGetVoteAction = {
    type: 'GET_VOTE'
};
jest.mock('../actions', () => Object.assign({},
    require.requireActual('../actions'),
    {
        getVote: jest.fn().mockImplementation(() => {
            return mockGetVoteAction;
        })
    }
));

const mockEditVoteAction = {
    type: 'GET_VOTE'
};
jest.mock('../actions', () => Object.assign({},
    require.requireActual('../actions'),
    {
        editVote: jest.fn().mockImplementation(() => {
            return mockEditVoteAction;
        })
    }
));


describe('<Vote />', () => {
    const dispatch = jest.fn();
    const ourtinerary = {
        users : [],
        votes : []
    };
    const currentUser = {username: "Delores"}
    it('Renders without crashing', () => {
        shallow(<Vote currentUser={currentUser} ourtinerary={ourtinerary} dispatch={dispatch} />);
    });

    //Dispatch get vote on mount
    // it('Dispatches create new itinerary item on submit form', () => {
    //     const voteId = '123'
    //     const dispatch = jest.fn();
    //     const wrapper = shallow(<Vote voteId={voteId} ourtinerary={ourtinerary} dispatch={dispatch} />);
    //     expect(dispatch).toHaveBeenCalledWith(mockGetVoteAction);
    // });  

    // it('Dispatches create new itinerary item on submit form', () => {
    //     const trip = {id: '123'}
    //     const dispatch = jest.fn();
    //     const wrapper = shallow(<Vote trip={trip} ourtinerary={ourtinerary} reset={fn=>fn} handleSubmit={fn => fn} dispatch={dispatch} />);
    //     const form = wrapper.find('.change-vote');
    //     const voteId = "123"; 
    //     const status = "Yes"
    //     form.simulate('click', [voteId, status]);
    //     expect(dispatch).toHaveBeenCalledWith(mockEditVoteAction);
    // }); 


});  