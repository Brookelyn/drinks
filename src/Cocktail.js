import React, { Component } from 'react';
import './cocktail-styles.css';

class Cocktail extends Component {
  constructor() {
    super();
    this.state = {
      searchText: 'Search here'
    }
  }
  render() {
    return (
      <div className="cocktail">
        <div className="header">
          <h1>Cocktail</h1>
        </div>

        <section className="cocktail-content">
          <div className="search">
            <form>
              <input
                type="text"
                placeholder={this.state.searchText}
              />
            </form>
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
