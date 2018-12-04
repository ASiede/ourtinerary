import React from 'react';
import {shallow, mount} from 'enzyme';

import User from './user';

describe('<User />', () => {
    it('Renders without crashing', () => {
        shallow(<User />);
    });

     it('Render Div initially', () => {
    	const wrapper = shallow(<User />);
    	expect(wrapper.)
    });
});