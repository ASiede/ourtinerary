import React from 'react';
import {shallow, mount} from 'enzyme';
import {} from '../actions';
import {RegistrationForm} from './registration-form';

describe('<RegistrationForm />', () => {
    const ourtinerary = {error: null}

    it('Renders without crashing', () => {
        shallow(<RegistrationForm ourtinerary={ourtinerary} handleSubmit={fn => fn}/>);
    });

    it('Renders correct HTML elements ', () => {
        const wrapper = shallow(<RegistrationForm ourtinerary={ourtinerary} handleSubmit={fn => fn}/>);
        expect(wrapper.find('.registration-area').exists()).toEqual(true);
        expect(wrapper.find('form').exists()).toEqual(true);
        expect(wrapper.find('button').exists()).toEqual(true);
    });

    it('Dispatches registerUser on submit', () => {
        const values = {}
        const userId = '123'
        const dispatch = jest.fn(registerUser => registerUser());
        const wrapper = shallow(<RegistrationForm dispatch={dispatch} reset={fn=>fn} ourtinerary={ourtinerary} handleSubmit={fn => fn}/>);
        const form = wrapper.find('form')
        form.simulate('submit', values)
        expect(dispatch).toHaveBeenCalled();
    }); 
});    