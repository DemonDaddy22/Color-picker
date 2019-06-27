import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

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
		color: '#fff'
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
	render() {
		const { palettes, classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<div className={classes.nav}>
						<h1>Palettes</h1>
					</div>
					<div className={classes.palettes}>
						{palettes.map((palette) => (
							<div key={palette.id}>
								<MiniPalette {...palette} />
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
