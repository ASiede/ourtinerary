import React from 'react';
import {shallow, mount} from 'enzyme';
import {EditTripForm} from './edit-trip-form';

// Mock the async getUsers action
const mockGetUsersAction = {
    type: 'GET_USERS'
};
jest.mock('../actions', () => Object.assign({},
    require.requireActual('../actions'),
    {
        getUsers: jest.fn().mockImplementation(() => {
            return mockGetUsersAction;
        })
    }
));

// Mock the async editTrip action
const mockEditTripAction = {
    type: 'EDIT_TRIP'
};
jest.mock('../actions', () => Object.assign({},
    require.requireActual('../actions'),
    {
        editTrip: jest.fn().mockImplementation(() => {
            return mockEditTripAction;
        })
    }
));

// Mock the async invite action
const mockInviteAction = {
    type: 'INVITE'
};
jest.mock('../actions', () => Object.assign({},
    require.requireActual('../actions'),
    {
        invite: jest.fn().mockImplementation(() => {
            return mockInviteAction;
        })
    }
));

describe('<EditTripForm />', () => {
    const trip = {id: '123'}
    const dispatch = jest.fn();
    const ourtinerary = {
        users: [],
        currentUser: {
            id: "123"
        }
    }

    it('Renders without crashing', () => {
        shallow(<EditTripForm getUsers={fn => fn} dispatch={dispatch} handleSubmit={fn => fn}/>);
    });
 

    //should dispatch edit trip on submit
    // it('Dispatches editTrip upon submit', () => {
    //     const dispatch = jest.fn();
    //     const wrapper = shallow(<EditTripForm ourtinerary={ourtinerary} trip={trip} reset={fn=>fn} handleSubmit={fn => fn} dispatch={dispatch} />);
    //     const form = wrapper.find('form');
    //     const value = {name: "New Name"};      
    //     form.simulate('submit', value);
    //     expect(dispatch).toHaveBeenCalledWith(mockEditTripAction);
    // });
        
//should dispatch invite on submit
// const trip = {id: '123'}
//         const dispatch = jest.fn();
//         const wrapper = shallow(<NewItineraryForm trip={trip} reset={fn=>fn} handleSubmit={fn => fn} dispatch={dispatch} />);
//         const form = wrapper.find('form');
//         const value = {type: "Flight"};      
//         form.simulate('submit', value);
//         wrapper.simulate('scroll')
//         expect(dispatch).toHaveBeenCalledWith(mockFetchNewItineraryItemAction);


//should delete on delete
//should dispatch get users

    // it('Dispatches getUsers on rendering', () => {
    //     const dispatch = jest.fn();
    //     shallow(<EditTripForm  trip={trip} handleSubmit={fn => fn} dispatch={dispatch}/>);
    //     expect(dispatch).toHaveBeenCalledWith(mockGetUsersAction);
    // });



});

 