import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './Navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: 'hex'
		};
	}
	handleChange = (e) => {
		this.setState({ format: e.target.value });
		this.props.handleChange(e.target.value);
	};
	render() {
		const { format } = this.state;
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
				<div className="select-container">
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
					</Select>
				</div>
			</nav>
		);
	}
}

export default Navbar;
