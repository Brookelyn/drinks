import React, { Component } from 'react';

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
				<h3><span className="section-heading">{'Ingredients'}</span></h3>
				<ul className="mb3">
					{this.props.ingredients.map((ingredient, i) => {
						let list = this.convertToArray(ingredient);
						console.log(list);
						return (
							<li key={i} className="listing">
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
