import React, { Component } from 'react';

import UnderlinedH3 from './UnderlinedH3';

class Ingredients extends Component {

	convertToArray(input) {
		let array = [];
		Object.keys(input).forEach((key) => {
			array[key] = input[key];
		});
		return array;
	}

	render() {
		return (
			<div className="ingredients">
				<UnderlinedH3 text={'Ingredients'} underlineStyle={this.props.spiritStyle}/>
				<ul className="mb3">
					{this.props.ingredients.map((ingredient, i) => {
						let list = this.convertToArray(ingredient);
						return (
							<li key={i} className={`listing ul-${this.props.spiritStyle}`}>
								{list.quantity && list.quantity + ' '}
								{list.measure && list.measure + ' '}
								{list.ingredient}
							</li>
						)
					})}

				</ul>
			</div>
		);
	}
}

export default Ingredients;
