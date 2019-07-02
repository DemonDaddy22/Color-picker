import bg from './bg.svg';
import sizes from './sizes';

export default {
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
		flexWrap: 'wrap',
		[sizes.down('xl')]: {
			width: '75%'
		},
		[sizes.down('lg')]: {
			width: '75%'
		}
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
		gridGap: '2rem',
		[sizes.down('md')]: {
			gridTemplateColumns: 'repeat(2, 50%)'
		},
		[sizes.down('xs')]: {
			gridTemplateColumns: 'repeat(1, 95%)'
		}
	}
};
