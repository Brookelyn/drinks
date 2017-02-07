import React, { Component } from 'react';
import { Link } from 'react-router';

class SpiritFamilyTile extends Component {

	render() {
		return (
			<div className={`spirit`}>
			  <Link to={this.props.path}>
					<div className="spirit-family-tile">
					  <h2>{this.props.name}</h2>
					</div>
			  </Link>
			</div>
		);
	}
}

// SpiritFamilyTile.propTypes = {
// 	name: React.PropTypes.string
// }

export default SpiritFamilyTile;