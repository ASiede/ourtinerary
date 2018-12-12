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

});
