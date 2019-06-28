import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import DraggableColorBox from './DraggableColorBox';

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
		width: drawerWidth
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
		padding: theme.spacing(3),
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
	}
});

class NewPaletteForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			currentColor: 'teal',
			newName: '',
			colors: [ { color: '#3486ee', name: 'blue' } ]
		};
	}
	componentDidMount() {
		console.log(this.state);
		ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
			this.state.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
		);
		ValidatorForm.addValidationRule('isColorUnique', (value) =>
			this.state.colors.every(({ color }) => color !== this.state.currentColor)
		);
	}
	handleDrawerOpen = () => {
		this.setState({ open: true });
	};
	handleDrawerClose = () => {
		this.setState({ open: false });
	};
	updateColor = (newColor) => {
		// console.log(newColor);
		this.setState({ currentColor: newColor.hex });
	};
	addNewColor = () => {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newName
		};
		this.setState({ colors: [ ...this.state.colors, newColor ], newName: '' });
	};
	handleChange = (e) => {
		this.setState({ newName: e.target.value });
	};
	render() {
		const { classes } = this.props;
		const { open } = this.state;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.handleDrawerOpen}
							edge="start"
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap>
							Create a Palette
						</Typography>
					</Toolbar>
				</AppBar>
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
					<Typography variant="h4">Design Your Palette</Typography>
					<Button variant="contained" color="secondary">
						Clear Palette
					</Button>
					<Button variant="contained" color="primary">
						Random Color
					</Button>
					<ChromePicker color={this.state.currentColor} onChangeComplete={this.updateColor} />
					<ValidatorForm onSubmit={this.addNewColor}>
						<TextValidator
							value={this.state.newName}
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
							style={{ backgroundColor: this.state.currentColor }}
						>
							Add Color
						</Button>
					</ValidatorForm>
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
					{this.state.colors.map((c) => <DraggableColorBox key={c.name} color={c.color} name={c.name} />)}
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
