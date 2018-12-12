import React from 'react';
import {shallow, mount} from 'enzyme';
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

    it('Changes itinerary type on changing value in form select', () => {
        const wrapper = shallow(<NewItineraryForm  handleSubmit={fn => fn}/>);
        const result = wrapper.find('.type-select')
        result.simulate('change', {target: {value: "Hotel"}});
        expect(wrapper.state('itineraryType')).toEqual("Hotel")
    });

	it('Dispatches create new itinerary item on submit form', () => {
        const trip = {id: '123'}
        const dispatch = jest.fn();
        const wrapper = shallow(<NewItineraryForm trip={trip} reset={fn=>fn} handleSubmit={fn => fn} dispatch={dispatch} />);
        const form = wrapper.find('form');
        const value = {type: "Flight"};      
        form.simulate('submit', value);
        expect(dispatch).toHaveBeenCalledWith(mockFetchNewItineraryItemAction);
    });    

});    










