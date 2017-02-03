import React, { Component } from 'react';

class Ingredients extends Component {

	render() {
		return (
			<div className="ingredients">
				<h3><span className="section-heading">{'Ingredients'}</span></h3>
				<ul className="mb3">
					{this.props.ingredients.map((ingredient, i) => {
						return (
							<li key={i} className="listing">{ingredient}</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Ingredients;
