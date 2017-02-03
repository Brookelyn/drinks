import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

// Components
import Cocktail from './Cocktail';
import Home from './components/home/Home';
import ResultsList from './components/spirit/ResultsList';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Cocktail}>
			<IndexRoute component={Home} />
			<Route path=":spiritPath" component={ResultsList} />
		</Route>
	</Router>,
  document.getElementById('root')
);
