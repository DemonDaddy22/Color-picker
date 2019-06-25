import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {
	render() {
		return (
			<CopyToClipboard text={this.props.background}>
				<div className="ColorBox" style={{ background: this.props.background }}>
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
