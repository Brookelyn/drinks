import React, { Component } from 'react';

class UnorderedList extends Component {

	render() {
		return (
			<ul className="mb3">
				{this.props.data.map((listing, i) => {
					return (
						<li key={i} className={`listing ul-${this.props.bulletStyle}`}>{listing}</li>
					);
				})}
			</ul>
		);
	}
}

export default UnorderedList;