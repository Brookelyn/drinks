import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

// Components
import Cocktail from './Cocktail';
import Home from './components/home/Home';
import ResultsList from './components/spirit/ResultsList';
import DrinkContainer from './containers/drink/DrinkContainer';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Cocktail}>
			<IndexRoute component={Home} />
			<Route path=":spiritPath">
				<IndexRoute component={ResultsList} />
				<Route path=":drinkId" component={DrinkContainer} />
			</Route>
		</Route>
	</Router>,
  document.getElementById('root')
);
