import React from 'react';
import {shallow, mount} from 'enzyme';
import Input  from './input';

describe('<Input />', () => {
	const meta = {}
	const input = {
		name: 'email'
	}

    it('Renders without crashing', () => {
        shallow(<Input input={input} meta={meta}/>);
    });

    it('Renders a label', () => {
        const wrapper = shallow(<Input input={input} meta={meta}/>);
        expect(wrapper.contains(<label>input.name</label>));  
    });

    it('Renders an Element element', () => {
        const wrapper = shallow(<Input input={input} meta={meta}/>);
        expect(wrapper.contains(<Element />)); 
    });
});
