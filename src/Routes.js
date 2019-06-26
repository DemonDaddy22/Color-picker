import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './Palette';
import { generatePalette } from './colorHelper';

class Routes extends Component {
	render() {
		const palettes = this.props.palettes;
		return (
			<Switch>
				<Route exact for="/palettes/:id" render={() => <Palette palette={generatePalette(palettes[4])} />} />
				<Route exact for="/" render={() => <h1>Palettes go here!</h1>} />
			</Switch>
		);
	}
}

export default Routes;
