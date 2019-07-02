import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxsStyles';

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
