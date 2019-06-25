import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500
		};
	}
	levelChange = (level) => {
		this.setState({ level: level });
	};
	render() {
		const { colors } = this.props.palette;
		const { level } = this.state;
		const colorBoxes = colors[level].map((c) => <ColorBox key={c.name} background={c.hex} name={c.name} />);
		return (
			<div className="Palette">
				<Navbar level={level} levelChange={this.levelChange} />
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
