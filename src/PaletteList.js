import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = {
	root: {
		backgroundColor: 'blue',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		height: '100vh'
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
		const { palettes, classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<div className={classes.nav}>
						<h1>Palettes</h1>
						<Link to="/palette/new">Create new palette</Link>
					</div>
					<div className={classes.palettes}>
						{palettes.map((palette) => (
							<div key={palette.id}>
								<MiniPalette {...palette} handleClick={() => this.goToPalette(palette.id)} />
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
