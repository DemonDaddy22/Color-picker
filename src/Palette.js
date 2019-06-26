import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500,
			format: 'hex'
		};
	}
	levelChange = (level) => {
		this.setState({ level: level });
	};
	changeFormat = (format) => {
		this.setState({ format: format });
	};
	render() {
		const { colors } = this.props.palette;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((c) => <ColorBox key={c.name} background={c[format]} name={c.name} />);
		return (
			<div className="Palette">
				<Navbar level={level} levelChange={this.levelChange} handleChange={this.changeFormat} />
				{/* Navbar goes here */}
				<div className="Palette-colours">
					{/* Bunch of colour boxes */}
					{colorBoxes}
				</div>
				{/* Footer goes here */}
			</div>
		);
	}
}

export default Palette;
