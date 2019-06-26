import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
	render() {
		return (
			<div className="PaletteList">
				<h1>Palette List</h1>
				<ul>
					{this.props.palettes.map((palette) => (
						<li key={palette.id}>
							<Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default PaletteList;
