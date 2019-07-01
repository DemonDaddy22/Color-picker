import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
	root: {
		backgroundColor: '#ffffff',
		border: 'none',
		borderRadius: '5px',
		padding: '0.5rem',
		marginBottom: '0.5rem',
		position: 'relative',
		overflow: 'hidden',
		cursor: 'pointer',
		'&:hover svg': {
			opacity: 1
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
		marginBottom: '0.5rem',
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
	},
	deleteIcon: {
		color: '#fff',
		backgroundColor: '#eb3d30',
		width: '20px',
		height: '20px',
		position: 'absolute',
		right: '0',
		top: '0',
		padding: '10px',
		zIndex: 10,
		opacity: 0,
		transition: 'all 0.3s ease-in-out'
	}
};

class MiniPalette extends Component {
	deletePalette = (e) => {
		e.stopPropagation();
		this.props.deletePalette();
	};

	render() {
		const { classes, palette } = this.props;
		// console.log(palette);
		const miniColors = palette.colors.map((c) => (
			<div className={classes.miniColor} style={{ backgroundColor: c.color }} key={c.name} />
		));
		return (
			<div className={classes.root} onClick={this.props.handleClick}>
				<DeleteIcon className={classes.deleteIcon} onClick={this.deletePalette} />
				<div className={classes.colors}>{miniColors}</div>
				<h5 className={classes.title}>
					{/* {console.log(emoji)} */}
					{palette.paletteName} <span className={classes.emoji}>{palette.emoji}</span>
				</h5>
			</div>
		);
	}
}

export default withStyles(styles)(MiniPalette);
