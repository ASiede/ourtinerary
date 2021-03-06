import React from 'react';
import {shallow, mount} from 'enzyme';
import {Nav} from './nav';

describe('<Nav/>', () => {
	it('Renders without crashing', () => {
	    shallow(<Nav />);
	});

    it('Renders correct HTML elements ', () => {
        const wrapper = shallow(<Nav  handleSubmit={fn => fn}/>);
        expect(wrapper.find('.nav-wrapper').exists()).toEqual(true);
        expect(wrapper.find('.join').exists()).toEqual(true);
        expect(wrapper.find('.modal').exists()).toEqual(true);
        expect(wrapper.find('.close').exists()).toEqual(true);
    });

	it('Changes state className on click of show modal while not logged in', () => {
        const wrapper = shallow(<Nav  handleSubmit={fn => fn}/>);
        const result = wrapper.find('.login-lines');
        result.simulate('click');
        expect(wrapper.state('className')).toEqual('modal-show');
    });

    it('Changes state className on click of hide modal while not logged in', () => {
        const wrapper = shallow(<Nav  handleSubmit={fn => fn}/>);
        const result = wrapper.find('.close');
        result.simulate('click');
        expect(wrapper.state('className')).toEqual('modal');
    });

    it('Changes state className on click of show modal while logged in', () => {
        const wrapper = shallow(<Nav  handleSubmit={fn => fn}/>);
        const result = wrapper.find('.login-lines');
        result.simulate('click');
        expect(wrapper.state('loggedInClassName')).toEqual('logged-in-modal');
    });

    it('Changes state className on click of hide modal while logged in', () => {
        const wrapper = shallow(<Nav  handleSubmit={fn => fn}/>);
        const result = wrapper.find('.close');
        result.simulate('click');
        expect(wrapper.state('loggedInClassName')).toEqual('logged-in-modal');
    });

});	