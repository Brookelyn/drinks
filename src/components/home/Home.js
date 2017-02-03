import React, { Component } from 'react';
import { Link } from 'react-router';


// Components
import { SearchForm } from '../search/SearchForm';
import { SpiritFamilyTile } from '../SpiritFamilyTile';

// Services
import { loadSpiritFamilies } from '../../lib/cocktailService';
import { loadDrinks } from '../../lib/drinksService'

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

	render() {
		return (
			<section className="cocktail-content">
			  <div className="search">
			    <SearchForm
			      searchText={this.state.searchText}
			      handleInputChange={this.handleInputChange}
			      handleSubmit={this.handleSubmit}
			    />
			  </div>

			  <div className="spirit-categories">
			    {this.state.spiritFamilies.map(spirit =>
			      <div className="spirit" key={spirit.id}>
			        <Link to={spirit.path}>
			          <SpiritFamilyTile name={spirit.name} />
			        </Link>
			      </div>
			    )}
			  </div>


			</section>
		);
	}
}

Home.propTypes = {

}

export default Home;