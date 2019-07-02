import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: 'hex'
		};
		this._shades = this.getShades(this.props.palette, this.props.colorId);
		// console.log(this._shades);
	}
	getShades = (palette, color) => {
		let shades = [];
		for (let key in palette.colors) {
			// push only the element, so take the 0th element of filtered array
			shades.push(palette.colors[key].filter((c) => c.id === color)[0]);
		}
		return shades.slice(1);
	};
	changeFormat = (format) => {
		this.setState({ format: format });
	};
	render() {
		// console.log(this._shades);
		const { classes } = this.props;
		const colorBoxes = this._shades.map((c) => {
			// console.log(c);
			return <ColorBox key={c.name} showFullPalette={false} name={c.name} background={c[this.state.format]} />;
		});
		// console.log(colorBoxes);
		return (
			<div className={classes.palette}>
				<Navbar handleChange={this.changeFormat} allColors={false} />
				<div className={classes.colors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link to={`/palette/${this.props.palette.id}`} className={classes.backBtn}>
							Go Back
						</Link>
					</div>
				</div>
				<PaletteFooter paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
