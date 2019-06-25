import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
	render() {
		const colorBoxes = this.props.colors.map((c) => <ColorBox key={c.name} background={c.color} name={c.name} />);
		return (
			<div className="Palette">
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
