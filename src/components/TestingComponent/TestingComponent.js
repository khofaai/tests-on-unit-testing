import React, { Component } from 'react';

class TestingComponent extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("Why you clicked me .. ? ");
	}

	render() {
		return (
			<form name="form" onSubmit={this.handleSubmit}>
				<input type="text" name="Login" placeholder="Login" />
				<br />
				<input type="password" name="password" placeholder="Password" />
				<br />
				<button type="submit">Click me</button>
			</form>
		);
	}
}

export default TestingComponent;