import { DRAWER_WIDTH } from '../constants';
import sizes from './sizes';
const drawerWidth = DRAWER_WIDTH;

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
	hide: {
		display: 'none'
	},
	menuButton: {
		marginRight: 20,
		marginLeft: 12
	},
	navBtns: {
		marginRight: '1rem',
		[sizes.down('xs')]: {
			marginRight: '0.5rem'
		}
	},
	btn: {
		margin: '0 0.5rem',
		[sizes.down('xs')]: {
			margin: '0 0.2rem',
			padding: '0.25rem'
		}
	},
	icon: {
		margin: theme.spacing(2),
		color: '#ad2f6a'
	}
});

export default styles;
