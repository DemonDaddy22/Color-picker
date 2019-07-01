import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MiniPalette from './MiniPalette';
import bg from './stylesheets/bg.svg';

const styles = {
	'@global': {
		'.fade-exit': {
			opacity: 1
		},
		'.fade-exit-active': {
			opacity: 0,
			transition: 'opacity 500ms ease-out'
		}
	},
	root: {
		/* background by SVGBackgrounds.com */
		backgroundColor: '#180055',
		backgroundImage: `url(${bg})`,
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		height: '100vh',
		overflow: 'auto'
	},
	title: {
		fontSize: '2rem'
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap'
	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: '#fff',
		'& a': {
			color: '#fff',
			textDecoration: 'none'
		}
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '5%'
	}
};

class PaletteList extends Component {
	goToPalette = (id) => {
		console.log(id);
		this.props.history.push(`/palette/${id}`);
	};
	render() {
		const { palettes, classes, deletePalette } = this.props;
		// console.log(palettes);
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.title}>Color Picker</h1>
						<Link to="/palette/new">Create new palette</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{palettes.map((palette) => (
							<CSSTransition key={palette.id} classNames="fade" timeout={500}>
								<MiniPalette
									key={palette.id}
									palette={palette}
									handleClick={() => this.goToPalette(palette.id)}
									deletePalette={() => deletePalette(palette.id)}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
