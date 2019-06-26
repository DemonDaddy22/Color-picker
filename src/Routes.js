import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './Palette';
import seedColours from './seedColours';
import { generatePalette } from './colorHelper';
import PaletteList from './PaletteList';

class Routes extends Component {
	getPalette = (id) => {
		return seedColours.find(function(palette) {
			return palette.id === id;
		});
	};
	render() {
		return (
			<Switch>
				<Route exact path="/" render={() => <PaletteList palettes={seedColours} />} />
				<Route
					exact
					path="/palette/:id"
					render={(routeProps) => (
						<Palette palette={generatePalette(this.getPalette(routeProps.match.params.id))} />
					)}
				/>
			</Switch>
		);
	}
}

export default Routes;
