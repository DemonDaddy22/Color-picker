import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './Palette';
import seedColours from './seedColours';
import { generatePalette } from './colorHelper';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class Routes extends Component {
	getPalette = (id) => {
		return seedColours.find(function(palette) {
			return palette.id === id;
		});
	};
	render() {
		return (
			<Switch>
				<Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColours} {...routeProps} />} />
				<Route exact path="/palette/new" render={() => <NewPaletteForm />} />
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
