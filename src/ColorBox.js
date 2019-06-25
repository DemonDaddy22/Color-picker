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
	render() {
		const { copied } = this.state;
		return (
			<CopyToClipboard text={this.props.background} onCopy={this.handleCopy}>
				<div className="ColorBox" style={{ background: this.props.background }}>
					<div className={`copy-overlay ${copied && 'show'}`} style={{ background: this.props.background }} />
					<div className={`copy-msg ${copied && 'show'}`}>
						<h1>Copied!</h1>
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
