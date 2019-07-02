import sizes from './sizes';

export default {
	palette: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'auto'
	},
	colors: {
		height: '90%'
	},
	goBack: {
		width: '20%',
		height: '50%',
		margin: '0 auto',
		marginBottom: '-4.5px',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		opacity: 1,
		background: '#000',
		[sizes.down('lg')]: {
			width: '25%',
			height: (props) => (props.showFullPalette ? '20%' : '33.3333%')
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
	backBtn: {
		width: '100px',
		height: '30px',
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginLeft: '-50px',
		marginTop: '-15px',
		outline: 'none',
		opacity: 1,
		background: 'rgba(255, 255, 255, 0.3)',
		border: 'none',
		fontSize: '1rem',
		lineHeight: '30px',
		textTransform: 'uppercase',
		borderRadius: '5px',
		cursor: 'pointer',
		textDecoration: 'none',
		textAlign: 'center',
		color: '#fff'
	}
};
