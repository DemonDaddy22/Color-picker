import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { SortableElement } from 'react-sortable-hoc';
import styles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement((props) => {
	const { classes, color, name } = props;
	return (
		<div className={classes.root} style={{ backgroundColor: color }}>
			<div className={classes.boxContent}>
				{/* add dynamic text color */}
				<span className={classes.colorName}>{name}</span>
				<span>
					<DeleteRoundedIcon className={classes.deleteIcon} onClick={props.handleClick} />
				</span>
			</div>
		</div>
	);
});

export default withStyles(styles)(DraggableColorBox);
