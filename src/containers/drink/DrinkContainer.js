import React, { Component } from 'react';
import '../../css/Drink.css';

// Services
import { loadDrinks } from '../../lib/drinksService'


// Components
import Drink from '../../components/drink/Drink';


class DrinkContainer extends Component {
	state = {
		drinks: []
	}

	componentDidMount() {
	  loadDrinks().then(drinks => this.setState({drinks}));
	}


	render() {
		const drink = this.state.drinks.find((drink) => {
			let id = parseInt(this.props.params.drinkId, 10);
			return drink.id === id;
		});

		return (
			<Drink {...drink} />
		);
	}
}

export default DrinkContainer;

// <DrinkPic
// 	img={this.state.drink.img}
// 	alt={this.state.drink.name}
// />

// <DrinkText drink={this.state.drink} />
