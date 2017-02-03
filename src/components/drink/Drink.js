import React, { Component } from 'react';
import '../../css/Drink.css';

// Services
import { loadDrinks } from '../../lib/drinksService'


// Components
import DrinkPic from './DrinkPic';
// import DrinkText from '../../components/drink/DrinkText';


class Drink extends Component {
	state = {
	}




	render() {
		console.log(this.props);
		return (
			<div className="drink-wrapper">
					<div className="whisky-header"></div>

					{this.state.drink ?
						<div className="drink">
							<DrinkPic src={this.state.drink.img} alt={this.state.drink.name} />
								<h1>{this.state.drink.name}</h1>
						</div>
					: null
					}

					<div className="whisky-footer"></div>


			</div>
		);
	}
}

export default Drink;

// <DrinkPic
// 	img={this.state.drink.img}
// 	alt={this.state.drink.name}
// />

// <DrinkText drink={this.state.drink} />
