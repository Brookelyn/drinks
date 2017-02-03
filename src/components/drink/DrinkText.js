import React, { Component } from 'react';
// import '../css/Drink.css';

// Components
import Equipment from './Equipment';
import Ingredients from './Ingredients';
import Method from './Method';

class DrinkText extends Component {

	render() {
		return (
			<div className="drink-text">
				<h1>{this.props.drink.name}</h1>
				<Equipment equipment={this.props.drink.equipment} />
				<Ingredients ingredients={this.props.drink.ingredients} />
				<Method method={this.props.drink.method} />
			</div>
		);
	}
}

export default DrinkText;
