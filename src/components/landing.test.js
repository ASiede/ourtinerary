import React from 'react';
import {shallow} from 'enzyme';
import {Landing} from './landing';

describe('<Landing />', () => {
    const history = [];

    it('Renders without crashing with no one logged in', () => {
        shallow(<Landing loggedIn={false}/>);
    });

    it('Pushes new link to history when user is logged in', () => {
        shallow(<Landing history={history} loggedIn={true}/>);
        expect(history.length) > 0;
    });

    it('Renders correct HTML elements ', () => {
        const wrapper = shallow(<Landing history={history} loggedIn={true}/>);
        expect(wrapper.find('.short-description').exists()).toEqual(true);
        expect(wrapper.find('.long-description').exists()).toEqual(true);
    });

});    