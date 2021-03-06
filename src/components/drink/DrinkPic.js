import React, { Component } from 'react';

class DrinkPic extends Component {

	shouldComponentUpdate(nextProps, props) {
		if (nextProps !== props) {
			return true;
		}
	}

	render() {
		return (
			<div className="drink-pic">
				<img
					src={this.props.img}
					alt={this.props.name}
				/>
			</div>
		);
	}
}

export default DrinkPic;
