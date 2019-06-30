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

const drawerWidth = 400;

const styles = (theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		display: 'flex',
		alignItems: 'center'
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		height: 'calc(100vh - 64px)',
		flexGrow: 1,
		padding: theme.spacing(1),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	container: {
		width: '90%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	btns: {
		marginTop: '1rem',
		width: '90%',
		display: 'flex',
		justifyContent: 'space-around'
	},
	btn: {
		width: '48%'
	}
});

class NewPaletteForm extends Component {
	static defaultProps = {
		maxColors: 20
	};

	constructor(props) {
		super(props);
		this.state = {
			open: false,
			colors: this.props.palettes[0].colors
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
		var i = Math.floor(Math.random() * allColors.length);
		this.setState({ colors: [ ...this.state.colors, allColors[i] ] });
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
					/>
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
