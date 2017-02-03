import React, { Component } from 'react';

class Method extends Component {

	render() {
		return (
			<div className="method">
				<h3><span className="section-heading">{'Method'}</span></h3>
				<p>{this.props.method}</p>
			</div>
		);
	}
}

export default Method;
