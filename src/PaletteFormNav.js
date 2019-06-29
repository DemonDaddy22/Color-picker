import React, { Component } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 400;

const styles = (theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '64px'
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
		marginRight: 20,
		marginLeft: 12
	},
	navBtns: {
		marginRight: '1rem'
	},
	btn: {
		margin: '0 0.5rem'
	}
});

class PaletteFormNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formShowing: false
		};
	}

	showForm = () => {
		this.setState({
			formShowing: true
		});
	};

	hideForm = () => {
		this.setState({
			formShowing: false
		});
	};

	render() {
		const { classes, open, handleDrawerOpen } = this.props;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					color="default"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar disableGutters={!open}>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" color="inherit" noWrap>
							Create a Palette
						</Typography>
					</Toolbar>
					<div className={classes.navBtns}>
						<Link to="/" style={{ textDecoration: 'none' }}>
							<Button variant="contained" color="secondary" className={classes.btn}>
								Go Back
							</Button>
						</Link>
						<Button variant="contained" color="primary" onClick={this.showForm} className={classes.btn}>
							Save
						</Button>
					</div>
				</AppBar>
				{this.state.formShowing && (
					<PaletteMetaForm
						palettes={this.props.palettes}
						handleSubmit={this.props.handleSubmit}
						hideForm={this.hideForm}
					/>
				)}
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
