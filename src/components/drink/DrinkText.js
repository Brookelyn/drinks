import React, { Component } from 'react';
// import '../css/Drink.css';

// Components
import Equipment from './Equipment';
// import Ingredients from './Ingredients';
// import Method from './Method';

class DrinkText extends Component {

	render() {
		return (
			<div className="drink-text">
				<h1>{this.props.name}</h1>
				<Equipment equipment={this.props.equipment} />
			</div>
		);
	}
}

export default DrinkText;
