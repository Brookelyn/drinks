import React, { Component } from 'react';

// Services
import { loadDrinks } from '../../lib/drinksService'

// Components
import ResultListing from './ResultListing';

import '../../css/Colours.css';


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
				return 'bg-whisky';
			case 'gin':
				return 'bg-gin';
			case 'rum':
				return 'bg-rum';
			case 'vodka':
				return 'bg-vodka';
			case 'tequila':
				return 'bg-tequila';
			case 'other':
				return 'bg-other';
			default:
				return '';
		}
	}

	capitalizeFirstLetter(string) {
	   return string.charAt(0).toUpperCase() + string.slice(1);
	}

	render() {
		const filteredDrinks = this.state.drinks.filter((drink) => {
			return drink.spiritFamily === this.state.spirit;
		});

		const headerStyle = this.getHeaderStyle();

		return (
			<div>
				<div className={`spirit-list-header w-100 ${headerStyle}`}>
					<h1 className="white">{this.state.spirit === 'other' ? 'Everything else' : this.capitalizeFirstLetter(this.state.spirit)}</h1>
				</div>

				<div className="results-list">

					{filteredDrinks && filteredDrinks.map((drink, i) =>
						<ResultListing
							key={i}
							spiritStyle={headerStyle}
							{...drink}
						/>
					)}
				</div>

			</div>
		);
	}
}

export default ResultsList;