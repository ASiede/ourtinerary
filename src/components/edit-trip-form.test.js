import React from 'react';
import {shallow, mount} from 'enzyme';
import {EditTripForm} from './edit-trip-form';

describe('<EditTripForm />', () => {
    const trip = {id: '123',
        collaborators:[]    
    }
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

    it('Renders correct HTML elements ', () => {
        const wrapper = shallow(<EditTripForm getUsers={fn => fn} dispatch={dispatch} handleSubmit={fn => fn}/>);
        expect(wrapper.find('.edit-trip').exists()).toEqual(true);
        expect(wrapper.find('button').exists()).toEqual(true);
        expect(wrapper.find('.delete-trip').exists()).toEqual(true);

    });
 
    it('Dispatches getUsers on mount', () => {
        const dispatch = jest.fn(getUsers => getUsers());
        const wrapper = shallow(<EditTripForm reset={fn=>fn} ourtinerary={ourtinerary} trip={trip} getUsers={fn => fn} dispatch={dispatch} handleSubmit={fn => fn}/>);
        expect(dispatch).toHaveBeenCalled();
    }); 

    it('Dispatches editTrip on submit', () => {
        const values = {}
        const userId = '123'
        const dispatch = jest.fn(editTrip => editTrip());
        const wrapper = shallow(<EditTripForm reset={fn=>fn} ourtinerary={ourtinerary} trip={trip} getUsers={fn => fn} dispatch={dispatch} handleSubmit={fn => fn}/>);
        const form = wrapper.find('form')
        form.simulate('submit', values)
        expect(dispatch).toHaveBeenCalled();
    }); 

    it('Dispatches getUser on mount', () => {
        const values = {}
        const userId = '123'
        const dispatch = jest.fn(deleteTrip => deleteTrip());
        const wrapper = shallow(<EditTripForm reset={fn=>fn} ourtinerary={ourtinerary} trip={trip} getUsers={fn => fn} dispatch={dispatch} handleSubmit={fn => fn}/>);
        const button = wrapper.find('.delete-trip')
        button.simulate('click')
        expect(dispatch).toHaveBeenCalled();
    }); 
});

 