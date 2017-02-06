import React, { Component } from 'react';

class Equipment extends Component {

	render() {
		console.log(this.props);
		// debugger;
		return (
			<div className="equipment">
				<h3><span className="section-heading">{'Equipment'}</span></h3>
				<ul className="mb3">
					{this.props.equipment.map((listing, i) => {
						return (
							<li key={i} className="listing">{listing}</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Equipment;



