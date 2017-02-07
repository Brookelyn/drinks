import React, { Component } from 'react';

// Components
import UnderlinedH3 from './UnderlinedH3';
import UnorderedList from './UnorderedList';
import Ingredients from './Ingredients';

class DrinkText extends Component {

	render() {
		if (!this.props.spiritFamily) {
			return <div>{}</div>
		}
		return (
			<div className="drink-text">
				<h1>{this.props.name}</h1>

				<UnderlinedH3 text={'Equipment'} underlineStyle={this.props.spiritFamily} />
				<UnorderedList data={this.props.equipment} bulletStyle={this.props.spiritFamily} />

				<Ingredients ingredients={this.props.ingredients} spiritStyle={this.props.spiritFamily} />

				<UnderlinedH3 text={'Method'} underlineStyle={this.props.spiritFamily} />
				<p>{this.props.method}</p>

			</div>
		);
	}
}

export default DrinkText;
