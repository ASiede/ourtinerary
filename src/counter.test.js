import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter});

describes('<Counter />', () => {
	it('Renders without crashing', () => {
		shallow(<Counter />);
	});
})