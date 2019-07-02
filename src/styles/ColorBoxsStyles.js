import chroma from 'chroma-js';
import sizes from './sizes';
export default {
	colorBox: {
		width: '20%',
		height: (props) => (props.showFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		marginBottom: '-4.5px',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		'&:hover button': {
			opacity: 1,
			transition: 'opacity 0.5s ease-in-out'
		},
		[sizes.down('lg')]: {
			width: '25%',
			height: (props) => (props.showFullPalette ? '20%' : '50%')
		},
		[sizes.down('md')]: {
			width: '50%',
			height: (props) => (props.showFullPalette ? '10%' : '20%')
		},
		[sizes.down('sm')]: {
			width: '100%',
			height: (props) => (props.showFullPalette ? '5%' : '10%')
		},
		[sizes.down('xs')]: {
			width: '100%',
			height: (props) => (props.showFullPalette ? '5%' : '10%')
		}
	},
	copyText: {
		backgroundColor: 'transparent',
		fontWeight: '200',
		fontSize: '2rem',
		color: (props) => (chroma(props.background).luminance() >= 0.6015 ? 'rgba(0, 0, 0, 0.8)' : 'white')
	},
	copyTitle: {
		color: 'white',
		fontWeight: '400',
		textShadow: '1px 2px 2px rgba(0, 0, 0, 0.5)',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		width: '100%',
		marginBottom: '0',
		padding: '1rem',
		backgroundColor: (props) =>
			chroma(props.background).luminance() >= 0.6015 ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.3)'
	},
	colorName: {
		color: (props) => (chroma(props.background).luminance() <= 0.1 ? 'white' : 'rgba(0, 0, 0, 0.8)')
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		left: '0',
		bottom: '0',
		padding: '10px',
		color: 'black',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		fontSize: '12px'
	},
	seeMore: {
		background: 'rgba(255, 255, 255, 0.3)',
		position: 'absolute',
		right: '0',
		bottom: '0',
		padding: '10px',
		textTransform: 'uppercase',
		letterSpacing: '1px',
		fontSize: '12px',
		border: 'none',
		width: '60px',
		height: '30px',
		lineHeight: '30px',
		textAlign: 'center',
		color: (props) => (chroma(props.background).luminance() >= 0.6015 ? 'rgba(0, 0, 0, 0.8)' : 'white')
	},
	copyOverlay: {
		width: '100%',
		height: '100%',
		opacity: '0',
		zIndex: '0',
		transition: '0.4s ease-in-out',
		transform: 'scale(0.1)'
	},
	showOverlay: {
		zIndex: '10',
		opacity: '1',
		transform: 'scale(50)',
		position: 'absolute'
	},
	copyMsg: {
		position: 'fixed',
		left: '0',
		right: '0',
		top: '0',
		bottom: '0',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '4rem',
		color: 'white',
		textAlign: 'center',
		transform: 'scale(0.1)',
		opacity: '0'
	},
	showMsg: {
		opacity: '1',
		zIndex: '20',
		transform: 'scale(1)',
		transition: 'all 0.4s ease-in-out',
		transitionDelay: '0.3s'
	},
	copyBtn: {
		width: '100px',
		height: '30px',
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginLeft: '-50px',
		marginTop: '-15px',
		outline: 'none',
		opacity: 0,
		background: 'rgba(255, 255, 255, 0.3)',
		border: 'none',
		fontSize: '1rem',
		lineHeight: '30px',
		textTransform: 'uppercase',
		borderRadius: '5px',
		cursor: 'pointer',
		textDecoration: 'none',
		textAlign: 'center',
		color: (props) => (chroma(props.background).luminance() >= 0.6015 ? 'rgba(0, 0, 0, 0.8)' : 'white')
	}
};
