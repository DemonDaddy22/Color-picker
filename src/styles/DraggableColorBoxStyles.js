import chroma from 'chroma-js';

export default {
	root: {
		height: '25%',
		width: '20%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4.8px',
		'&:hover svg': {
			color: '#fff',
			transform: 'scale(1.3)'
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
		justifyContent: 'space-between'
	},
	deleteIcon: {
		transition: 'all 0.25s ease-in-out'
	},
	colorName: {
		color: (props) => (chroma(props.color).luminance() <= 0.12 ? 'white' : 'rgba(0, 0, 0, 0.8)')
	}
};
