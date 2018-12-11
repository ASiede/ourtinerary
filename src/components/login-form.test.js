import React from 'react';
import {shallow} from 'enzyme';
import {LoginForm} from './login-form'

describe('<LoginForm />', () => {
    // const ourtinerary = {error: null}

    it('Renders without crashing', () => {
        shallow(<LoginForm handleSubmit={fn => fn}/>);
    });


});    