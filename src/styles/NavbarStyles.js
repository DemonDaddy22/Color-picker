export default {
	navbar: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: '6vh'
	},
	logo: {
		marginRight: 15,
		padding: '0 13px',
		fontSize: 22,
		backgroundColor: '#eceff1',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		'& a': {
			color: 'black',
			textDecoration: 'none'
		}
	},
	selectContainer: {
		marginLeft: 'auto',
		marginRight: '1rem'
	},
	slider: {
		width: 340,
		margin: '0 10px',
		display: 'inline-block',
		'& .rc-slider-track': {
			backgroundColor: 'transparent'
		},
		'& .rc-slider-rail': {
			height: 8
		},
		'& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:focus, .rc-slider-handle:active': {
			outline: 'none',
			backgroundColor: 'green',
			border: '2px solid green',
			boxShadow: 'none',
			width: 14,
			height: 14,
			marginLeft: '-7px',
			marginTop: '-3px'
		}
	}
};
