import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';

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
				<div className="slider">
					<Slider min={100} max={900} defaultValue={level} step={100} onAfterChange={this.levelChange} />
				</div>
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
