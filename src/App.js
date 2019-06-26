import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import seedColours from './seedColours';
import Routes from './Routes';

class App extends Component {
	render() {
		// console.log(generatePalette(seedColours[7]));
		return (
			<div>
				{/* <Palette palette={generatePalette(seedColours[7])} /> */}
				<Routes palettes={seedColours} />
			</div>
		);
	}
}

export default App;
