import React, { Component } from 'react';
import './cocktail-styles.css';

// Components
import { SearchForm } from './components/search/SearchForm';
import { SpiritFamilyTile } from './components/SpiritFamilyTile';
import { Link } from './components/router';

// Services
import { loadSpiritFamilies } from './lib/cocktailService';
import { loadDrinks } from './lib/drinksService'

class Cocktail extends Component {
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
    console.log('User is searching for ' + this.state.searchText);
    this.setState({
      searchText: ''
    });
  }

  render() {
    return (
      <div className="cocktail">
        <div className="header">
          <h1><Link to="/">Cocktail</Link></h1>
        </div>

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

      </div>
    );
  }
}

export default Cocktail;
