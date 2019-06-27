import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		height: '4vh',
		background: 'white',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		fontWeight: 'bold',
		padding: '0.25rem',
		fontSize: '0.9rem'
	},
	emoji: {
		margin: '0 1rem',
		fontSize: '0.9rem'
	}
};

function PaletteFooter(props) {
	const { paletteName, emoji, classes } = props;
	return (
		<footer className={classes.root}>
			{paletteName}
			<span className={classes.emoji}>{emoji}</span>
		</footer>
	);
}

export default withStyles(styles)(PaletteFooter);
