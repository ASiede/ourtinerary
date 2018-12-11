import React from 'react';
import {shallow, mount} from 'enzyme';
import {createNewTrip} from '../actions';

import {NewTripForm} from './new-trip-form';

// const mockFetchNewItineraryItemAction = {
//     type: 'FETCH_NEW_ITINERARY_ITEM_SUCCESS'
// };
// jest.mock('../actions', () => Object.assign({},
//     require.requireActual('../actions'),
//     {
//         createNewItineraryItem: jest.fn().mockImplementation(() => {
//             return mockFetchNewItineraryItemAction;
//         })
//     }
// ));

describe('<NewTripForm />', () => {
    it('Renders without crashing', () => {
        shallow(<NewTripForm  handleSubmit={fn => fn}/>);
    }); 

    //dispatch get users

    //dispatchets new trip on submit form

    // it('Changes number of collaborators on click', () => {
    //     const wrapper = mount(<NewTripForm  handleSubmit={fn => fn}/>);
    //     const result = wrapper.find('.add-collaborator')
    //     result.simulate('click');
    //     expect(wrapper.state('numberOfCollaborators')).toEqual(2)
    // }); 

}); 