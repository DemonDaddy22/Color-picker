import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<div className="logo">
					<a href="#">Color Picker</a>
				</div>
				<div className="slider-container">
					<span>Level: {this.props.level}</span>
					<div className="slider">
						<Slider
							min={100}
							max={900}
							defaultValue={this.props.level}
							step={100}
							onAfterChange={this.props.levelChange}
						/>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
