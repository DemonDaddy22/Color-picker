import chroma from 'chroma-js';
import sizes from './sizes';

export default {
	root: {
		height: '25%',
		width: '20%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-5px',
		'&:hover svg': {
			color: '#fff',
			transform: 'scale(1.3)'
		},
		[sizes.down('lg')]: {
			width: '25%',
			height: '20%'
		},
		[sizes.down('md')]: {
			width: '50%',
			height: '10%',
			marginBottom: '-6px'
		},
		[sizes.down('sm')]: {
			width: '100%',
			height: '5%',
			marginBottom: '-6px'
		},
		[sizes.down('xs')]: {
			width: '100%',
			height: '5%',
			marginBottom: '-6px'
		}
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0',
		bottom: '0',
		padding: '10px',
		color: 'rgba(0,0,0,0.5)',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'space-between',
		[sizes.down('lg')]: {
			padding: '8px'
		},
		[sizes.down('md')]: {
			padding: '6px'
		},
		[sizes.down('sm')]: {
			padding: '4px'
		},
		[sizes.down('xs')]: {
			padding: '4px'
		}
	},
	deleteIcon: {
		color: (props) => (chroma(props.color).luminance() <= 0.12 ? 'rgba(255,255,255,0.7)' : 'rgba(0, 0, 0, 0.8)'),
		transition: 'all 0.25s ease-in-out'
	},
	colorName: {
		color: (props) => (chroma(props.color).luminance() <= 0.12 ? 'white' : 'rgba(0, 0, 0, 0.8)')
	}
};
