import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Palette from './Palette';
import seedColours from './seedColours';
import { generatePalette } from './colorHelper';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';

class Routes extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		console.log(savedPalettes);
		this.state = {
			palettes: savedPalettes || seedColours
		};
	}

	getPalette = (id) => {
		return this.state.palettes.find(function(palette) {
			return palette.id === id;
		});
	};

	savePalette = (palette) => {
		this.setState(
			{
				palettes: [ ...this.state.palettes, palette ]
			},
			this.syncLocalStorage
		);
	};

	syncLocalStorage = () => {
		window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
	};

	deletePalette = (id) => {
		let palettes = this.state.palettes.filter((p) => p.id !== id);
		this.setState(
			{
				palettes: palettes
			},
			this.syncLocalStorage
		);
	};

	render() {
		return (
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition key={location.key} classNames="page" timeout={500}>
							<Switch location={location}>
								<Route
									exact
									path="/"
									render={(routeProps) => (
										<Page>
											<PaletteList
												deletePalette={this.deletePalette}
												palettes={this.state.palettes}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/palette/new"
									render={(routeProps) => (
										<Page>
											<NewPaletteForm
												palettes={this.state.palettes}
												savePalette={this.savePalette}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/palette/:id"
									render={(routeProps) => (
										<Page>
											<Palette
												palette={generatePalette(this.getPalette(routeProps.match.params.id))}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/palette/:paletteId/:colorId"
									render={(routeProps) => (
										<Page>
											<SingleColorPalette
												palette={generatePalette(
													this.getPalette(routeProps.match.params.paletteId)
												)}
												colorId={routeProps.match.params.colorId}
											/>
										</Page>
									)}
								/>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		);
	}
}

export default Routes;
