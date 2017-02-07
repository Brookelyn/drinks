import React, { Component } from 'react';

class UnderlinedH3 extends Component {

	render() {
		return (
			<h3><span className={`section-heading underline-${this.props.underlineStyle}`}>{this.props.text}</span></h3>
		);
	}
}

export default UnderlinedH3;