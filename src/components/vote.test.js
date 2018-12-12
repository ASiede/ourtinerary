import React from 'react';
import {shallow, mount} from 'enzyme';
import {Vote} from './vote';
import {getVote} from '../actions'

describe('<Vote />', () => {
    
    const ourtinerary = {
        users : [],
        votes : []
    };
    const currentUser = {username: "Delores"}

    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<Vote currentUser={currentUser} ourtinerary={ourtinerary} dispatch={dispatch} />);
    });

    it('Dispatches getVote on mount', () => {
        const voteId = '123'
        const dispatch = jest.fn(getVote => getVote(voteId));
        const wrapper = mount(<Vote voteId={voteId} ourtinerary={ourtinerary} dispatch={dispatch} />);
        expect(dispatch).toHaveBeenCalled();
    });  
});  