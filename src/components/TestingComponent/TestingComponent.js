import React, { Component } from 'react';

class TestingComponent extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.validate = this.validate.bind(this);
		this.onInputChange = this.onInputChange.bind(this);

		this.state = {
			fields: {},
			fieldErrors: {}
		}

	}

	validate(formData) {
		const errors = {};
		if (!formData.name || formData.name === '' || formData.name === null) {
			errors.name = 'Please enter your name.';
		}
		return errors;
	}

	onInputChange(e) {
		const fields = this.state.fields;
		const newFields = {};
		newFields[e.target.name] = e.target.value;
		this.setState({
			fields: { ...fields, ...newFields }
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const formData = this.state.fields
		const fieldErrors = this.validate(formData);

		this.setState({
			fieldErrors
		});

		if (Object.keys(fieldErrors).length) return;

		const name = this.state.fields.name;
		this.props.handleSubmit(name);
		this.setState({
			fields: {},
			fieldErrors: {},
		})
	}

	render() {
		return (
			<form name="form" onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="Login"
					placeholder="Login"
					// value={this.state.fields.name || ''}
					onChange={(e) => this.onInputChange(e)}
				/>
				<br />
				<input
					type="password"
					name="password"
					placeholder="Password"
					onChange={(e) => this.onInputChange(e)}
				/>
				<br />
				<button type="submit">Submit</button>
				<p className="error">
       			   {this.state.fieldErrors.name}
      			</p>
			</form>
		);
	}
}

export default TestingComponent;