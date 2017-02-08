import React, { Component } from 'react';

class CocktailMain extends Component {

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default CocktailMain;
