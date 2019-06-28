import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		height: '25%',
		width: '20%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-3.5px'
	}
};

const DraggableColorBox = (props) => {
	const { classes, color, name } = props;
	return (
		<div className={classes.root} style={{ backgroundColor: color }}>
			{name}
		</div>
	);
};

export default withStyles(styles)(DraggableColorBox);
