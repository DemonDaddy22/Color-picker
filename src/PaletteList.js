import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import { blue } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import MiniPalette from './MiniPalette';
import bg from './stylesheets/bg.svg';

const styles = {
	'@global': {
		'.fade-exit': {
			opacity: 1
		},
		'.fade-exit-active': {
			opacity: 0,
			transition: 'opacity 500ms ease-out'
		}
	},
	root: {
		/* background by SVGBackgrounds.com */
		backgroundColor: '#180055',
		backgroundImage: `url(${bg})`,
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		height: '100vh',
		overflow: 'auto'
	},
	title: {
		fontSize: '2rem'
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap'
	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: '#fff',
		'& a': {
			color: '#fff',
			textDecoration: 'none'
		}
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '5%'
	}
};

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			deleteId: ''
		};
	}

	openDialog = (id) => {
		this.setState({
			open: true,
			deleteId: id
		});
	};

	closeDialog = () => {
		this.setState({
			open: false,
			deleteId: ''
		});
	};

	handleDelete = () => {
		this.props.deletePalette(this.state.deleteId);
		this.closeDialog();
	};

	goToPalette = (id) => {
		console.log(id);
		this.props.history.push(`/palette/${id}`);
	};
	render() {
		const { palettes, classes } = this.props;
		// console.log(palettes);
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.title}>Color Picker</h1>
						<Link to="/palette/new">Create new palette</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{palettes.map((palette) => (
							<CSSTransition key={palette.id} classNames="fade" timeout={500}>
								<MiniPalette
									key={palette.id}
									palette={palette}
									handleClick={() => this.goToPalette(palette.id)}
									// deletePalette={() => deletePalette(palette.id)}
									deletePalette={() => this.openDialog(palette.id)}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
				<Dialog open={this.state.open} aria-labelledby="delete-dialog-title" onClose={this.closeDialog}>
					<DialogTitle id="delete-dialog-title">Delete this Palette?</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDelete}>
							<ListItemAvatar>
								<Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Delete</ListItemText>
						</ListItem>
						<ListItem button onClick={this.closeDialog}>
							<ListItemAvatar>
								<Avatar style={{ backgroundColor: red[100], color: red[600] }}>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Cancel</ListItemText>
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
