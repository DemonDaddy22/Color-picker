import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentColor: '#45bdce',
			newName: ''
		};
	}

	componentDidMount() {
		// console.log(this.state);
		ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
			this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
		);
		ValidatorForm.addValidationRule('isColorUnique', (value) =>
			this.props.colors.every(({ color }) => color !== this.state.currentColor)
		);
	}

	updateColor = (newColor) => {
		// console.log(newColor);
		this.setState({ currentColor: newColor.hex });
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	addNewColor = () => {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newName
		};
		this.props.addNewColor(newColor);
		this.setState({ newName: '' });
	};

	render() {
		const { paletteIsFull } = this.props;
		return (
			<div>
				<ChromePicker color={this.state.currentColor} onChangeComplete={this.updateColor} />
				<ValidatorForm onSubmit={this.addNewColor}>
					<TextValidator
						value={this.state.newName}
						name="newName"
						onChange={this.handleChange}
						validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
						errorMessages={[
							'*Enter a colour name',
							'*Color name must be unique',
							'*Color must be unique'
						]}
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						disabled={paletteIsFull}
						style={{ backgroundColor: paletteIsFull ? '#8f8f8f' : this.state.currentColor }}
					>
						{paletteIsFull ? 'Palette Full' : 'Add Color'}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default ColorPickerForm;
