import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './Palette';
import seedColours from './seedColours';
import { generatePalette } from './colorHelper';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class Routes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			palettes: seedColours
		};
	}
	getPalette = (id) => {
		return this.state.palettes.find(function(palette) {
			return palette.id === id;
		});
	};
	savePalette = (palette) => {
		this.setState({
			palettes: [ ...this.state.palettes, palette ]
		});
	};
	render() {
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps} />}
				/>
				<Route
					exact
					path="/palette/new"
					render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} {...routeProps} />}
				/>
				<Route
					exact
					path="/palette/:id"
					render={(routeProps) => (
						<Palette palette={generatePalette(this.getPalette(routeProps.match.params.id))} />
					)}
				/>
				<Route
					exact
					path="/palette/:paletteId/:colorId"
					render={(routeProps) => (
						<SingleColorPalette
							palette={generatePalette(this.getPalette(routeProps.match.params.paletteId))}
							colorId={routeProps.match.params.colorId}
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default Routes;
