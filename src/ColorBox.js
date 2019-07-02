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
		color: (props) => (chroma(props.background).luminance() >= 0.6015 ? 'rgba(0, 0, 0, 0.8)' : 'white')
	},
	copyTitle: {
		color: (props) => (chroma(props.background).luminance() >= 0.6015 ? 'rgba(0, 0, 0, 0.8)' : 'white'),
		background: (props) =>
			chroma(props.background).luminance() >= 0.6015 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.3)'
	},
	colorName: {
		color: (props) => (chroma(props.background).luminance() <= 0.1 ? 'white' : 'rgba(0, 0, 0, 0.8)')
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
			copied: false
		};
	}
	handleCopy = () => {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	};
	pickRandomWord = () => {
		let words = [ 'Copied!', 'Great Choice!', 'Paste Me!', 'There you go!', 'Sweet colour!' ];
		let ind = Math.floor(Math.random() * words.length);
		return words[ind];
	};
	render() {
		const { copied } = this.state;
		const { classes, showFullPalette } = this.props;
		let word = this.pickRandomWord();
		// console.log(this.props);
		return (
			<CopyToClipboard text={this.props.background} onCopy={this.handleCopy}>
				<div className={classes.colorBox} style={{ background: this.props.background }}>
					<div className={`copy-overlay ${copied && 'show'}`} style={{ background: this.props.background }} />
					<div className={`copy-msg ${copied && 'show'}`}>
						{/* disable clicking of overlay to avoid rendering of different messages */}
						<h1 className={classes.copyTitle}>{word}</h1>
						<p className={classes.copyText}>{this.props.background}</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
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
