import React from 'react';
import ReactDOM from 'react-dom';
import Cocktail from './Cocktail';

import {Router} from './components/router';

ReactDOM.render(
  <Router>
  	<Cocktail />
  </Router>,
  document.getElementById('root')
);
