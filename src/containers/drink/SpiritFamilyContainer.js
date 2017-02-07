import React, { Component } from 'react';
import '../../css/Drink.css';


class SpiritFamily extends Component {

	componentWillMount() {
		this.getStyleAndHeaderText();
	}

	getStyleAndHeaderText() {
		let path;
		if (this.props.location.pathname.charAt(0) === '/') {
			path = this.props.location.pathname.slice(1);
		} else {
			path = this.props.location.pathname;
		}

		this.setState({
			style: 'bg-' + path,
		});

		if (path === 'other') {
			this.setState({
				text: 'Everything else'
			});
		}

		this.setState({
			text: path.charAt(0).toUpperCase() + path.slice(1)
		});
	}

	render() {
		return (
			<div>
			<div className={`spirit-list-header w-100 ${this.state.style}`}>
				<h1>{this.state.text}</h1>
			</div>
			{this.props.children}
			</div>
		);
	}
}

export default SpiritFamily;

// <DrinkPic
// 	img={this.state.drink.img}
// 	alt={this.state.drink.name}
// />

// <DrinkText drink={this.state.drink} />
