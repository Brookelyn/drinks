import React, { Component } from 'react';
import { Link } from 'react-router';

// CSS
import './cocktail-styles.css';
import './css/Colours.css';

class Cocktail extends Component {

  render() {
    return (
        <div className="cocktail">
          <div className="header">
            <h1><Link to="/">Cocktail</Link></h1>
          </div>

          <section className="cocktail-content">
            {this.props.children}
          </section>
        </div>
    );
  }
}

export default Cocktail;
