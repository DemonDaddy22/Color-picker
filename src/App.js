import React, { Component } from 'react';
import './App.css';
import Palette from './Palette';
import seedColours from './seedColours';

class App extends Component {
	render() {
		return (
			<div>
				<Palette {...seedColours[7]} />
			</div>
		);
	}
}

export default App;
