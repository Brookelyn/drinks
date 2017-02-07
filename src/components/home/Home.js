import React, { Component } from 'react';
import { Link } from 'react-router';


// Components
// import { SearchForm } from '../search/SearchForm';
// import { SpiritFamilyTile } from '../SpiritFamilyTile';

// Services
import { loadSpiritFamilies } from '../../lib/cocktailService';
import { loadDrinks } from '../../lib/drinksService';


class Home extends Component {
	state = {
	  searchText: '',
	  spiritFamilies: []
	}

	componentDidMount() {
	  loadSpiritFamilies().then(spiritFamilies => this.setState({spiritFamilies}));
	  loadDrinks().then(drinks => this.setState({drinks}));
	}

	handleInputChange = (e) => {
	  this.setState({
	    searchText:  e.target.value
	  });
	}

	handleSubmit = (e) => {
	  e.preventDefault();
	  this.setState({
	    searchText: ''
	  });
	}

	getBackgroundImage(input) {
		let spirit;
		if (input !== 'Everything else') {
			spirit = input.toLowerCase()
		} else {
			spirit = 'other'
		}

		let drink = this.state.drinks.find(drink => {
			return drink.spiritFamily === spirit;
		});

		return drink.img;
	}

	getStyle(input) {
		switch (input.toLowerCase()) {
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
			case 'everything else':
				return 'bg-other';
			default:
				return '';
		}
	}

	render() {
		return (
			<div>

			  <div className="spirit-categories">
			    {this.state.drinks && this.state.spiritFamilies.map(spirit =>
			    	<Link className="spirit" to={spirit.path}  key={spirit.id}>
			    		<div className={`spirit-family-name ${this.getStyle(spirit.name)}`}>
			    			<h2>{spirit.name}</h2>
			    		</div>
			    		<div className="img-wrapper">
					      <img src={this.getBackgroundImage(spirit.name)}
					      	alt={spirit.name}
					      />
					     </div>
			      </Link>
			    )}
			  </div>


			</div>
		);
	}
}

Home.propTypes = {

}

export default Home;

// Add back in when time

// <div className="search">
//   <SearchForm
//     searchText={this.state.searchText}
//     handleInputChange={this.handleInputChange}
//     handleSubmit={this.handleSubmit}
//   />
// </div>
