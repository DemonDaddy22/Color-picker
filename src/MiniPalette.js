import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		backgroundColor: '#ffffff',
		borderRadius: '5px',
		border: '1px solid black',
		padding: '0.5rem',
		position: 'relative',
		overflow: 'hidden',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	colors: {
		backgroundColor: '#dae1e4',
		height: '150px',
		width: '100%',
		borderRadius: '5px',
		overflow: 'hidden'
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		color: '#000',
		paddingTop: '0.5rem',
		fontSize: '1rem',
		position: 'relative'
	},
	emoji: {
		marginLeft: '0.5rem',
		fontSize: '1.5rem'
	},
	miniColor: {
		height: '25%',
		width: '20%',
		display: 'inline-block',
		position: 'relative',
		margin: '0 auto',
		marginBottom: '-4.5px'
	}
};

function MiniPalette(props) {
	const { classes, id, paletteName, emoji, colors } = props;
	// console.log(classes);
	const miniColors = colors.map((c) => {
		return <div className={classes.miniColor} style={{ backgroundColor: c.color }} key={c.name} />;
	});
	return (
		<div className={classes.root}>
			<div className={classes.colors}>{miniColors}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
