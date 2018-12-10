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

describe('<EditTripForm />', () => {

    const trip = {id: '123'}
    const handleSubmit = values => onSubmit(values)

    it('Renders without crashing', () => {
        shallow(<EditTripForm />);
    });
 
//should render form
//should dispatch invite and edit trip on submit
//should delete on delete
//should dispatch get users

    it('Dispatches getUsers on rendering', () => {
        const dispatch = jest.fn();
        shallow(<EditTripForm  trip={trip} handleSubmit={handleSubmit} dispatch={dispatch}/>);
        expect(dispatch).toHaveBeenCalledWith(mockGetUsersAction);
    });



});

 