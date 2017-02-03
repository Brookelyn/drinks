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
			<Route path=":spiritPath" component={ResultsList} />
			<Route path=":spiritPath/:drinkId" component={DrinkContainer} />
		</Route>
	</Router>,
  document.getElementById('root')
);
