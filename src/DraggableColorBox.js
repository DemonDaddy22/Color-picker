import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { SortableElement } from 'react-sortable-hoc';

const styles = {
	root: {
		height: '25%',
		width: '20%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4.5px',
		'&:hover svg': {
			color: '#fff',
			transform: 'scale(1.3)'
		}
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0',
		bottom: '0',
		padding: '10px',
		color: 'rgba(0,0,0,0.5)',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'space-between'
	},
	deleteIcon: {
		transition: 'all 0.25s ease-in-out'
	}
};

const DraggableColorBox = SortableElement((props) => {
	const { classes, color, name } = props;
	return (
		<div className={classes.root} style={{ backgroundColor: color }}>
			<div className={classes.boxContent}>
				<span>{name}</span>
				<span>
					<DeleteRoundedIcon className={classes.deleteIcon} onClick={props.handleClick} />
				</span>
			</div>
		</div>
	);
});

export default withStyles(styles)(DraggableColorBox);
