import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stage: 'paletteName',
			newPaletteName: ''
		};
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
			this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
		);
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.props.hideForm();
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	showEmojiPicker = () => {
		this.setState({ stage: 'emoji' });
	};

	savePalette = (emoji) => {
		// console.log(emoji.native);
		this.props.handleSubmit({
			paletteName: this.state.newPaletteName,
			emoji: emoji.native
		});
	};

	render() {
		const { newPaletteName } = this.state;
		return (
			<div>
				<Dialog open={this.state.stage === 'emoji'} onClose={this.handleClose}>
					<DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
					<Picker onSelect={this.savePalette} title="Pick a Palette Emoji" />
				</Dialog>
				<Dialog
					open={this.state.stage === 'paletteName'}
					onClose={this.handleClose}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
					<ValidatorForm onSubmit={this.showEmojiPicker}>
						<DialogContent>
							<DialogContentText>
								Please enter a name for your new palette. Make sure it's unique!
							</DialogContentText>

							<TextValidator
								onChange={this.handleChange}
								value={newPaletteName}
								label="Palette Name"
								name="newPaletteName"
								fullWidth
								margin="normal"
								validators={[ 'required', 'isPaletteNameUnique' ]}
								errorMessages={[ '*Palette name cannot be empty', '*Palette name already exists' ]}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color="primary">
								Cancel
							</Button>
							<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}

export default PaletteMetaForm;
