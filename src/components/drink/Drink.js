import React, { Component } from 'react';
import '../../css/Drink.css';

// Components
import DrinkPic from './DrinkPic';
import DrinkText from '../../components/drink/DrinkText';


class Drink extends Component {
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




