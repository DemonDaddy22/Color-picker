import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: 'hex'
		};
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
	changeFormat = (format) => {
		this.setState({ format: format });
	};
	render() {
		// console.log(this._shades);
		const colorBoxes = this._shades.map((c) => {
			// console.log(c);
			return <ColorBox key={c.name} showLink={false} name={c.name} background={c[this.state.format]} />;
		});
		// console.log(colorBoxes);
		return (
			<div className="Palette">
				<Navbar handleChange={this.changeFormat} allColors={false} />
                <div className="Palette-colours">{colorBoxes}</div>
                <PaletteFooter paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji} />
			</div>
		);
	}
}

export default SingleColorPalette;
