import React from 'react';
import {shallow, mount} from 'enzyme';
import {} from '../actions';

import {RegistrationForm} from './registration-form';

// const mockFetchNewItineraryItemAction = {
//     type: 'FETCH_NEW_ITINERARY_ITEM_SUCCESS'
// };
// jest.mock('../actions', () => Object.assign({},
//     require.requireActual('../actions'),
//     {
//         createNewItineraryItem: jest.fn().mockImplementation(() => {
//             return mockFetchNewItineraryItemAction;
//         })
//     }
// ));


describe('<RegistrationForm />', () => {
    const ourtinerary = {error: null}

    it('Renders without crashing', () => {
        shallow(<RegistrationForm ourtinerary={ourtinerary} handleSubmit={fn => fn}/>);
    });

    it('Renders a form', () => {
        // const wrapper = shallow(<RegistrationForm ourtinerary={ourtinerary} handleSubmit={fn => fn}/>);
        // expect(wrapper.find('form').hasClass('registration-form')).to.equal(true);
            // expect(wrapper.find('.my-button').hasClass('disabled')).to.equal(true);
    });

    //dispatches register user on submit

});    