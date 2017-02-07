import React, { Component } from 'react';

import UnorderedList from './UnorderedList';

class Equipment extends Component {

	render() {
		return (
			<div className="equipment">
				<h3><span className="section-heading">{'Equipment'}</span></h3>
				<UnorderedList data={this.props.equipment} />
			</div>
		);
	}
}

export default Equipment;



