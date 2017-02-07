import React, { Component } from 'react';

// CSS
import '../../css/Drink.css';
import '../../css/Colours.css';

// Components
import DrinkPic from './DrinkPic';
import DrinkText from '../../components/drink/DrinkText';



class Drink extends Component {
	getBackgroundStyle() {
		switch (this.props.spiritFamily) {
			case 'whisky':
				return 'whisky';
			case 'gin':
				return 'gin';
			case 'rum':
				return 'rum';
			case 'vodka':
				return 'vodka';
			case 'tequila':
				return 'tequila';
			case 'other':
				return 'other';
			default:
				return '';
		}
	}

	render() {
		if (!this.props.name) {
			return (
				<h1></h1>
			);
		}

		if (this.props.name) {
			return (
				<div className="drink-wrapper">
					<div className="drink">
						<DrinkPic
							img={this.props.img}
							alt={this.props.name}
						/>
						<DrinkText {...this.props} />
					</div>
				</div>
			);
		}

	}
}

export default Drink;




