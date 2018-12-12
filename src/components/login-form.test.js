import React from 'react';
import {shallow} from 'enzyme';
import {LoginForm} from './login-form'
import {authRequest} from '../actions'

describe('<LoginForm />', () => {
    const ourtinerary = {error: null}
    const disabled=false

    it('Renders without crashing', () => {
        shallow(<LoginForm handleSubmit={fn => fn}/>);
    });

    it('Renders correct HTML elements ', () => {
        const wrapper = shallow(<LoginForm handleSubmit={fn => fn}/>);
        expect(wrapper.find('.login-area').exists()).toEqual(true);
        expect(wrapper.find('form').exists()).toEqual(true);
        expect(wrapper.find('button').exists()).toEqual(true);
    });

});    