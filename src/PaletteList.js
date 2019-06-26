import React, { Component } from 'react';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
	render() {
		return (
			<div className="PaletteList">
				<h1>Palette Colors</h1>
				{this.props.palettes.map((palette) => (
					<div key={palette.id}>
						<MiniPalette {...palette} />
					</div>
				))}
			</div>
		);
	}
}

export default PaletteList;
