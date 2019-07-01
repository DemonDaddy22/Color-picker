import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import bg from './stylesheets/bg.svg';

const styles = {
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
					<div className={classes.palettes}>
						{palettes.map((palette) => (
							<MiniPalette
								key={palette.id}
								palette={palette}
								handleClick={() => this.goToPalette(palette.id)}
								deletePalette={() => deletePalette(palette.id)}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
