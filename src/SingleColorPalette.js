import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

const styles = {
	palette: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column'
	},
	colors: {
		height: '90%'
	},
	goBack: {
		width: '20%',
		height: '50%',
		margin: '0 auto',
		marginBottom: '-4.5px',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		opacity: 1,
		background: '#000'
	},
	backBtn: {
		width: '100px',
		height: '30px',
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginLeft: '-50px',
		marginTop: '-15px',
		outline: 'none',
		opacity: 1,
		background: 'rgba(255, 255, 255, 0.3)',
		border: 'none',
		fontSize: '1rem',
		lineHeight: '30px',
		textTransform: 'uppercase',
		borderRadius: '5px',
		cursor: 'pointer',
		textDecoration: 'none',
		textAlign: 'center',
		color: '#fff'
	}
};

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
