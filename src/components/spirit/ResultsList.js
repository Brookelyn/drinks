import React, { Component } from 'react';

// Services
import { loadDrinks } from '../../lib/drinksService'

// Components
import ResultListing from './ResultListing';

class ResultsList extends Component {
	state = {
		drinks: [],
		spirit: this.props.params.spiritPath
	}

	componentDidMount() {
	  loadDrinks().then(drinks => this.setState({drinks}));
	}

	getHeaderStyle() {
		switch (this.state.spirit) {
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
		const filteredDrinks = this.state.drinks.filter((drink) => {
			return drink.spiritFamily === this.state.spirit;
		});

		const headerStyle = this.getHeaderStyle();

		return (
			<div>
				<div className={`w-100 spirit-list-header ${headerStyle}`}>
					<h1 className="white">{this.state.spirit === 'other' ? 'Everything else' : this.state.spirit}</h1>
				</div>

				<div className="results-list">

					{filteredDrinks && filteredDrinks.map((drink, i) =>
						<ResultListing
							key={i}
							{...drink}
						/>
					)}
				</div>

			</div>
		);
	}
}

export default ResultsList;