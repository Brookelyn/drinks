import React, { Component } from 'react';

class AddDrink extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			id: this.generateId(),
			equipment: [],
			ingredients: [],
			method: '',
			spiritFamily: this.decideSpiritFamily(),
			img: ''
		}
	}

	generateId() {

	}

	decideSpiritFamily() {

	}

	render() {
		return (
			<h1>{'Add a drink is working!'}</h1>
		);
	}
}

export default AddDrink;
