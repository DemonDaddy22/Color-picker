import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './Navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format: 'hex',
			open: false
		};
	}
	handleChange = (e) => {
		this.setState({ format: e.target.value, open: true }, () => {
			setTimeout(() => this.setState({ open: false }), 2500);
		});
		this.props.handleChange(e.target.value);
	};
	closeSnackBar = () => {
		this.setState({ open: false });
	};
	render() {
		const { format } = this.state;
		return (
			<nav className="navbar">
				<div className="logo">
					<NavLink exact to="/">
						Color Picker
					</NavLink>
				</div>
				<div className="slider-container">
					<span>Level: {this.props.level}</span>
					<div className="slider">
						<Slider
							min={100}
							max={900}
							defaultValue={this.props.level}
							step={100}
							onAfterChange={this.props.levelChange}
						/>
					</div>
				</div>
				<div className="select-container">
					{/* disable select box when snackbar is open */}
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={this.state.open}
					autoHideDuration={2500}
					message={<span id="message-id">Format changed to {format.toUpperCase()}</span>}
					ContentProps={{
						'aria-describedby': 'message-id'
					}}
					action={[
						<IconButton onClick={this.closeSnackBar} color="inherit" key="close" aria-label="close">
							<CloseIcon />
						</IconButton>
					]}
				/>
			</nav>
		);
	}
}

export default Navbar;
