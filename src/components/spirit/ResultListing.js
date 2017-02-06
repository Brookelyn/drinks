import React, { Component } from 'react';

import { Link } from 'react-router';

class ResultListing extends Component {

	getBackgroundStyle() {
		switch (this.props.spiritFamily) {
			case 'whisky':
				return 'whisky';
			case 'gin':
				return 'gin';
			case 'rum':
				return 'rum';
			case 'vodka':
				return 'vodka';
			case 'tequila':
				return 'tequila';
			case 'other':
				return 'other';
			default:
				return '';
		}
	}

	render() {
		const colour = this.getBackgroundStyle();
		return (
			<Link to={`${this.props.spiritFamily}/${this.props.id}`}
				className="result-listing">
					<div className="img-wrapper">
						<img
							src={this.props.img}
							alt={this.props.name}
						/>
					</div>
					<div className={`listing-drink-name ${colour}`}>
						<h3>
							{this.props.name}
						</h3>
					</div>
			</Link>
		);
	}
}

export default ResultListing;