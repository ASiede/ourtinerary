import React from 'react';
import {shallow, mount} from 'enzyme';
import {Nav} from './nav';


describe('<Nav/>', () => {



	it('Renders without crashing', () => {
	    shallow(<Nav />);
	});

	// it('Renders nav element', () => {
	//     const wrapper = shallow(<Nav />);
	//     expect(wrapper.contains(<nav />))
	// });

	// it('Renders div1 if not logged in', () => {
	//     const wrapper = shallow(<Nav loggedIn={true}/>);
	//     expect(wrapper.contains(<div className='logged-in-modal' />)).to.equal(true);
	// });

	//render div if logged in
	//render div if not logged in

	//scroll to top
	//show modal
	//hide modal
	//show logged in modal
	//hide logged in modal
	//log out


});	