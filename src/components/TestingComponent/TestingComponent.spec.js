import React from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import { spy } from 'sinon';
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
	describe('<Form/>', () => {

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

		it('`<form>` element should have one first `<input />` element', () => {
			expect(
				wrapper.find('form').childAt(0).type()
			).toBe('input');
		});

		it('`<form>` element should have one second `<input>` element', () => {
			expect(
				wrapper.find('form').childAt(2).type()
			).toBe('input');
		});

		it('`<form>` element should have a `<button>` element', () => {
			expect(
				wrapper.find('form').childAt(4).type()
			).toBe('button');
		});

		describe('<input />', () => {

			it('should display an error when no value is input', () => {
				const handleFormSubmit = spy();
				wrapper = mount(<TestingComponent handleSubmit={handleFormSubmit} />);
				wrapper.find('form').simulate('submit');
				expect(
					wrapper.state().fieldErrors.name
				).toBe('Please enter your name.');
			});


			//first input

			it('should update the state when a value is input', () => {
				const name = 'Blerch';
				const input = wrapper.find('form').childAt(0);
				input.simulate('change', {
					target: {
						name: 'name',
						value: name,
					}
				});
				expect(
					wrapper.state().fields.name
				).toBe(name);
			});

			it('first input onChange attribute should be of type `function`', () => {
				expect(
					typeof wrapper.find('form').childAt(0).props().onChange === 'function'
				).toBe(true);
			});

			it('first `<input>` element value should be empty', () => {
				expect(
					wrapper.find('form').childAt(0).text()
				).toBe('');
			});

			it('first `<input>` element should be of type `text`', () => {
				expect(
					wrapper.find('form').childAt(0).props().type
				).toBe('text');
			});

			it('first `<input>` element should have a placeholder attribute with value `Login`', () => {
				expect(
					wrapper.find('form').childAt(0).props().placeholder
				).toBe('Login');
			});

			it('first `<input>` element should be required', () => {
				expect(
					wrapper.find('form').childAt(0).props().required
				).toBe(true);
			});

			//second input

			it('should update the state when a value is input', () => {
				const name = 'Blerch';
				const input = wrapper.find('form').childAt(2);
				input.simulate('change', {
					target: {
						name: 'name',
						value: name,
					}
				});
				expect(
					wrapper.state().fields.name
				).toBe(name);
			});

			it('second input onChange attribute should be of type `function`', () => {
				expect(
					typeof wrapper.find('form').childAt(0).props().onChange === 'function'
				).toBe(true);
			});

			it('second `<input>` element value should be empty', () => {
				expect(
					wrapper.find('form').childAt(0).text()
				).toBe('');
			});

			it('second `<input>` element should be of type `password`', () => {
				expect(
					wrapper.find('form').childAt(2).props().type
				).toBe('password');
			});

			it('second `<input>` element should have a placeholder attribute with value `Password`', () => {
				expect(
					wrapper.find('form').childAt(2).props().placeholder
				).toBe('Password');
			});
		});

		describe('<button />', () => {

			it('`<button>` element should be of type `submit`', () => {
				expect(
					wrapper.find('form').childAt(4).props().type
				).toBe('submit');
			});

			it('`<button />` element should have a value of `Submit`', () => {
				expect(
					wrapper.find('form').childAt(4).text()
				).toBe('Submit');
			});
		})
	});

})