import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
					<span className="see-more">More</span>
				</div>
			</CopyToClipboard>
		);
	}
}
export default ColorBox;
