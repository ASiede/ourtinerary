import React from 'react';
import {shallow, mount} from 'enzyme';
import {User} from './user';
import {getUser} from '../actions';
import {NewTripForm} from './new-trip-form';
import {ReduxForm, Field, focus} from 'redux-form';

describe('<User />', () => {
    const dispatch = jest.fn();
    const ourtinerary = {
        users : [],
    };
    const user = {
        trips: [{id: "123"}]
    }
    const currentUser = {username: "Delores"}
    it('Renders without crashing', () => {
        shallow(<User currentUser={currentUser} ourtinerary={ourtinerary} dispatch={dispatch} />);
    });

    it('Renders correct HTML elements ', () => {
        const wrapper = shallow(<User user={user} currentUser={currentUser} ourtinerary={ourtinerary} dispatch={dispatch} />);
        expect(wrapper.find('.user').exists()).toEqual(true);
        expect(wrapper.find('.browse-trips').exists()).toEqual(true);
        expect(wrapper.find('ReduxForm').exists()).toEqual(true);
    });

    it('Dispatches getUser on mount', () => {
        const userId = '123'
        const dispatch = jest.fn(getUser => getUser(userId));
        const wrapper = shallow(<User currentUser={currentUser} ourtinerary={ourtinerary} dispatch={dispatch} />);
        expect(dispatch).toHaveBeenCalled();
    });  


});    