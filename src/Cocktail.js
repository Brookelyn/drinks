import React, { Component } from 'react';
import './cocktail-styles.css';

// Components
import { SearchForm } from './components/search/SearchForm'

class Cocktail extends Component {
  state = {
    searchText: ''
  }


  handleInputChange = (e) => {
    this.setState({
      searchText:  e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('User is searching for' + this.state.searchText);
  }

  render() {
    // console.log(this.state.searchText);
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
            <div className="spirit">
              <h2>Whisky</h2>
            </div>
            <div className="spirit">
              <h2>Gin</h2>
            </div>
          </div>
          <div className="spirit-categories">
            <div className="spirit">
              <h2>Rum</h2>
            </div>
            <div className="spirit">
              <h2>Vodka</h2>
            </div>
          </div>
          <div className="spirit-categories">
            <div className="spirit">
              <h2>Tequila</h2>
            </div>
            <div className="spirit">
              <h2>Everything else</h2>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default Cocktail;
