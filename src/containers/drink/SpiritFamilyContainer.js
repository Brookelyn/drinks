import React, { Component } from 'react';
import '../../css/Drink.css';


class SpiritFamily extends Component {

	capitaliseFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	render() {
		return (
			<div>
			<div className={`spirit-list-header w-100 bg-${this.props.params.spiritPath}`}>
				<h1>{this.props.params.spiritPath === 'other' ? 'Everything else' : this.capitaliseFirstLetter(this.props.params.spiritPath)}</h1>
			</div>
			{this.props.children}
			</div>
		);
	}
}

export default SpiritFamily;
