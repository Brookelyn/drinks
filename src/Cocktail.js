import React, { Component } from 'react';
import './cocktail-styles.css';
import { Link } from 'react-router';

class Cocktail extends Component {

  render() {
    return (
        <div className="cocktail">
          <div className="header">
            <h1><Link to="/">Cocktail</Link></h1>
          </div>

          {this.props.children}
        </div>
    );
  }
}

export default Cocktail;
