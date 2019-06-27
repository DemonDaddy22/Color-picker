import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.getShades(this.props.palette, this.props.colorId);
		// console.log(this._shades);
	}
	getShades = (palette, color) => {
		let shades = [];
		for (let key in palette.colors) {
			// push only the element, so take the 0th element of filtered array
			shades.push(palette.colors[key].filter((c) => c.id === color)[0]);
		}
		return shades.slice(1);
	};
	render() {
		// console.log(this._shades);
		const colorBoxes = this._shades.map((c) => {
			// console.log(c);
			return <ColorBox key={c.name} showLink={false} name={c.name} background={c.hex} />;
		});
		// console.log(colorBoxes);
		return (
			<div className="Palette">
				<h1>Single Color Palette</h1>
				<div className="Palette-colours">{colorBoxes}</div>
			</div>
		);
	}
}

export default SingleColorPalette;
