import React from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TestingComponent from './TestingComponent';

configure({ adapter: new Adapter() });

describe('<TestingComponent />', () => {
	let props, wrapper

	beforeEach(() => {
		props = {
			handleSubmit: () => {
			},
		};
		wrapper = shallow(<TestingComponent {...props} />);
	});

	it('should have a `<form>` element', () => {
		expect(
			wrapper.find('form').length
		).toBe(1);
	});
	it('`<form>` element should have a onSubmit attribute', () => {
		expect(
			wrapper.props().onSubmit
		).toBeDefined();
	});
	it('onSubmit attribute should be of type `function`', () => {
		expect(
			typeof wrapper.props().onSubmit === 'function'
		).toBe(true);
	});

})