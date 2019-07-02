import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MiniPaletteStyles';

class MiniPalette extends PureComponent {
	deletePalette = (e) => {
		e.stopPropagation();
		this.props.deletePalette(this.props.palette.id);
	};

	render() {
		const { classes, palette } = this.props;
		// console.log(palette.paletteName);
		// console.log(palette);
		const miniColors = palette.colors.map((c) => (
			<div className={classes.miniColor} style={{ backgroundColor: c.color }} key={c.name} />
		));
		return (
			<div className={classes.root} onClick={() => this.props.handleClick(palette.id)}>
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
