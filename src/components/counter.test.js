import React from 'react';
import {shallow} from 'enzyme';
import {Counter} from './counter'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<Counter />', () => {
	it('Renders without crashing', () => {
		shallow(<Counter />);
	});   
})