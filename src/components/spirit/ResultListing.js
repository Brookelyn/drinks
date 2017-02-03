import React, { Component } from 'react';

import { Link } from 'react-router';

class ResultListing extends Component {

	render() {
		return (
			<Link to={`${this.props.spiritFamily}/${this.props.id}`}
				className="result-listing">
					<img
						className="list-img"
						src={this.props.img}
						alt={this.props.name}
					/>
					{this.props.name}

			</Link>
		);
	}
}

export default ResultListing;