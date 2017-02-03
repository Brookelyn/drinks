import React, { Component } from 'react';
import '../../css/Drink.css';




// Components
import DrinkPic from './DrinkPic';
import DrinkText from '../../components/drink/DrinkText';


class Drink extends Component {

	render() {
		const drink = this.props;

		return (
			<div className="drink-wrapper">
					<div className="whisky-header"></div>

						<div className="drink">
							<DrinkPic
								img={drink.img}
								alt={drink.name}
							/>
							<DrinkText {...drink} />

						</div>


					<div className="whisky-footer"></div>


			</div>
		);
	}
}

export default Drink;


