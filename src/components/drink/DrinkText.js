import React, { Component } from 'react';
// import '../css/Drink.css';

// Components
import Equipment from './Equipment';
// import Ingredients from './Ingredients';
// import Method from './Method';

class DrinkText extends Component {

	render() {
		const drink = this.props;
		return (
			<div className="drink-text">
				<h1>{drink.name}</h1>
				<Equipment {...drink} />
			</div>
		);
	}
}

export default DrinkText;
