import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import './stylesheets/ColorBox.css';

const styles = {
	colorBox: {
		width: '20%',
		height: (props) => (props.showFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		marginBottom: '-4.5px',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		'&:hover button': {
			opacity: 1,
			transition: 'opacity 0.5s ease-in-out'
		}
	},
	copyText: {
		backgroundColor: 'transparent',
		fontWeight: '200',
		fontSize: '2rem',
		color: (props) => (chroma(props.background).luminance() >= 0.6015 ? 'rgba(0, 0, 0, 0.8)' : 'white')
	},
	copyTitle: {
		color: 'white',
		fontWeight: '400',
		textShadow: '1px 2px 2px rgba(0, 0, 0, 0.5)',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		width: '100%',
		marginBottom: '0',
		padding: '1rem',
		backgroundColor: (props) =>
			chroma(props.background).luminance() >= 0.6015 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.3)'
	},
	colorName: {
		color: (props) => (chroma(props.background).luminance() <= 0.1 ? 'white' : 'rgba(0, 0, 0, 0.8)')
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0',
		bottom: '0',
		padding: '10px',
		color: 'black',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		fontSize: '12px'
	},
	seeMore: {
		background: 'rgba(255, 255, 255, 0.3)',
		position: 'absolute',
		right: '0',
		bottom: '0',
		padding: '10px',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		fontSize: '12px',
		border: 'none',
		width: '60px',
		height: '30px',
		lineHeight: '30px',
		textAlign: 'center',
		color: (props) => (chroma(props.background).luminance() >= 0.6015 ? 'rgba(0, 0, 0, 0.8)' : 'white')
	},
	copyOverlay: {
		width: '100%',
		height: '100%',
		opacity: '0',
		zIndex: '0',
		transition: '0.4s ease-in-out',
		transform: 'scale(0.1)'
	},
	showOverlay: {
		zIndex: '10',
		opacity: '1',
		transform: 'scale(50)',
		position: 'absolute'
	},
	copyMsg: {
		position: 'fixed',
		left: '0',
		right: '0',
		top: '0',
		bottom: '0',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '4rem',
		color: 'white',
		textAlign: 'center',
		transform: 'scale(0.1)',
		opacity: '0'
	},
	showMsg: {
		opacity: '1',
		zIndex: '20',
		transform: 'scale(1)',
		transition: 'all 0.4s ease-in-out',
		transitionDelay: '0.3s'
	},
	copyBtn: {
		width: '100px',
		height: '30px',
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginLeft: '-50px',
		marginTop: '-15px',
		outline: 'none',
		opacity: 0,
		background: 'rgba(255, 255, 255, 0.3)',
		border: 'none',
		fontSize: '1rem',
		lineHeight: '30px',
		textTransform: 'uppercase',
		borderRadius: '5px',
		cursor: 'pointer',
		textDecoration: 'none',
		textAlign: 'center',
		color: (props) => (chroma(props.background).luminance() >= 0.6015 ? 'rgba(0, 0, 0, 0.8)' : 'white')
	}
};

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			copied: false,
			word: 'Copied!'
		};
	}

	handleCopy = () => {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false, word: this.pickRandomWord() }), 1750);
		});
	};

	pickRandomWord = () => {
		let words = [ 'Copied!', 'Great Choice!', 'Paste Me!', 'There you go!', 'Sweet colour!' ];
		let ind = Math.floor(Math.random() * words.length);
		return words[ind];
	};

	render() {
		const { copied, word } = this.state;
		const { classes, showFullPalette } = this.props;
		// console.log(this.props);
		return (
			<CopyToClipboard text={this.props.background} onCopy={this.handleCopy}>
				<div className={classes.colorBox} style={{ background: this.props.background }} onClick={!copied}>
					<div
						className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
						style={{ background: this.props.background }}
					/>
					<div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
						{/* disable clicking of overlay to avoid rendering of different messages */}
						<h1 className={classes.copyTitle}>{word}</h1>
						<p className={classes.copyText}>{this.props.background}</p>
					</div>
					<div className="copy-container">
						<div className={classes.boxContent}>
							<span className={classes.colorName}>{this.props.name}</span>
						</div>
						<button className={classes.copyBtn}>Copy</button>
					</div>
					{showFullPalette && (
						<Link
							to={`/palette/${this.props.paletteId}/${this.props.id}`}
							onClick={(e) => {
								e.stopPropagation();
							}}
						>
							<span className={classes.seeMore}>MORE</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}
export default withStyles(styles)(ColorBox);
