import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './stylesheets/Palette.css';

const styles = {
	palette: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column'
	},
	colors: {
		height: '90%'
	}
};

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level: 500,
			format: 'hex'
		};
	}
	levelChange = (level) => {
		this.setState({ level: level });
	};
	changeFormat = (format) => {
		this.setState({ format: format });
	};
	render() {
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const { level, format } = this.state;
		const colorBoxes = colors[level].map((c) => (
			<ColorBox
				key={c.name}
				background={c[format]}
				name={c.name}
				id={c.id}
				paletteId={id}
				showFullPalette={true}
			/>
		));
		return (
			<div className={classes.palette}>
				<Navbar level={level} levelChange={this.levelChange} handleChange={this.changeFormat} allColors />
				{/* Navbar goes here */}
				<div className={classes.colors}>
					{/* Bunch of colour boxes */}
					{colorBoxes}
				</div>
				{/* Footer goes here */}
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
