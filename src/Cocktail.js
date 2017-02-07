import React, { Component } from 'react';
import { Link } from 'react-router';

// CSS
import './cocktail-styles.css';
import './css/Colours.css';

// Services
import { loadSpiritFamilies } from './lib/cocktailService';

class Cocktail extends Component {
  state = {
    spiritFamilies: []
  }

  componentDidMount() {
    loadSpiritFamilies().then(spiritFamilies => this.setState({spiritFamilies}));
  }

  render() {
    return (
        <div className="cocktail">
          <div className="navigation">
            <div className="nav-cocktail">
              <h1>
                <Link to="/">Cocktail</Link>
              </h1>
            </div>
            <div className="spirit-links">
              {this.state.spiritFamilies.map((link) => {
                return (
                  <Link to={link.path} key={link.id}>
                    <div className={`nav-link`}>
                      <h2>{link.name}</h2>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <section className="cocktail-content">
            {this.props.children}
          </section>
        </div>
    );
  }
}

export default Cocktail;
