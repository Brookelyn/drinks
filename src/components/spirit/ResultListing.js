import React, { Component } from 'react';

import { Link } from 'react-router';

class ResultListing extends Component {

	render() {
		return (
			<Link to={`${this.props.spiritFamily}/${this.props.id}`}
				className="result-listing">
					<div className="img-wrapper">
						<img
							src={this.props.img}
							alt={this.props.name}
						/>
					</div>
					<div className={`listing-drink-name ${this.props.spiritStyle}`}>
						<h3>
							{this.props.name}
						</h3>
					</div>
			</Link>
		);
	}
}

export default ResultListing;