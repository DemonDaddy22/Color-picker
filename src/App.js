import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import seedColours from './seedColours';
import { generatePalette } from './colorHelper';

class App extends Component {
	render() {
		console.log(generatePalette(seedColours[7]));
		return (
			<div>
				<Palette {...seedColours[7]} />
			</div>
		);
	}
}

export default App;
