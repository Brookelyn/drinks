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

	componentWillReceiveProps(nextProps) {
		if (nextProps !== this.props) {
			this.setState({
				spirit: nextProps.params.spiritPath
			});
		}
	}

	render() {
		const filteredDrinks = this.state.drinks.filter((drink) => {
			return drink.spiritFamily === this.state.spirit;
		});

		console.log(this.props);
		return (

				<div className="results-list">

					{filteredDrinks && filteredDrinks.map((drink, i) =>
						<ResultListing
							key={i}
							spiritStyle={`bg-${this.state.spirit}`}
							{...drink}
						/>
					)}
				</div>

		);
	}
}

export default ResultsList;