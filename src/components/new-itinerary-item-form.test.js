import React from 'react';
import {shallow, mount} from 'enzyme';
import {createNewItineraryItem} from '../actions';

import {NewItineraryForm} from './new-itinerary-item-form';

const mockFetchNewItineraryItemAction = {
    type: 'FETCH_NEW_ITINERARY_ITEM_SUCCESS'
};
jest.mock('../actions', () => Object.assign({},
    require.requireActual('../actions'),
    {
        createNewItineraryItem: jest.fn().mockImplementation(() => {
            return mockFetchNewItineraryItemAction;
        })
    }
));

describe('<NewItineraryForm />', () => {
    it('Renders without crashing', () => {
        shallow(<NewItineraryForm  handleSubmit={fn => fn}/>);
    });

    //renders form 
	// it('Renders form', () => {
 //        const wrapper = shallow(<NewItineraryForm  handleSubmit={fn => fn}/>);
 //        result = wrapper.find('form')

 //    });    

    it('Changes itinerarytype on changing value in form select', () => {
        const wrapper = shallow(<NewItineraryForm  handleSubmit={fn => fn}/>);
        const result = wrapper.find('.type-select')
        result.simulate('change', {target: {value: "Hotel"}});
        expect(wrapper.state('itineraryType')).toEqual("Hotel")
    });

    //on submit dispatch create new itineray form
	// it('Dispatches creat new itinearry item on submit form', () => {
 //        const dispatch = jest.fn();
 //        const wrapper = shallow(<NewItineraryForm handleSubmit={fn => fn} dispatch={dispatch} />);
 //        const form = wrapper.find('form')
 //        form.simulate('submit');
 //        expect(dispatch).toHaveBeenCalledWith(mockFetchNewItineraryItemAction);
 //    });    

    //on submit scroll to top
    // it('Fires scroll to top on submit', () => {
    // 	const callback = jest.fn();
    //     const wrapper = mount(<NewItineraryForm  onSubmit={callback} handleSubmit={fn => fn}/>);
    //     const value = "Foobar"
    //     wrapper.update();
    //     wrapper.find('input[type="text"]').instance().value = value;
    //     wrapper.simulate('submit');
    //     expect(callback).toHaveBeenCalledWith(value);
    // });    


});    










