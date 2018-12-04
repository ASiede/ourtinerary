import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';

import Landing from './landing';

describe('<Landing />', () => {
    it('Renders without crashing', () => {
        shallow(<Provider><Landing /></Provider>);
    });

    it('Render Div initially', () => {
    	//
    });

    // it('Should fire history.push if loggedIn', () => {
    // 	//
    // 	const wrapper = shallow(<Provider store={store}><Landing /></Provider>);
    // 	wrapper.setProps({loggedIn: true})
    // 	wrapper.update();
    	
    // });



});