import React, { Component } from 'react';
import './cocktail-styles.css';

// Components
import { SearchForm } from './components/search/SearchForm';
import { SpiritFamilyTile } from './components/SpiritFamilyTile';

// Services
import {loadSpiritFamilies} from './lib/cocktailService';

class Cocktail extends Component {
  state = {
    searchText: '',
    spiritFamilies: []
  }

  componentDidMount() {
    loadSpiritFamilies().then(spiritFamilies => this.setState({spiritFamilies}));
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
          <h1>Cocktail</h1>
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
              <SpiritFamilyTile name={spirit.name} />
            )}
          </div>


        </section>

      </div>
    );
  }
}

export default Cocktail;
