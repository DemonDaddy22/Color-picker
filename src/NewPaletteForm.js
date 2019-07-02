import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { arrayMove } from 'react-sortable-hoc';
import DraggableColorList from './DraggableColorList';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from './styles/NewPaletteFormStyles';
import seedColors from './seedColours';

class NewPaletteForm extends Component {
	static defaultProps = {
		maxColors: 20
	};

	constructor(props) {
		super(props);
		this.state = {
			open: false,
			colors: seedColors[0].colors
		};
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	addNewColor = (newColor) => {
		this.setState({ colors: [ ...this.state.colors, newColor ] });
	};

	addRandomColor = () => {
		const allColors = this.props.palettes.map((p) => p.colors).flat();
		let i;
		let randomColor;
		let isDuplicate = true;
		while (isDuplicate) {
			i = Math.floor(Math.random() * allColors.length);
			randomColor = allColors[i];
			isDuplicate = this.state.colors.some((color) => color.name === randomColor.name);
		}
		this.setState({ colors: [ ...this.state.colors, randomColor ] });
	};

	clearColors = () => {
		this.setState({ colors: [] });
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	savePalette = (newPalette) => {
		newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
		newPalette.colors = this.state.colors;
		this.props.savePalette(newPalette);
		this.props.history.push('/');
	};

	handleDelete = (name) => {
		// alert(`Delete ${name}`);
		this.setState({
			colors: this.state.colors.filter((color) => color.name !== name)
		});
	};

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex)
		}));
	};

	render() {
		const { classes, maxColors, palettes } = this.props;
		const { open, colors } = this.state;
		const paletteIsFull = colors.length >= maxColors;
		return (
			<div className={classes.root}>
				<PaletteFormNav
					open={open}
					palettes={palettes}
					handleSubmit={this.savePalette}
					handleDrawerOpen={this.handleDrawerOpen}
				/>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<div className={classes.container}>
						<Typography variant="h4">Design Your Palette</Typography>
						<div className={classes.btns}>
							{/* Add transition and dialog for clearing */}
							<Button
								variant="contained"
								color="secondary"
								onClick={this.clearColors}
								className={classes.btn}
							>
								Clear Palette
							</Button>
							<Button
								variant="contained"
								color="primary"
								onClick={this.addRandomColor}
								disabled={paletteIsFull}
								className={classes.btn}
							>
								Random Color
							</Button>
						</div>
						<ColorPickerForm paletteIsFull={paletteIsFull} addNewColor={this.addNewColor} colors={colors} />
					</div>
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
					<DraggableColorList
						colors={colors}
						handleClick={this.handleDelete}
						axis="xy"
						onSortEnd={this.onSortEnd}
						distance={20}
					/>
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
