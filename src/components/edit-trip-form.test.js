import React from 'react';
import {shallow, mount} from 'enzyme';
import {EditTripForm} from './edit-trip-form';

describe('<EditTripForm />', () => {
    it('Renders without crashing', () => {
        shallow(<EditTripForm />);
    });
 

//should render form

//should dispatch invite and edit trip on submit

//should delete on delete

//should dispatch get users

    it('Dispatches getUsers on rendering', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<EditTripForm  dispatch={dispatch}/>);
        const instance = wrapper.instance();
        instance.addCard();
        expect(dispatch).toHaveBeenCalledWith(getUsers());
    });



});

 