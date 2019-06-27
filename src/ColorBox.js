import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

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
		let word = this.pickRandomWord();
		// console.log(this.props);
		return (
			<CopyToClipboard text={this.props.background} onCopy={this.handleCopy}>
				<div className="ColorBox" style={{ background: this.props.background }}>
					<div className={`copy-overlay ${copied && 'show'}`} style={{ background: this.props.background }} />
					<div className={`copy-msg ${copied && 'show'}`}>
						{/* disable clicking of overlay to avoid rendering of different messages */}
						<h1>{word}</h1>
						<p>{this.props.background}</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span>{this.props.name}</span>
						</div>
						<button className="copy-button">Copy</button>
					</div>
					{this.props.showLink && (
						<Link
							to={`/palette/${this.props.paletteId}/${this.props.id}`}
							onClick={(e) => {
								e.stopPropagation();
							}}
						>
							<span className="see-more">More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}
export default ColorBox;
